import { PageDefinition, PageId } from "@/types";
import { PageRegistry } from "./types";

const registry: PageRegistry = new Map();

export function registerPage(page: PageDefinition): void {
  registry.set(page.id, page);
}

export function getPageDefinition(id: PageId): PageDefinition | undefined {
  return registry.get(id);
}

export function getAllPages(): PageDefinition[] {
  return Array.from(registry.values());
}
