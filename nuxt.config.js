import axios from 'axios';

export default {
  /*
  ** Set Global Api Base URL
  */
  env: {
    baseUrl: 'https://admin.danielwakefield.co.uk/wp-json/wp/v2/posts'
  },
  /*
  ** Generate Dynamic Routes
  No need for embed param but does need per_page=100
  */
 generate: {
  routes: function () {
    return axios.get('https://admin.danielwakefield.co.uk/wp-json/wp/v2/posts?per_page=100')
    .then((res) => {
      return res.data.map((post) => {
        return '/posts/' + post.id + '/' + post.slug
      })
    })
  }
 },

 //webfontloader
 webfontloader: {
  google: {
    families: ['Montserrat:100,300,700','Playfair+Display: 400'] 
  }
},
 
  mode: 'universal',
  /*
  ** Headers of the page
  */
 head: {
  title: 'Ultra Brands',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'keywords', content: 'web design, website design, web developer, cheshire, vue.js, nuxt.js, wordpress, php, javascript'},
    { hid: 'description', name: 'description', content: 'Web Designer & Developer Cheshire'},
    {hid: 'og:title', name: 'og:title', content: 'This is Ultra'},
    {hid: 'og:description', name: 'og:description', content: 'Web Designer & Website Developer Cheshire | ultr4.co.uk'}
  ],
},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff' },
  /*
  ** Global CSS
  */
 css: [
  '~assets/css/main.css'
],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  {src: '@/assets/js/main.js', ssr: false}
],
  /*
  ** Nuxt.js modules
  */

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
