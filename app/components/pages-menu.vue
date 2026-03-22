<script lang="ts" setup>
const { data: pages } = await useAsyncData("pages-list", () => {
  return queryCollectionNavigation("pages", ["menuPosition", "menuLabel"]).where("path", "NOT LIKE", "/").order("menuPosition", "ASC");
});

function isActiveParent(itemPath: string, routePath: string) {
  if (itemPath === "/") {
    return {};
  }
  else {
    const tabActive = tw`tab-active`;
    const textActive = tw`text-primary`;
    const activeParent = routePath.startsWith(itemPath);
    return { [tabActive]: activeParent, [textActive]: activeParent };
  }
}
</script>

<template>
  <div class="tabs-border tabs" role="tablist" aria-label="main menu">
    <NuxtLink
      v-for="(item, index) in pages"
      :key="index"
      :to="item.path"
      role="tab"
      :aria-label="`menu item '${item.menuLabel}'`"
      class="tab transition-colors duration-150  ease-in [--color-base-content:--color-base-content] hover:text-accent"
      :class="isActiveParent(item.path, $route.path)">
      {{ item.menuLabel }}
    </NuxtLink>
  </div>
</template>
