<script lang="ts" setup>
const headerRef = useTemplateRef("HEADER");
const layoutRef = useTemplateRef("LAYOUT");
const spp = "/";

onBeforeMount(() => {
  if (import.meta.client) {
    window.addEventListener("scroll", doScroll);
  }
});

onMounted(() => {
  setTimeout(() => {
    layoutRef.value?.classList.remove("layout-enter-from");
  }, 0);

  doScroll(undefined);
});

onBeforeUnmount(() => {
  layoutRef.value?.classList.add("layout-leave-active");
  layoutRef.value?.classList.add("layout-leave-to");
  if (import.meta.client) {
    window.removeEventListener("scroll", doScroll);
  }
});

function doScroll(_e?: Event) {
  const opacity = (60 + Math.min(Math.floor(window.scrollY / 12), 40));
  headerRef.value?.style.setProperty("background-color", `color-mix(in oklab, var(--color-base-200) ${opacity}%, transparent)`, "important");
};

const { data: page } = await useAsyncData("landing", () => {
  return queryCollection("pages").path(spp).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

const ogImageComponentProps = { title: page.value.title, description: page.value.description, category: page.value.category };
const { data: ogImagePath } = await useAsyncData(`ogimage-${spp}`, async () => {
  return Promise.resolve(defineOgImage("K11k.takumi", ogImageComponentProps)[0]);
});

const ogImageAlt = `Social Media Card of the page: ${page.value.title}`;

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogImage: ogImagePath.value,
  ogImageAlt,
  twitterTitle: page.value.title,
  twitterDescription: page.value.description,
  twitterCreator: "K11K",
  twitterImage: ogImagePath.value,
  twitterImageAlt: ogImageAlt,
});
</script>

