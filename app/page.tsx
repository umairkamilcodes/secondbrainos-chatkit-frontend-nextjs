"use client";

import { useSearchParams } from "next/navigation";
import { ChatKitPanel } from "@/components/blocks/chatkit-panel";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { DEFAULT_AGENT_NAME } from "@/lib/prompts";


export default function Home() {
  const searchParams = useSearchParams();
  const agentName = searchParams.get("agent_name") || DEFAULT_AGENT_NAME;

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ModeToggle />
      </div>

      {/* ChatKit Section - Centred */}
      <section className="py-8 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ChatKitPanel className="h-[85vh]" agentName={agentName} />
        </div>
      </section>
    </div>
  );
}
