# Second Brain OS ChatKit Frontend

A ready-to-deploy AI chat interface powered by [Second Brain OS](https://secondbrainos.com) and OpenAI's ChatKit. Clone, configure, and deploy in minutes.

## Features

- **OpenAI ChatKit** - Beautiful, responsive chat UI with file upload support
- **Next.js App Router** - Modern React framework with server components
- **shadcn/ui** - Polished UI components with dark/light mode
- **Zero Backend Config** - Second Brain OS handles all the infrastructure

## Quick Start

### 1. Configure Second Brain OS

In your [Second Brain OS profile](https://secondbrainos.com), configure the following settings:

| Setting | Description |
|---------|-------------|
| `auto_responder_instructions` | System prompt for your AI assistant |
| `auto_responder_service_provider` | Your LLM provider (e.g., OpenAI) |
| `auto_responder_large_language_model` | Model to use (e.g., gpt-4o) |
| `open_ai_api_key` | Your OpenAI API key |

### 2. Clone & Deploy

```bash
git clone https://github.com/your-username/chatkit-frontend-nextjs.git
cd chatkit-frontend-nextjs
```

### 3. Set Environment Variable

Create a `.env.local` file or configure in your deployment platform:

```env
SECONDBRAINOS_API_KEY=your_second_brain_os_api_key
```

### 4. Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your AI assistant.

### 5. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/chatkit-frontend-nextjs)

Add `SECONDBRAINOS_API_KEY` as an environment variable in your Vercel project settings.

## Project Structure

```
├── app/
│   ├── api/chatkit/      # Proxy route to Second Brain OS backend
│   ├── layout.tsx        # Root layout with theme provider
│   └── page.tsx          # Home page with ChatKit panel
├── components/
│   └── blocks/
│       └── chatkit-panel.tsx  # ChatKit component with styling
```

## Customization

- **Theme**: Modify colors in `chatkit-panel.tsx` under the `theme` configuration
- **Greeting**: Change the `startScreen.greeting` message
- **Styling**: Adjust the container styles and animations in `chatkit-panel.tsx`

## License

MIT
