import type { ContentNavigationItem } from "@nuxt/content";

export function usePrevNext() {
  return useState<ContentNavigationItem[] | undefined>("prevnext", () => undefined);
}
