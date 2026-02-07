'use client';

import { useState, useMemo } from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useTheme } from 'next-themes';

interface ChatKitPanelProps {
  className?: string;
  /** Agent name to use for system prompt lookup. Defaults to 'assistant'. */
  agentName?: string;
}

export function ChatKitPanel({ className, agentName = 'assistant' }: ChatKitPanelProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme } = useTheme();

  // Match: light ChatKit in light mode, dark ChatKit in dark mode
  const chatKitColorScheme = resolvedTheme === 'dark' ? 'dark' : 'light';

  // Use local API proxy route (credentials are server-side)
  const proxyUrl = '/api/chatkit';

  const { control } = useChatKit({
    api: {
      // URL and domainKey required by SDK, but we use custom fetch
      url: proxyUrl,
      domainKey: process.env.NEXT_PUBLIC_OPENAI_DOMAIN_KEY || '',
      // Two-phase upload: server returns signed URL, client uploads directly to GCS
      uploadStrategy: { type: 'two_phase' },
      // Route ChatKit protocol requests through proxy, but let GCS uploads go directly
      async fetch(url, init) {
        const urlString = url instanceof Request ? url.url : url.toString();
        // GCS signed URLs go directly (they contain storage.googleapis.com)
        if (urlString.includes('storage.googleapis.com')) {
          return fetch(url, init);
        }
        // Inject agent name header for system prompt lookup
        const headers = new Headers(init?.headers);
        headers.set('x-agent-name', agentName);
        // All other requests (ChatKit protocol) go through the proxy
        return fetch(proxyUrl, { ...init, headers });
      },
    },
    theme: {
      colorScheme: chatKitColorScheme,
      radius: 'round',
      density: 'spacious',
      color: {
        accent: {
          primary: '#2563eb',
          level: 2,
        },
        grayscale: chatKitColorScheme === 'dark'
          ? { hue: 257, tint: 2, shade: 3 }
          : { hue: 222, tint: 4, shade: 3 },
      },
    },
    startScreen: {
      greeting: 'How can I help you today?',
    },
    composer: {
      placeholder: 'Type your message...',
      attachments: {
        enabled: true,
        // Client-side restrictions (UX only - backend enforces actual limits)
        maxCount: 5,
        maxSize: 10 * 1024 * 1024, // 10 MB per file
        // Format matches showOpenFilePicker API: { mimeType: [extensions] }
        accept: {
          // Images
          'image/jpeg': ['.jpg', '.jpeg'],
          'image/png': ['.png'],
          'image/gif': ['.gif'],
          'image/webp': ['.webp'],
          // Documents
          'application/pdf': ['.pdf'],
          'text/plain': ['.txt'],
          'text/markdown': ['.md', '.markdown'],
          'text/csv': ['.csv'],
          // Code files
          'application/json': ['.json'],
          'application/xml': ['.xml'],
          'text/html': ['.html', '.htm'],
          'text/css': ['.css'],
          'text/javascript': ['.js', '.mjs'],
        },
      },
    },
  });

  // Shared timing function matching gallery4 and feature-spotlight
  const cubicBezierTiming = "cubic-bezier(0.16, 1, 0.3, 1)";

  // Memoized styles for hover animations
  const containerStyle = useMemo(() => ({
    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
    boxShadow: isHovered
      ? "0 24px 64px hsl(var(--foreground) / 0.1)"
      : "0 4px 24px hsl(var(--foreground) / 0.05)",
    transitionTimingFunction: cubicBezierTiming,
  }), [isHovered]);

  const frameOutlineStyle = useMemo(() => ({
    borderColor: isHovered ? "hsl(var(--foreground) / 0.15)" : "transparent",
    transform: isHovered ? "scale(1.005)" : "scale(1)",
    transitionTimingFunction: cubicBezierTiming,
  }), [isHovered]);

  // Corner accent styles with staggered delays
  const cornerAccentStyles = useMemo(() => ({
    topLeft: {
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "scaleY(1)" : "scaleY(0)",
      transformOrigin: "top" as const,
      transitionTimingFunction: cubicBezierTiming,
      transitionDelay: "50ms",
    },
    topLeftH: {
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left" as const,
      transitionTimingFunction: cubicBezierTiming,
      transitionDelay: "100ms",
    },
    bottomRight: {
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "scaleY(1)" : "scaleY(0)",
      transformOrigin: "bottom" as const,
      transitionTimingFunction: cubicBezierTiming,
      transitionDelay: "150ms",
    },
    bottomRightH: {
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "right" as const,
      transitionTimingFunction: cubicBezierTiming,
      transitionDelay: "200ms",
    },
  }), [isHovered]);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with animated line - matching gallery4 style */}
      <div className="mb-3 flex items-center justify-end md:mb-4">
        <div className="flex items-center gap-3 md:gap-4">
          <span
            className="text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-700 md:text-base"
            style={{
              letterSpacing: isHovered ? "0.2em" : "0.15em",
              transitionTimingFunction: cubicBezierTiming,
            }}
          >
            AI Assistant
          </span>
          <div
            className="h-px bg-foreground transition-all duration-700"
            style={{
              width: isHovered ? 48 : 32,
              transitionTimingFunction: cubicBezierTiming,
            }}
          />
        </div>
      </div>

      {/* Frame outline - matching feature-spotlight style */}
      <div
        className="absolute -inset-3 border transition-all duration-700 md:-inset-4 pointer-events-none"
        style={frameOutlineStyle}
      />

      {/* Main chat container */}
      <div
        className={`relative w-full overflow-hidden bg-background/95 backdrop-blur-sm transition-all duration-700 ${className || 'h-150'}`}
        style={containerStyle}
      >
        {/* Corner accents - matching feature-spotlight style */}
        <div
          className="absolute left-3 top-3 h-6 w-px bg-primary/80 transition-all duration-500 pointer-events-none z-10"
          style={cornerAccentStyles.topLeft}
        />
        <div
          className="absolute left-3 top-3 h-px w-6 bg-primary/80 transition-all duration-500 pointer-events-none z-10"
          style={cornerAccentStyles.topLeftH}
        />
        <div
          className="absolute bottom-3 right-3 h-6 w-px bg-primary/80 transition-all duration-500 pointer-events-none z-10"
          style={cornerAccentStyles.bottomRight}
        />
        <div
          className="absolute bottom-3 right-3 h-px w-6 bg-primary/80 transition-all duration-500 pointer-events-none z-10"
          style={cornerAccentStyles.bottomRightH}
        />

        <ChatKit control={control} className="h-full w-full" />
      </div>
    </div>
  );
}
