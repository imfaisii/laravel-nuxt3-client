// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    "@pinia/nuxt",
    "@invictus.codes/nuxt-vuetify",
    "@vee-validate/nuxt",
  ],
});
