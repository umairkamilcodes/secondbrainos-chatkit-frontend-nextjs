"use client";

import { ChatKitPanel } from "@/components/blocks/chatkit-panel";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { ScrollCards } from "@/components/ui/scroll-card";
import { StaggerTestimonials, TestimonialItem } from "@/components/ui/stagger-testimonials";
import StoryNarrator from "@/components/blocks/story-narrator";
import { PricingWithChart } from "@/components/ui/pricing-with-chart";
import { MessageSquare, FileText, Calendar, Mic, Phone, Globe, Users, FileSearch, Database, ChevronDown } from "lucide-react";

// Voice AI Placeholder Component
function VoiceAIPlaceholder() {
  return (
    <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-12 text-center bg-background/50">
      <Mic className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
      <p className="text-muted-foreground font-medium">Voice AI Demo Component</p>
      <p className="text-sm text-muted-foreground/60 mt-1">Coming soon</p>
    </div>
  );
}

const timelineData: TimelineEntry[] = [
  {
    title: "Step 1",
    card: {
      title: "We train LenderGPT on your materials",
      description: "Comprehensive knowledge base setup",
      content: (
        <p className="text-muted-foreground">
          Broker kit, scorecards, preferred collateral list, program guides, credit tier requirements, state-specific rules
        </p>
      ),
    },
  },
  {
    title: "Step 2",
    card: {
      title: "We deploy it on your website",
      description: "Seamless integration",
      content: (
        <p className="text-muted-foreground">
          Clean chat interface brokers can access anytime, with document upload support
        </p>
      ),
    },
  },
  {
    title: "Step 3",
    card: {
      title: "We set up an inbound phone line",
      description: "Voice-enabled AI assistant",
      content: (
        <p className="text-muted-foreground">
          Brokers can call and speak to LenderGPT using a voice cloned to your preference
        </p>
      ),
    },
  },
  {
    title: "Step 4",
    card: {
      title: "We connect it to your systems",
      description: "Full integration",
      content: (
        <p className="text-muted-foreground">
          Appointment bookings in your CRM, Slack/Teams alerts, abandoned lead follow-up
        </p>
      ),
    },
  },
];

const brokerQuestions: TestimonialItem[] = [
  {
    tempId: 0,
    testimonial: "Does the Medical/Dental Program count license date or practice start date?",
  },
  {
    tempId: 1,
    testimonial: "Can I do app-only for $175k if my client owns the business real estate?",
  },
  {
    tempId: 2,
    testimonial: "Does the New Business Program cover testing equipment?",
  },
  {
    tempId: 3,
    testimonial: "What credit tier do I need for the 6-Month Step Program?",
  },
  {
    tempId: 4,
    testimonial: "Are Class 2 lasers eligible, or only FDA Approved?",
  },
  {
    tempId: 5,
    testimonial: "What's the minimum credit score for the 90-Day Deferral Program?",
  },
  {
    tempId: 6,
    testimonial: "Can I do app-only for $180k on medical equipment?",
  },
  {
    tempId: 7,
    testimonial: "What's the funding range for the 6-Month Step Program?",
  },
];

const featureBlocks = [
  {
    icon: MessageSquare,
    title: "Ask questions in plain English about program eligibility",
    examples: [
      '"What\'s the max amount for Application-Only?"',
      '"My client is a dentist with 18 months in practice but 8 years licensed. Which program?"',
      '"Is testing equipment on your preferred collateral list?"',
    ],
  },
  {
    icon: MessageSquare,
    title: "Ask questions in plain English about credit tier requirements",
    examples: [
      '"What tier do I need for the 90-Day Deferral Program?" → 2A or better',
      '"Can I get the 6-Month Step Program at tier 2B?" → No, requires 1A, 1B, or 2A',
      '"What factors might get a deal approved outside normal parameters?" → Owns real estate, $25k+ bank balance, 10+ years in business',
    ],
  },
  {
    icon: MessageSquare,
    title: "Ask questions in plain English about program specifics",
    examples: [
      '"What\'s the funding range for the 6-Month Step Program?" → $35,000 to $100,000',
      '"Do you offer no prepayment penalty?" → Yes, for customers who specifically request it',
      '"What laser equipment is NOT acceptable?" → Class 1 and 2 lasers, LED therapy equipment. Must be FDA Approved, not just cleared.',
    ],
  },
  {
    icon: FileText,
    title: "Upload bank statements for preliminary vetting",
    examples: [
      "Brokers upload PDFs directly in the chat",
      "LenderGPT reviews against your criteria",
      "Faster pre-qualification before formal submission",
    ],
  },
  {
    icon: Calendar,
    title: "Book appointments with your team",
    examples: [
      "Integrated scheduling for complex deals",
      "Slack/Teams notifications when appointments are booked",
      "Automatic reminders and rescheduling",
    ],
  },
];

