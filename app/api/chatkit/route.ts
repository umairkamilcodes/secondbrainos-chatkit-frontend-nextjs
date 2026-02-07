import { NextRequest } from 'next/server';
import { getSystemPrompt, DEFAULT_AGENT_NAME } from '@/lib/prompts';

/**
 * Proxy route for ChatKit requests.
 * Forwards requests to the self-hosted backend with server-side credentials.
 * This keeps API keys secure and not exposed to the browser.
 *
 * Also handles agent_name -> system_prompt resolution:
 * - Reads x-agent-name header from client
 * - Looks up system prompt from lib/prompts.ts
 * - Forwards as x-system-prompt header to backend
 */

async function forwardToBackend(request: NextRequest) {
  const backendUrl = 'https://openai.secondbrainos.com/chatkit';
  // SECONDBRAINOS_API_KEY contains the full "user_id:secret" format
  const apiKey = process.env.SECONDBRAINOS_API_KEY || '';

  // Get agent name from header (sent by ChatKitPanel), default to configured default
  const agentName = request.headers.get('x-agent-name')?.trim() || DEFAULT_AGENT_NAME;

  // Look up system prompt for this agent
  const systemPrompt = getSystemPrompt(agentName);

  // Forward the request body as-is
  const body = await request.text();

  // Build headers
  const headers: Record<string, string> = {
    'Content-Type': request.headers.get('Content-Type') || 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  // Only add system prompt header if we found a prompt for this agent
  // Base64 encode to handle newlines and special characters (HTTP headers can't contain newlines)
  if (systemPrompt) {
    headers['x-system-prompt'] = Buffer.from(systemPrompt, 'utf-8').toString('base64');
  }

  const response = await fetch(backendUrl, {
    method: 'POST',
    headers,
    body,
  });

  // Return streaming response if the backend is streaming
  if (response.headers.get('Content-Type')?.includes('text/event-stream')) {
    return new Response(response.body, {
      status: response.status,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  }

  // Return JSON response
  const data = await response.text();
  return new Response(data, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('Content-Type') || 'application/json',
    },
  });
}

// POST handles ChatKit protocol requests (threads, messages, attachments.create)
export async function POST(request: NextRequest) {
  return forwardToBackend(request);
}

// PUT handles file uploads for two-phase upload
// The widget may send PUT to the proxy URL if the signed URL isn't used correctly
export async function PUT(request: NextRequest) {
  return forwardToBackend(request);
}
