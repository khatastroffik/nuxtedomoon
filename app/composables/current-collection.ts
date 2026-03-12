import type { Collections } from "@nuxt/content";

export function useCurrentCollection(setCollection?: keyof Collections) {
  const currentCollection = useState<keyof Collections | undefined>("current-collection", () => undefined);
  if (setCollection) {
    currentCollection.value = setCollection;
  }
  return currentCollection;
}