const offeringStories = [
  {
    id: 1,
    content: "LenderGPT trained on all 4 Hour Funding programs and policies",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 2,
    content: "Business owner training for ongoing knowledge updates",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3,
    content: "Broker-facing chat interface on 4hourfunding.com",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 4,
    content: "PDF and image upload (including bank statement review)",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 5,
    content: "Appointment booking with Slack/Teams notifications",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 6,
    content: "Appointment cancel/reschedule handling",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 7,
    content: "Dedicated inbound phone line for broker inquiries",
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 8,
    content: "Voice cloned to your team's preference",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 9,
    content: "Same appointment booking and notification features",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2940&auto=format&fit=crop",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-12">
          <Heading level="h2" weight="bold" className="text-center mb-8 text-balance">
            Stop Answering The Same Broker Questions Over &amp; Over Again
          </Heading>
        </div>

        <StaggerTestimonials
          items={brokerQuestions}
          hideAttribution={true}
          height={400}
          transparent={true}
          cardWidth={350}
          cardHeight={175}
          mobileCardWidth={300}
          mobileCardHeight={180}
        />

        <div className="max-w-3xl mx-auto mt-8 px-4 md:px-12">
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-6">
            You built your reputation on speed. Application to funding in under 4 hours. Credit decisions in 2 hours. Electronic signatures in 1 hour. Vendor payment the same day.
          </p>

          <p className="text-lg md:text-xl text-foreground text-center font-medium mb-10">
            But when brokers have questions about your programs, speed disappears. <span className="text-primary">Your team is stretched thin answering the same questions—while new deals wait.</span>
          </p>

          <div className="flex justify-center">
            <Button size="lg" className="text-lg px-8">
              See It In Action
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <Heading level="h2" weight="bold" className="text-center mb-6">
            The Solution
          </Heading>

          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            <span className="text-foreground font-semibold">LenderGPT</span> is an AI Agent trained specifically on your broker pack, program guides, credit tiers, and collateral requirements. It answers broker questions instantly—24 hours a day, 7 days a week—via your website or phone. No more waiting. No more lost deals at 7pm.
          </p>

          <p className="text-lg text-foreground text-center font-medium mb-10">
            Here&apos;s what brokers can (easily) do:
          </p>

          {/* ChatKit Demo */}
          <div className="max-w-2xl mx-auto mb-16">
            <ChatKitPanel />
          </div>

          {/* Scrolling Feature Cards */}
          <ScrollCards
            cards={featureBlocks.map((feature, index) => ({
              id: index,
              content: (
                <div className="space-y-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.examples.map((example, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            }))}
            cardHeight="min-h-[50vh]"
          />

          <p className="text-lg text-muted-foreground text-center mt-10">
            No more repetitive calls. No more email backlogs. No more lost deals because a broker couldn&apos;t get a quick answer at 7pm.
          </p>
        </div>
      </section>

      {/* Voice AI Demo Section (Placeholder) */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <Heading level="h2" weight="bold" className="text-center mb-4">
            Or Just Call
          </Heading>
          <p className="text-lg text-muted-foreground text-center mb-10">
            Brokers can call and speak directly to LenderGPT. Same knowledge, same instant answers—just over the phone. Voice cloned to match your team&apos;s preference.
          </p>

          <div className="max-w-2xl mx-auto">
            <VoiceAIPlaceholder />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 px-4 md:px-12">
        <Timeline
          data={timelineData}
          header={{
            title: "How It Works",
            description: "A simple 4-step process to get LenderGPT running for your business.",
          }}
        />
      </section>

      {/* What's On Offer Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 md:px-12 mb-12">
          <Heading level="h2" weight="bold" className="text-center">
            What&apos;s On Offer
          </Heading>
        </div>

        <StoryNarrator stories={offeringStories} />
      </section>

      {/* Powerful Add-Ons Section */}
      <section className="py-16 md:py-24 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Heading level="h2" weight="bold" className="text-center mb-4">
            Powerful Add-Ons
          </Heading>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Extend LenderGPT&apos;s capabilities to match how your team actually works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Voice & SMS Bot */}
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Voice & SMS Bot</h3>
              <p className="text-muted-foreground text-sm">
                Outbound calls and texts for abandoned leads, appointment reminders, and follow-ups. Never lose a deal to silence.
              </p>
            </div>

            {/* Spanish Language Support */}
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Spanish Language Support</h3>
              <p className="text-muted-foreground text-sm">
                Full bilingual capability—chat and voice—for brokers and borrowers who prefer Spanish.
              </p>
            </div>

            {/* Broker Portal Access */}
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Broker Portal Access</h3>
              <p className="text-muted-foreground text-sm">
                Give brokers a login to track their deals, check status, and upload documents—all in one place.
              </p>
            </div>

            {/* Document Intelligence */}
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <FileSearch className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Document Intelligence</h3>
              <p className="text-muted-foreground text-sm">
                Automatic extraction and analysis of bank statements, tax returns, and financial documents. Pre-qualification in seconds.
              </p>
            </div>

            {/* CRM Integration */}
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <Database className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">CRM Integration</h3>
              <p className="text-muted-foreground text-sm">
                Bi-directional sync with Salesforce, HubSpot, or your existing CRM. Every conversation, every deal, logged automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Results Section */}
      <PricingWithChart />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <Heading level="h2" weight="bold" className="text-center mb-12">
            Frequently Asked Questions
          </Heading>

          <div className="space-y-4">
            <details className="group bg-background rounded-lg border border-border">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium">
                How long does setup take?
                <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                Most lenders are live within 2 weeks. We handle the training, deployment, and integration—you just review and approve.
              </div>
            </details>

            <details className="group bg-background rounded-lg border border-border">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium">
                What if LenderGPT gets something wrong?
                <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                LenderGPT only answers from the materials you provide. If something&apos;s incorrect, we update the knowledge base immediately. You can also set it to escalate uncertain questions to your team.
              </div>
            </details>

            <details className="group bg-background rounded-lg border border-border">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium">
                Can brokers still talk to a human?
                <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                Absolutely. LenderGPT can transfer calls or schedule appointments with your team for complex deals or when brokers prefer a human touch.
              </div>
            </details>

            <details className="group bg-background rounded-lg border border-border">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium">
                What happens to the conversations?
                <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                All conversations are logged and available for review. You own your data—we never use it to train models for other lenders.
              </div>
            </details>

            <details className="group bg-background rounded-lg border border-border">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium">
                Do I need technical staff to maintain this?
                <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                No. We handle all technical maintenance. When your programs or policies change, just send us the updated materials and we&apos;ll retrain LenderGPT.
              </div>
            </details>

            <details className="group bg-background rounded-lg border border-border">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium">
                Can LenderGPT handle multiple programs?
                <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                Yes. It&apos;s trained on your complete broker pack—all programs, all tiers, all collateral types. Brokers can ask about any of them.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level="h2" weight="bold" className="mb-6">
            You fund in 4 hours. Answer broker questions in 4 seconds.
          </Heading>

          <p className="text-xl text-muted-foreground mb-10">
            <span className="text-foreground font-semibold">LenderGPT</span> — Powered by the Second Brain OS
          </p>

          <Button size="lg" className="text-lg px-10">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
