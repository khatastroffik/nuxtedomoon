export function useStaticPageRoutes() {
  const originalRoute = useRoute();
  const staticPagePath = computed(() => removeTrailingSlash(originalRoute.path));
  const ogImagePath = computed(() => `/__og-image__/static${originalRoute.path === "/" ? "" : staticPagePath.value}/og.png`);
  // const staticPageRoute = ref({ staticPagePath, originalRoute });
  return { staticPagePath, ogImagePath, originalRoute };
}
