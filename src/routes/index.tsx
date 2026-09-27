import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, AudioLines, Box, BrainCircuit, Eye, Monitor, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollVideo } from "@/components/scroll-video";
import { JanuaryHeader } from "@/components/january-header";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "JANUARY — A local AI companion for your Mac" },
    { name: "description", content: "Meet January: an emotionally expressive macOS AI companion with camera eyes, voice, computer control, dynamic model routing, and 3D creation." },
    { property: "og:title", content: "JANUARY — A local AI companion for your Mac" },
    { property: "og:description", content: "An emotionally expressive macOS AI companion that sees, listens, reasons, creates and acts." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const capabilities = [
  { icon: Eye, number: "01", title: "Camera eyes", detail: "Native AVFoundation camera streaming, local face detection, and multimodal vision." },
  { icon: BrainCircuit, number: "02", title: "A mind that routes", detail: "A dynamic router selects from 458+ models for coding, vision, reasoning and conversation." },
  { icon: Monitor, number: "03", title: "Computer-using agent", detail: "Natural-language control of macOS windows, mouse and keyboard, with safety interlocks." },
  { icon: Box, number: "04", title: "3D creation", detail: "Blender-powered objects, engineering models, and blueprint-to-BIM architecture." },
  { icon: AudioLines, number: "05", title: "Voice with feeling", detail: "Local speech recognition, seven emotion archetypes, and neural voice with fallbacks." },
  { icon: Sparkles, number: "06", title: "Memory that stays", detail: "Local conversation continuity, adaptive preferences and multilingual interaction." },
];

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollVideo />
      <div className="relative z-10">
        <JanuaryHeader />
        <main>
          <section className="flex min-h-[calc(100svh-2rem)] flex-col justify-between px-5 pb-12 pt-28 sm:px-8 md:px-12 md:pb-16" aria-labelledby="home-title">
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-start justify-between gap-8">
              <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/85 drop-shadow-md sm:text-xs">
                <p>/ LOCAL INTELLIGENCE</p><p>/ NATIVE TO MACOS</p><p>/ ALWAYS IN YOUR CORNER</p>
              </div>
              <p className="max-w-xs text-base leading-relaxed text-foreground drop-shadow-md sm:text-right sm:text-lg">An emotionally expressive companion that sees, listens, reasons, creates and acts — right on your Mac.</p>
            </div>
            <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <span className="mb-5 inline-block border-l-2 border-signal bg-glass px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] backdrop-blur-md">THE MAC IS JUST THE BEGINNING</span>
                <h1 id="home-title" className="text-[clamp(3.4rem,7.5vw,7.5rem)] font-medium leading-[0.98] drop-shadow-lg">Meet <span className="text-signal">JANUARY.</span><br /><span className="font-normal">Think beyond the screen.</span></h1>
              </div>
              <Button asChild variant="novaSecondary" className="shrink-0"><Link to="/about">Explore January <ArrowUpRight size={16} /></Link></Button>
            </div>
          </section>

          <section className="relative border-t border-glass-border bg-background/85 px-5 py-20 backdrop-blur-lg sm:px-8 md:px-12 md:py-28" aria-labelledby="capability-title">
            <div className="mx-auto max-w-7xl">
              <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div><p className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-signal">/ A DIFFERENT KIND OF ASSISTANT</p><h2 id="capability-title" className="max-w-2xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl">Not just an answer.<br />A presence.</h2></div>
                <p className="max-w-sm text-base leading-relaxed text-foreground/70">January brings perception, intelligence and action together in one local macOS companion.</p>
              </div>
              <div className="grid border-t border-glass-border sm:grid-cols-2 lg:grid-cols-3">
                {capabilities.map(({ icon: Icon, number, title, detail }) => <article key={number} className="flex min-h-60 flex-col border-b border-glass-border p-6 sm:border-r sm:p-8">
                  <div className="flex items-start justify-between text-signal"><Icon size={27} strokeWidth={1.5} /><span className="font-mono text-xs text-foreground/50">{number}</span></div>
                  <div className="mt-auto pt-10"><h3 className="mb-3 text-xl font-medium">{title}</h3><p className="max-w-xs text-sm leading-relaxed text-foreground/65">{detail}</p></div>
                </article>)}
              </div>
            </div>
          </section>

          <section className="border-t border-glass-border bg-background px-5 py-20 sm:px-8 md:px-12 md:py-28">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div><p className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-signal">/ TWO WAYS TO CONNECT</p><h2 className="max-w-3xl text-4xl leading-[1.08] sm:text-5xl">In the room. Or at the keyboard.</h2><p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70">Say “Rise” to the background companion, or open the interactive terminal. January moves between voice and text without losing the conversation.</p></div>
              <Button asChild variant="novaPrimary" className="self-start md:self-auto"><Link to="/about">Read the full story <ArrowRight size={16} /></Link></Button>
            </div>
          </section>
        </main>
        <footer className="border-t border-glass-border bg-background px-5 py-7 sm:px-8 md:px-12"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-xs text-foreground/55"><span>JANUARY / LOCAL INTELLIGENCE</span><Link to="/about" className="hover:text-foreground">About January ↗</Link></div></footer>
      </div>
    </div>
  );
}