<template>
  <div class="h-full w-full bg-black sm:h-screen" data-theme="dark">
    <div ref="LAYOUT" class="layout-enter-active layout-enter-from flex h-fit w-full flex-col items-center justify-center bg-[url(/cover.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
      <header
        ref="HEADER"
        class="sticky top-0 z-100 mx-auto mt-4 flex h-18 max-h-18 w-full max-w-7xl self-stretch rounded-lg border border-base-300 bg-base-200/60 p-4 shadow-lg"
        aria-label="Menu bar with logo and links to internal pages">
        <div class="flex flex-1 items-center justify-between">
          <Brand />
        </div>
        <div class="dropdown dropdown-end dropdown-bottom lg:hidden">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-sm"
            aria-label="open or close the main menu dropdown list">
            <Icon name="tabler:menu-2" title="Menu" class="h-6 w-6 stroke-3!" />
          </div>
          <PagesMenu tabindex="-1" class="dropdown-content menu absolute z-1 w-36 flex-col rounded-box bg-base-100 p-0 shadow-sm" />
        </div>
        <div id="menu" class="hidden w-full lg:flex lg:w-auto lg:items-center">
          <PagesMenu />
          <ThemeSwap class="invisible text-base-content hover:text-accent" />
        </div>
      </header>

      <div class="mt-8 flex h-full w-full max-w-7xl flex-col items-center justify-evenly px-5 xl:flex-row xl:p-2">
        <div class="text-center text-white xl:text-left">
          <h4 class="text-center text-xl font-semibold xl:text-left xl:text-2xl">
            Welcome to the <khatastroffik class="text-base-content/80" /> portfolio
          </h4>
          <h1>
            <span class="text-rotate text-2xl leading-loose duration-20000 sm:text-3xl md:text-4xl lg:text-5xl">
              <span class="justify-items-stretch">
                <span class="text-ellipsis text-base-content">Fullstack Software Development</span>
                <span class="text-ellipsis text-neutral-content">Application Lifecycle Management</span>
                <span class="text-ellipsis text-success-content">Software Engineering &amp; DevOps</span>
                <span class="text-ellipsis text-accent">Agile Coaching</span>
                <span class="text-ellipsis text-secondary">Best Practices Consultancy</span>
                <span class="text-ellipsis text-warning">Team and Requirements Management</span>
              </span>
            </span>
          </h1>
          <div class="mt-2 h-fit px-4 text-xl lg:text-2xl xl:mr-4 xl:px-0">
            <p class="mb-2 h-fit text-sm font-light text-neutral-content/80 capitalize italic">
              &laquo;&nbsp;Powered by passion, ruled by practices, forged by action&nbsp;&raquo;
            </p>
            <p class="h-fit">
              As an agile full-stack developer with 25+ years of professional engagement, I enjoy to commit myself to compelling, challenging software development projects and teams!
            </p>
          </div>
          <div class="mt-12 mb-12 flex flex-row items-center justify-center gap-4 xl:mb-0 xl:items-center xl:justify-start">
            <NuxtLink
              to="https://de.linkedin.com/in/loisbegue"
              target="_blank"
              class="w-40 resize-none rounded-full p-2 px-6 text-center font-semibold text-white outline-2 outline-(--color-secondary) transition delay-100 ease-in-out hover:bg-secondary/80">
              Hire Me
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="w-40 resize-none rounded-full p-2 px-6 text-center font-semibold text-white outline-2 outline-(--color-accent) transition delay-100 ease-in-out hover:bg-accent/80">
              Learn more...
            </NuxtLink>
          </div>
        </div>

        <div class="group shrink-0">
          <NuxtLink to="/about" title="Learn more about me and KhatastroffiK">
            <Avatar :size="tw`w-[200px]`" preset="landing" />
          </NuxtLink>
        </div>
      </div>

      <!-- DIVIDER - STATS -->
      <Divider>Stats</Divider>
      <div class="grid w-full max-w-7xl auto-cols-auto grid-cols-1 gap-4 px-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard>
          <template #value>25</template>
          <template #description>Years of Experience</template>
        </StatsCard>
        <StatsCard>
          <template #value>50</template>
          <template #description>Project Contributions</template>
        </StatsCard>
        <StatsCard>
          <template #value>7</template>
          <template #description>Programming Languages</template>
        </StatsCard>
        <StatsCard>
          <template #value>30</template>
          <template #description>Customers / Companies</template>
        </StatsCard>
      </div>

      <!-- DIVIDER - MAIN SKILLS -->
      <Divider>Main Skills</Divider>
      <SkillsCategory label="Programming">
        <SkillCard skill="TypeScript" skill-icon="tabler:brand-typescript" />
        <SkillCard skill="Nuxt" skill-icon="tabler:brand-nuxt" />
        <SkillCard skill="Vue" skill-icon="tabler:brand-vue" />
        <SkillCard skill="Angular" skill-icon="tabler:brand-angular" />
        <SkillCard skill="React" skill-icon="tabler:brand-react" />
        <SkillCard skill="Node.js" skill-icon="tabler:brand-nodejs" />
        <SkillCard skill="Nest.Js" skill-icon="simple-icons:nestjs" />
        <SkillCard skill="Express.Js" skill-icon="simple-icons:express" />
        <SkillCard skill="TailwindCSS" skill-icon="tabler:brand-tailwind" />
        <SkillCard skill="Zod" skill-icon="simple-icons:zod" />
        <SkillCard skill="(more)" skill-icon="tabler:dots" />
      </SkillsCategory>
      <SkillsCategory label="QA">
        <SkillCard skill="Jest" skill-icon="simple-icons:jest" />
        <SkillCard skill="Vitest" skill-icon="simple-icons:vitest" />
        <SkillCard skill="Cypress" skill-icon="simple-icons:cypress" />
        <SkillCard skill="SonarQube" skill-icon="simple-icons:sonarqube" />
        <SkillCard skill="Playwright" skill-icon="simple-icons:playwright" />
        <SkillCard skill="Storybook" skill-icon="simple-icons:storybook" />
        <SkillCard skill="OWASP" skill-icon="simple-icons:owasp" />
        <SkillCard skill="Sentry" skill-icon="simple-icons:sentry" />
        <SkillCard skill="(more)" skill-icon="tabler:dots" />
      </SkillsCategory>
      <!-- <SkillsCategory label="Methodology"> -->
      <!-- <SkillCard brand="Scrum" brand-icon="tabler:question-circle" /> -->
      <SkillsCategory label="Practices">
        <SkillCard skill="CleanCode" skill-icon="lucide:brush-cleaning" />
        <SkillCard skill="OpenApi" skill-icon="simple-icons:openapiinitiative" />
        <SkillCard skill="JSON-Schema" skill-icon="tabler:schema" />
        <SkillCard skill="RESTfull" skill-icon="tabler:api-app" />
        <SkillCard skill="GraphQL" skill-icon="simple-icons:graphql" />
        <SkillCard skill="Web Tokens" skill-icon="simple-icons:jsonwebtokens" />
        <SkillCard skill="Conv. Commits" skill-icon="simple-icons:conventionalcommits" />
        <SkillCard skill="SemVer" skill-icon="simple-icons:semver" />
        <SkillCard skill="UML" skill-icon="simple-icons:uml" />
        <SkillCard skill="(more)" skill-icon="tabler:dots" />
      </SkillsCategory>

      <!-- </div> -->
      <!-- <SkillsCategory label="Engineering">
      <SkillCard brand="npm" brand-icon="tabler:brand-npm" />
      <SkillCard brand="pnpm" brand-icon="tabler:brand-pnpm" />
      <SkillCard brand="Docker" brand-icon="tabler:brand-docker" />
      <SkillCard brand="Git" brand-icon="tabler:brand-git" />
      <SkillCard brand="GitHub" brand-icon="tabler:brand-github" />
      <SkillCard brand="GitLab" brand-icon="tabler:brand-gitlab" />
      <SkillCard brand="Bitbucket" brand-icon="tabler:brand-bitbucket" />
      <SkillCard brand="Sonatype" brand-icon="simple-icons:sonatype" />
      </SkillsCategory> -->

      <SkillsCategory label="Application Management">
        <SkillCard skill="JIRA" skill-icon="simple-icons:jira" />
        <SkillCard skill="Confluence" skill-icon="simple-icons:confluence" />
        <SkillCard skill="Bitbucket" skill-icon="tabler:brand-bitbucket" />
        <SkillCard skill="npm" skill-icon="tabler:brand-npm" />
        <SkillCard skill="pnpm" skill-icon="tabler:brand-pnpm" />
        <SkillCard skill="Docker" skill-icon="tabler:brand-docker" />
        <SkillCard skill="Git" skill-icon="tabler:brand-git" />
        <SkillCard skill="GitHub" skill-icon="tabler:brand-github" />
        <SkillCard skill="GitLab" skill-icon="tabler:brand-gitlab" />
        <SkillCard skill="Sonatype" skill-icon="simple-icons:sonatype" />
        <SkillCard skill="(more)" skill-icon="tabler:dots" />
      </SkillsCategory>

      <!-- DIVIDER - Some Text Content -->
      <!-- <Divider>Text Content (prose)</Divider>
      <Prosit translucide class="px-8 xl:px-0">
        <div>
          <h1>More Prose Content - H1</h1>
          <p>Qui irure cupidatat cupidatat ad duis tempor irure sint sunt eiusmod et. Laborum fugiat ut laborum reprehenderit. Nulla eiusmod laboris cillum velit culpa magna eu exercitation veniam. Irure sit in est pariatur incididunt amet eu enim mollit tempor ad velit mollit. Aliquip magna in qui non aute eiusmod nostrud ullamco duis elit. Esse id velit exercitation duis consectetur laboris est incididunt proident exercitation. Qui pariatur consectetur adipisicing sint enim occaecat et sunt est elit consequat dolor commodo.</p>
          <h2>Test Header - H2</h2>
          <h3>Test Header - H3</h3>
          <p>Culpa est enim sint est aute est in sit consectetur in aliqua mollit in. Cillum voluptate nostrud veniam nisi esse consectetur laborum exercitation incididunt quis minim cillum ex. Incididunt consectetur cupidatat aliquip elit cupidatat sit ea dolor magna laborum ullamco et. Pariatur irure officia elit exercitation adipisicing in nostrud reprehenderit nostrud consectetur labore. Elit consectetur anim dolor ipsum aute duis enim et aliqua nulla. Est labore commodo minim laboris aliqua non id.</p>
          <p>Aliquip sit cupidatat mollit cillum velit culpa ex. Dolore ut duis nostrud amet enim proident consectetur reprehenderit officia. Id esse esse ex amet deserunt laboris reprehenderit tempor pariatur non eu minim amet. Duis enim quis ipsum ut et veniam esse tempor eu consectetur duis. Laboris exercitation qui exercitation veniam pariatur dolore culpa adipisicing aliqua laboris.</p>
          <hr>
          <p>Some unformatted code, eventually</p>
          <pre class="overflow-auto"><code class="">if (!page.value) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}</code>
