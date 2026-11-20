import type { Metadata } from "next";

export const metadata: Metadata = { title: "About · FORGIVN" };

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">About</p>
      <h1 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">Faith you can wear.</h1>
      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          FORGIVN makes washed tees and hoodies built around one idea: grace. Every piece carries a verse — Ephesians 1:7,
          Isaiah 53:5, Galatians 5:1, Luke 15 — printed big on the back and kept quiet on the front.
        </p>
        <p>
          The Original, The Bloodline, Grace, No Longer a Slave and The 99 are the first five pieces on the rail.
        </p>
      </div>
    </main>
  );
}
