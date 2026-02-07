# Second Brain OS ChatKit Frontend

A ready-to-deploy AI chat interface powered by [Second Brain OS](https://secondbrainos.com) and OpenAI's ChatKit. Deploy in minutes — no coding required.

## Features

- **One-Click Deploy** - Deploy to Vercel without installing anything
- **OpenAI ChatKit** - Beautiful, responsive chat UI with file upload support
- **Dark/Light Mode** - Polished UI that adapts to user preference
- **Zero Backend Config** - Second Brain OS handles all the infrastructure

## Quick Start

### Step 1: Get Your OpenAI API Key

1. Go to [OpenAI Platform API Keys](https://platform.openai.com/api-keys)
2. Create a new API key and save it securely

### Step 2: Register Your Domain with OpenAI Allowlist

Before deploying, you need to register your domain with OpenAI:

1. Go to [OpenAI Platform Domain Allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)
2. Add your planned Vercel deployment domain (e.g., `your-app.vercel.app`)
3. Copy the **Public Domain Key** provided by OpenAI — you'll need this during deployment

### Step 3: Configure Second Brain OS

In your [Second Brain OS profile](https://secondbrainos.com), configure these settings:

| Setting | Description |
|---------|-------------|
| `auto_responder_instructions` | System prompt for your AI assistant |
| `auto_responder_service_provider` | Your LLM provider (e.g., OpenAI) |
| `auto_responder_large_language_model` | Model to use (e.g., gpt-4o) |
| `open_ai_api_key` | Your OpenAI API key (from Step 1) |

### Step 4: Deploy to Vercel (Recommended)

Click the button below to deploy instantly — no downloads or coding needed:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/umairkamilcodes/secondbrainos-chatkit-frontend-nextjs)

During setup, Vercel will ask for environment variables. Add:

| Name | Value |
|------|-------|
| `SECONDBRAINOS_API_KEY` | Your Second Brain OS API key |
| `NEXT_PUBLIC_OPENAI_DOMAIN_KEY` | Your OpenAI public domain key (from Step 2) |

That's it! Your AI chat assistant will be live at your Vercel URL.

---

## Running Locally (Optional)

If you prefer to run locally or want to customize the code, you'll need Node.js installed.

### 1. Clone the repository

```bash
git clone https://github.com/umairkamilcodes/secondbrainos-chatkit-frontend-nextjs.git
cd secondbrainos-chatkit-frontend-nextjs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variable

Create a file called `.env.local` in the project folder:

```env
SECONDBRAINOS_API_KEY=your_second_brain_os_api_key
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your AI assistant.

---

## Customization

### Custom Agent Names

You can customize the AI assistant's identity by passing an `agent_name` query parameter:

```
https://your-app.vercel.app/?agent_name=my_custom_agent
```

The agent name is interpolated into the system prompt template, so the AI will identify as whatever name you provide.

**How it works:**

1. The `agent_name` query parameter is read from the URL
2. The system prompt template in `lib/prompts.ts` uses `{agent_name}` as a placeholder
3. The placeholder is replaced with the actual agent name before being sent to the backend
4. The backend uses this as the system prompt (overriding the default `auto_responder_instructions` from Second Brain OS)

**Customizing the prompt template:**

Edit `lib/prompts.ts` to modify the default system prompt template:

```typescript
export const AGENT_PROMPTS: Record<string, string> = {
  assistant: `You are {agent_name}, a helpful AI assistant.

Your role is to help users with their questions and tasks.
Be professional, accurate, and helpful.

Always provide clear explanations and ask clarifying questions when needed.`,
};
```

You can also add multiple named prompts for different use cases:

```typescript
export const AGENT_PROMPTS: Record<string, string> = {
  assistant: `You are {agent_name}, a helpful AI assistant...`,
  'sales-agent': `You are {agent_name}, a sales specialist...`,
  'support-agent': `You are {agent_name}, a customer support expert...`,
};
```

Then access them via URL: `?agent_name=sales-agent`

### Theme & Styling

- **Theme**: Modify colors in `components/blocks/chatkit-panel.tsx` under the `theme` configuration
- **Greeting**: Change the `startScreen.greeting` message
- **Styling**: Adjust the container styles and animations

## License

MIT
