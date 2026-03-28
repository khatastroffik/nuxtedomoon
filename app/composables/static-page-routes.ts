export function useStaticPageRoutes() {
  const originalRoute = useRoute();
  const staticPagePath = computed(() => removeTrailingSlash(originalRoute.path));
  return { staticPagePath, originalRoute };
}
