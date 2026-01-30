import { NextRequest } from 'next/server';

/**
 * Proxy route for ChatKit requests.
 * Forwards requests to the self-hosted backend with server-side credentials.
 * This keeps API keys secure and not exposed to the browser.
 */

async function forwardToBackend(request: NextRequest) {
  const backendUrl = 'https://openai.secondbrainos.com/chatkit';
  // CHATKIT_API_KEY contains the full "user_id:secret" format
  const apiKey = process.env.SECONDBRAINOS_API_KEY || '';

  // Forward the request body as-is
  const body = await request.text();

  const response = await fetch(backendUrl, {
    method: 'POST',
    headers: {
      'Content-Type': request.headers.get('Content-Type') || 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
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