</pre>
          <p>Sit mollit dolor do Lorem aute. Incididunt id nulla sunt anim ea. Culpa laboris pariatur nulla mollit veniam. Sunt dolor dolor tempor labore cillum est non deserunt ex ea ullamco in. Eu amet veniam nostrud velit ex veniam cillum veniam commodo ex pariatur reprehenderit.</p>
          <p>This code is formatted per DaisyUI code mockup</p>
          <div class="not-prose mockup-code w-full">
            <pre data-prefix="$"><code>npm i daisyui</code></pre>
            <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
          </div>
          <p>Nulla irure ea mollit consectetur laborum irure amet consectetur deserunt exercitation Lorem pariatur ullamco consectetur. Aliqua officia quis exercitation mollit amet mollit cupidatat nulla ad reprehenderit exercitation incididunt. Eu sit esse fugiat minim ut duis incididunt veniam id in minim enim veniam. Eiusmod magna cupidatat laboris ullamco laborum quis ullamco excepteur laboris anim cupidatat.</p>
          <p>Qui irure cupidatat cupidatat ad duis tempor irure sint sunt eiusmod et. Laborum fugiat ut laborum reprehenderit. Nulla eiusmod laboris cillum velit culpa magna eu exercitation veniam. Irure sit in est pariatur incididunt amet eu enim mollit tempor ad velit mollit. Aliquip magna in qui non aute eiusmod nostrud ullamco duis elit. Esse id velit exercitation duis consectetur laboris est incididunt proident exercitation. Qui pariatur consectetur adipisicing sint enim occaecat et sunt est elit consequat dolor commodo.</p>
          <p>Officia proident ut adipisicing id duis adipisicing. Mollit voluptate reprehenderit occaecat Lorem ut. Velit amet ut pariatur ad. Occaecat officia dolor ea elit nulla sint id ullamco ut aliquip elit nostrud sunt.</p>
        </div>
      </Prosit> -->

      <!-- DIVIDER - QUOTE OF THE DAY -->
      <Divider>Quote of the Day</Divider>
      <div class="prose w-fit max-w-7xl rounded-lg border border-base-300 bg-base-100/40 p-4 px-6">
        <DailyQuote />
      </div>

      <!-- DIVIDER - OG-IMAGE -->
      <!--
      <Divider class="mb-0">OG-Image</Divider>
      <div class="mt-8">
        <OgimageOutput :src="ogImagePath" />
      </div>
      -->

      <!-- DIVIDER - FOOTER -->
      <Divider>Footer</Divider>
      <PagesFooter />
    </div>
  </div>
</template>

<!-- Pascal, Delphi, Abap/4, Java, C#, JavaScript/TypeScript, Groovy, Python, VBA ...  -->
<!-- rounded-lg border border-base-300 bg-base-100/40 -->
