"use client";

import ClothingRailHero from "@/components/ui/product-rail-gallery";
import type { RailGarment } from "@/components/ui/product-rail-gallery";

export const RAIL_DEMO_ITEMS: RailGarment[] = [
  {
    id: "the-original",
    name: "The Original · Signature FORGIVN tee",
    kind: "tee",
    color: "#EFEDE8",
    tag: "$45",
    description: "Washed white tee with the FORGIVN mark on the chest and \"You Are Forgiven.\" across the back.",
    details: ["Ephesians 1:7", "Oversized fit", "Distressed print"],
    image: "/garments/original-front.webp",
    backImage: "/garments/original-back.webp",
    sideImage: "/garments/original-side.webp",
  },
  {
    id: "the-bloodline",
    name: "The Bloodline · Paid in Full tee",
    kind: "tee",
    color: "#111111",
    tag: "$45",
    description: "Black tee with a red-washed cross on the chest and a crown of thorns under \"Paid in Full\" on the back.",
    details: ["Isaiah 53:5", "Oversized fit", "Back print"],
    image: "/garments/bloodline-front.webp",
    backImage: "/garments/bloodline-back.webp",
    sideImage: "/garments/bloodline-side.webp",
  },
  {
    id: "grace",
    name: "Grace · Grace Over Everything tee",
    kind: "tee",
    color: "#ECEAE6",
    tag: "$45",
    description: "Washed white tee with the FORGIVN wordmark up front and \"Grace Over Everything.\" with a hand-drawn cross on the back.",
    details: ["Oversized fit", "Paint-splash detail", "Back print"],
    image: "/garments/grace-front.webp",
    backImage: "/garments/grace-back.webp",
    sideImage: "/garments/grace-side.webp",
  },
  {
    id: "no-longer-a-slave",
    name: "No Longer a Slave · Freedom in Christ hoodie",
    kind: "hoodie",
    color: "#141414",
    tag: "$75",
    description: "Washed black hoodie with \"Set Free.\" on the chest and broken chains under \"No Longer a Slave\" on the back.",
    details: ["Galatians 5:1", "Kangaroo pocket", "Back print"],
    image: "/garments/no-longer-a-slave-front.webp",
    backImage: "/garments/no-longer-a-slave-back.webp",
    sideImage: "/garments/no-longer-a-slave-side.webp",
  },
  {
    id: "the-99",
    name: "The 99 · The Lost Sheep hoodie",
    kind: "hoodie",
    color: "#141414",
    tag: "$75",
    description: "Worn black hoodie with a small sheep on the chest and \"Worth Finding.\" over a field of sheep on the back.",
    details: ["Luke 15", "Kangaroo pocket", "Back print"],
    image: "/garments/the-99-front.webp",
    backImage: "/garments/the-99-back.webp",
    sideImage: "/garments/the-99-side.webp",
  },
];

export default function ClothingRailHeroDemo({ autoplay = true }: { autoplay?: boolean }) {
  return (
    <div data-rail-demo className="flex min-h-svh w-full items-center justify-center bg-background text-foreground">
      <ClothingRailHero
        items={RAIL_DEMO_ITEMS}
        hanger="wood"
        eyebrow="New season · Five pieces on the rail"
        heading="A clothing rail you can handle, right on the page."
        caption="Brush along the rail, slide a hanger, lift a piece to see the back."
        autoplay={autoplay}
        action={
          <button type="button" className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none">
            Shop the edit
          </button>
        }
      />
    </div>
  );
}
