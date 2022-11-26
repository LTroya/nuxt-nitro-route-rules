// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/posts": { static: true },
    // "/posts/**": { swr: true },
  },
});
