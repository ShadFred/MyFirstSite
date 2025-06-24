// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'http://localhost:3000/api',
  },
}
