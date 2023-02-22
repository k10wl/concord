// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ['~/assets/css/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-graphql-server', '@nuxtjs/apollo'],
  graphqlServer: {
    schema: './server/**/*.graphql',
  },
  apollo: {
    clients: { default: { httpEndpoint: '/api/graphql' } },
  },
})
