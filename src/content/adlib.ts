import { AdlibTemplate } from "./types";

export const storyTemplate: AdlibTemplate = {
  segments: [
    { type: "text", value: "Once upon a time, a " },
    { type: "slot", slotId: "creature", placeholder: "[CREATURE]" },
    { type: "text", value: " decided to explore " },
    { type: "slot", slotId: "place", placeholder: "[PLACE]" },
    { type: "text", value: ". They brought along a " },
    { type: "slot", slotId: "item", placeholder: "[ITEM]" },
    { type: "text", value: " and felt very " },
    { type: "slot", slotId: "emotion", placeholder: "[EMOTION]" },
    { type: "text", value: ". Along the way, they met a " },
    { type: "slot", slotId: "character", placeholder: "[CHARACTER]" },
    { type: "text", value: ' who said "' },
    { type: "slot", slotId: "quote", placeholder: "[QUOTE]" },
    { type: "text", value: '." And that is how the ' },
    { type: "slot", slotId: "event", placeholder: "[EVENT]" },
    { type: "text", value: " began." },
  ],
};

export interface RenderedSegment {
  type: "text" | "filled" | "unfilled";
  value: string;
}

export function renderStory(
  template: AdlibTemplate,
  filledSlots: Record<string, string>,
): RenderedSegment[] {
  return template.segments.map((segment): RenderedSegment => {
    if (segment.type === "text") {
      return { type: "text", value: segment.value };
    }
    const filled = filledSlots[segment.slotId];
    if (filled) {
      return { type: "filled", value: filled };
    }
    return { type: "unfilled", value: segment.placeholder };
  });
}
