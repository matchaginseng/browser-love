import { PageDefinition, PageId } from "@/types";

export type PageRegistry = Map<PageId, PageDefinition>;

export type AdlibSegment =
  | { type: "text"; value: string }
  | { type: "slot"; slotId: string; placeholder: string };

export interface AdlibTemplate {
  segments: AdlibSegment[];
}
