import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ChevronRight, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollVideo } from "@/components/scroll-video";

const portrait = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260728_050334_5b076e26-0ce7-4898-b432-d764190e448f.png&w=1280&q=85";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOVA_AI — Today AI Aligns With Bold Dreams" },
      { name: "description", content: "NovaAI designs automation that brings clarity, precision, and efficiency to the way your company operates." },
      { property: "og:title", content: "NOVA_AI — Today AI Aligns With Bold Dreams" },
      { property: "og:description", content: "NovaAI designs automation that brings clarity, precision, and efficiency to the way your company operates." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const capabilities = [
  { number: "01", title: "Real-time vision", body: "Reads context as it happens and surfaces what matters before you ask." },
  { number: "02", title: "Layered insight", body: "Moves from rough outline to sharp output without losing the thread." },
  { number: "03", title: "Adaptive speed", body: "Learns your cadence and tightens every pass as you work." },
];

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <ScrollVideo />
      <div className="relative z-10">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-glass-border/75 bg-glass-soft backdrop-blur-md">
          <nav className="flex h-18 items-center justify-between px-5 sm:px-8 md:px-12" aria-label="Main navigation">
            <Reveal><a href="#top" className="flex items-center gap-2 text-lg font-medium sm:text-xl"><Hexagon size={24} strokeWidth={1.5} />novaai</a></Reveal>
            <div className="hidden items-center gap-8 md:flex lg:gap-10">
              {["Projects", "About", "Blog", "Contact"].map((label, index) => (
                <Reveal key={label} delay={100 + index * 100}>
                  <a href={label === "Contact" ? "#contact" : "#capabilities"} className="text-sm text-foreground/85 drop-shadow-md transition-colors duration-300 hover:text-foreground">
                    {label}{label === "Projects" && <sup className="ml-1 font-mono text-[10px] text-foreground/60">6</sup>}
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={500}><Button asChild variant="novaNav"><a href="#contact">Get Free Consultation</a></Button></Reveal>
          </nav>
        </header>

        <main>
          <section id="top" className="flex min-h-screen flex-col justify-between px-5 pb-12 pt-24 supports-[height:100svh]:min-h-[100svh] sm:px-8 sm:pt-28 md:px-12 md:pb-16">
            <div className="flex flex-col justify-between gap-8 sm:flex-row">
              <div className="flex flex-col gap-2">
                {["/ AI AUTOMATION", "/ AI INTEGRATION", "/ AI AGENT DEVELOPMENT"].map((service, index) => (
                  <Reveal key={service} delay={150 + index * 120}><p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/90 drop-shadow-md">{service}</p></Reveal>
                ))}
              </div>
              <Reveal delay={300} className="max-w-xs sm:text-right"><p className="text-lg leading-relaxed text-foreground drop-shadow-md sm:text-xl">We design automation that brings clarity, precision, and efficiency to the way your company operates.</p></Reveal>
            </div>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <Reveal delay={150} className="mb-5"><span className="inline-block border-l-2 border-foreground bg-glass px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] backdrop-blur-md">We Automate 100+ Businesses</span></Reveal>
                <Reveal delay={280}><h1 className="text-5xl font-normal leading-[1.05] text-foreground drop-shadow-lg sm:text-6xl lg:text-7xl">Clear. Precise.<br />Automated.</h1></Reveal>
              </div>
              <Reveal delay={420} className="w-fit max-w-full" >
                <div id="contact" className="flex items-center gap-4 rounded-xl bg-glass p-3 backdrop-blur-md">
                  <img src={portrait} alt="Mitha, co-founder of NovaAI" className="h-24 w-20 shrink-0 rounded-lg object-cover" />
                  <div className="flex flex-col gap-1.5 pr-2">
                    <p className="text-sm font-medium text-foreground">Talk with Mitha</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/60">Co-founder of NovaAI</p>
                    <Button asChild variant="novaSmall" className="mt-1.5 self-start"><a href="mailto:hello@novaai.com?subject=15-minute%20call%20with%20Mitha">Book 15-mins call <ChevronRight size={14} /></a></Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <div className="h-[80vh]" aria-hidden="true" />

          <section id="capabilities" className="flex min-h-screen flex-col justify-between px-5 pb-12 pt-24 supports-[height:100svh]:min-h-[100svh] sm:px-8 sm:pt-28 md:px-12 md:pb-16">
            <div className="flex flex-col justify-between gap-8 sm:flex-row">
              <Reveal delay={120} className="self-start"><span className="inline-block border-l-2 border-foreground bg-glass px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] backdrop-blur-md">Insight On Demand</span></Reveal>
              <Reveal delay={220} className="max-w-sm sm:text-right"><p className="text-lg leading-relaxed text-foreground drop-shadow-md sm:text-xl">Our AI doesn't just respond — it interprets, sharpens, and delivers the signal you need.</p></Reveal>
            </div>
            <div className="flex flex-1 flex-col justify-end gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
              <div className="max-w-xl">
                <Reveal delay={180}><h2 className="text-5xl font-normal leading-[1.05] text-foreground drop-shadow-lg sm:text-6xl lg:text-7xl">Learn to see<br />brilliantly.</h2></Reveal>
                <Reveal delay={320} className="mt-6 max-w-md"><p className="text-sm text-foreground/80 drop-shadow-md sm:text-base">From the first sketch to the final render, Nova turns raw intent into decisions your team can act on — quietly, precisely, at speed.</p></Reveal>
                <Reveal delay={420} className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="novaPrimary"><a href="#top">Run the demo <ChevronRight size={14} /></a></Button>
                  <Button asChild variant="novaSecondary"><a href="#contact">Free consultation</a></Button>
                </Reveal>
              </div>
              <div className="w-full max-w-md rounded-2xl border border-glass-border/75 bg-glass-soft px-5 backdrop-blur-md sm:px-6">
                {capabilities.map((item, index) => (
                  <Reveal key={item.number} delay={300 + index * 110} className={index < capabilities.length - 1 ? "border-b border-glass-border/75" : ""}>
                    <div className="group flex gap-5 py-5">
                      <span className="pt-1 font-mono text-[11px] tracking-[0.15em] text-foreground/55">{item.number}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3"><h3 className="text-base font-medium text-foreground sm:text-lg">{item.title}</h3><ChevronRight size={16} className="shrink-0 text-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-foreground" /></div>
                        <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{item.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}