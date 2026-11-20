import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = { title: "Contact · FORGIVN" };

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">Contact</p>
      <h1 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">Get in touch.</h1>
      <p className="mt-8 text-[15px] leading-relaxed text-muted-foreground">
        Questions about a piece, sizing or an order? Send us a message and we&apos;ll get back to you.
      </p>
      <div className="mt-8 flex flex-col items-start gap-3">
        <a
          href={`mailto:${CONTACT.email}`}
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-md"
        >
          {CONTACT.email}
        </a>
        {CONTACT.instagram && (
          <a href={`https://instagram.com/${CONTACT.instagram}`} className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            @{CONTACT.instagram} on Instagram
          </a>
        )}
      </div>
    </main>
  );
}
