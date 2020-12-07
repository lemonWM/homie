
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }

    ],
    script: [
      {
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDSpLefX1gn7woT-vc6wRnFLmrVeQ1H8fM&libraries=places"
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation-float.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation-float.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation-prototype.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation-rtl.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/spectre.css/dist/spectre.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
      }
    ]
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/style.css',
    
  ],
  /*
'@/assets/style/style.scss',

  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  
  axios: {
    baseURL: 'https://homie-backend.herokuapp.com',
  },
  /* localhost: 'http://localhost:5000'
  /* prod: 'https://homie-backend.herokuapp.com'
/* turn off sass loader & 

  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
