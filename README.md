# Second Brain OS ChatKit Frontend

A ready-to-deploy AI chat interface powered by [Second Brain OS](https://secondbrainos.com) and OpenAI's ChatKit. Deploy in minutes — no coding required.

## Features

- **One-Click Deploy** - Deploy to Vercel without installing anything
- **OpenAI ChatKit** - Beautiful, responsive chat UI with file upload support
- **Dark/Light Mode** - Polished UI that adapts to user preference
- **Zero Backend Config** - Second Brain OS handles all the infrastructure

## Quick Start

### Step 1: Configure Second Brain OS

In your [Second Brain OS profile](https://secondbrainos.com), configure these settings:

| Setting | Description |
|---------|-------------|
| `auto_responder_instructions` | System prompt for your AI assistant |
| `auto_responder_service_provider` | Your LLM provider (e.g., OpenAI) |
| `auto_responder_large_language_model` | Model to use (e.g., gpt-4o) |
| `open_ai_api_key` | Your OpenAI API key |

### Step 2: Deploy to Vercel (Recommended)

Click the button below to deploy instantly — no downloads or coding needed:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/umairkamilcodes/secondbrainos-chatkit-frontend-nextjs)

During setup, Vercel will ask for environment variables. Add:

| Name | Value |
|------|-------|
| `SECONDBRAINOS_API_KEY` | Your Second Brain OS API key |

### Step 3: Configure OpenAI Domain Allowlist

After deployment, you need to add your domain to OpenAI's allowlist:

1. Go to [OpenAI Platform Domain Allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)
2. Add your Vercel deployment domain (e.g., `your-app.vercel.app`)
3. Copy the **Public Domain Key** provided by OpenAI
4. In Vercel, go to your project's **Settings → Environment Variables** and add:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_OPENAI_DOMAIN_KEY` | Your OpenAI public domain key |

5. **Redeploy** your application in Vercel for the new environment variable to take effect

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

- **Theme**: Modify colors in `components/blocks/chatkit-panel.tsx` under the `theme` configuration
- **Greeting**: Change the `startScreen.greeting` message
- **Styling**: Adjust the container styles and animations

## License

MIT
