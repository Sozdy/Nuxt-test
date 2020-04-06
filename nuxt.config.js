//системный файл - вся конфигурация для проекта в формате ДжаваСкрипта
export default {
  mode: 'universal', /*Universal = SSR, Есть еще мод SPA*/
  /*
  ** Headers of the page
  */
  head: { /*Тут задается head для всех страниц */
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } /*тут указывается иконка странички и ссылка на неё ведется отностительно папки static*/
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'  /*покет который предоставляет возможность работать с AJAX запросами*/
  ],                 /*Теперь есть переменная $axios которая доступна в любых инстансах и которую надо использовать для выполнения запросов*/
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
