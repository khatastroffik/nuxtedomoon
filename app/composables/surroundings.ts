export async function useSurroundings(query?: ReturnType<typeof queryCollectionItemSurroundings>) {
  const prevnext = usePrevNext();
  if (!query) {
    prevnext.value = undefined;
  }
  else {
    const route = useRoute();
    const { data: surroundings } = await useAsyncData(`surroundings-${route.fullPath}`, () => {
      return query;
    });
    prevnext.value = surroundings.value;
  }
  return prevnext;
}
