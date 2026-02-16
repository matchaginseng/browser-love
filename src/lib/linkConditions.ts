import { LinkCondition, BrowserState } from "@/types";

export function evaluateCondition(
  condition: LinkCondition,
  state: BrowserState,
): boolean {
  switch (condition.type) {
    case "always":
      return true;

    case "visited":
      return condition.target != null && condition.target in state.visitedPages;

    case "not_visited":
      return (
        condition.target != null && !(condition.target in state.visitedPages)
      );

    case "visited_count_gte": {
      if (!condition.target || condition.value == null) return false;
      const visitCount = state.clickHistory.filter(
        (h) => h.pageId === condition.target,
      ).length;
      return visitCount >= condition.value;
    }

    case "has_keyword":
      return condition.target != null && condition.target in state.adlibSlots;

    case "tab_count_gte":
      return (
        condition.value != null && state.tabs.length >= condition.value
      );

    default:
      return false;
  }
}

export function shouldRenderLink(
  conditions: LinkCondition[],
  state: BrowserState,
): boolean {
  if (conditions.length === 0) return true;
  return conditions.every((c) => evaluateCondition(c, state));
}
