/**
 * Agent system prompts configuration.
 *
 * Each prompt can use {agent_name} as a placeholder which will be
 * interpolated at runtime with the actual agent name.
 */

export const DEFAULT_AGENT_NAME = 'assistant';

/**
 * System prompts keyed by agent name.
 * Add new agents here as needed.
 */
export const AGENT_PROMPTS: Record<string, string> = {
  assistant: `You are {agent_name}, a helpful AI assistant.

Your role is to help users with their questions and tasks.
Be professional, accurate, and helpful.

Always provide clear explanations and ask clarifying questions when needed.`,
};

/**
 * Get the system prompt for an agent, with {agent_name} interpolated.
 * Falls back to default template if agent is not found.
 */
export function getSystemPrompt(agentName: string): string | null {
  const template = AGENT_PROMPTS[agentName] ?? AGENT_PROMPTS[DEFAULT_AGENT_NAME];
  if (!template) {
    return null;
  }
  return template.replace(/\{agent_name\}/g, agentName);
}
