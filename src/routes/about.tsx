import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { JanuaryHeader } from "@/components/january-header";
import guide from "@/content/january.md?raw";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About JANUARY — Capabilities, architecture & setup" },
    { name: "description", content: "Explore January's complete technical guide: macOS companion architecture, model routing, computer control, Blender 3D, camera vision, voice, memory, and setup." },
    { property: "og:title", content: "About JANUARY — Capabilities, architecture & setup" },
    { property: "og:description", content: "The complete guide to January's macOS AI companion, from camera eyes and voice to 3D creation and local memory." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: About,
});

const sections = guide.split(/(?=^## )/m).filter(Boolean);
const chapters = sections.map((content, index) => ({
  content,
  id: `chapter-${index}`,
  label: content.match(/^## (.+)$/m)?.[1]?.replace(/^[^\p{L}\p{N}]+/u, "") ?? "Overview",
}));

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JanuaryHeader />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-foreground"><ArrowLeft size={15} /> Back to home</Link>
        <div className="mb-16 mt-12 border-b border-glass-border pb-12"><p className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-signal">/ THE COMPLETE REFERENCE</p><h1 className="max-w-4xl text-5xl leading-[1.05] sm:text-6xl md:text-7xl">Inside <span className="text-signal">JANUARY.</span></h1><p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">From local voice and vision to model routing, computer control and 3D creation. The full technical reference, preserved from the supplied January documentation.</p></div>
        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block"><nav aria-label="On this page" className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-5"><p className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-signal">CONTENTS</p><ol className="space-y-3">{chapters.slice(1).map(({ id, label }, index) => <li key={id}><a href={`#${id}`} className="flex gap-3 text-xs leading-relaxed text-foreground/55 transition-colors hover:text-foreground"><span className="text-signal/70">{String(index + 1).padStart(2, "0")}</span><span>{label}</span></a></li>)}</ol></nav></aside>
          <div className="min-w-0">
            <details className="mb-12 border-y border-glass-border py-4 lg:hidden"><summary className="cursor-pointer font-mono text-xs uppercase tracking-[0.15em] text-signal">Contents</summary><nav aria-label="On this page" className="mt-5 grid gap-3 sm:grid-cols-2">{chapters.slice(1).map(({ id, label }) => <a key={id} href={`#${id}`} className="text-sm text-foreground/70 hover:text-foreground">{label}</a>)}</nav></details>
            {chapters.map(({ content, id }, index) => <section id={id} key={id} className="january-reference scroll-mt-28 border-b border-glass-border pb-12 mb-12"><ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>{index === chapters.length - 1 && <Link to="/" className="mt-12 inline-flex items-center gap-2 text-sm text-signal hover:underline">Return to January <ArrowUpRight size={15} /></Link>}</section>)}
          </div>
        </div>
      </main>
    </div>
  );
}
