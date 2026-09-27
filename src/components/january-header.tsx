import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { Button } from "@/components/ui/button";

export function JanuaryHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-glass-border bg-glass-soft backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 md:px-12" aria-label="Main navigation">
        <Link to="/" className="flex shrink-0 items-center gap-2 text-lg font-semibold text-foreground sm:text-xl"><Asterisk size={23} strokeWidth={1.6} /> JANUARY<span className="text-signal">.</span></Link>
        <div className="flex items-center gap-4 sm:gap-8">
          <Link to="/" activeOptions={{ exact: true }} className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground sm:block" activeProps={{ className: "text-foreground" }}>Home</Link>
          <Button asChild variant="novaNav"><Link to="/about">About January <ArrowUpRight size={15} /></Link></Button>
        </div>
      </nav>
    </header>
  );
}
