import { defineNuxtConfig } from 'nuxt3'
import { devtools } from 'nuxt3/dist/app/compat/capi'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/sass/style.sass'
    ],
    meta: {
        viewport: 'width=device-width, initial-scale=1, user-scalable=no'
    }
})
