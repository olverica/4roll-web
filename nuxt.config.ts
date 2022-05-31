import { defineNuxtConfig } from 'nuxt3'


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/stylus/index.styl',
    ],
    meta: {
        title: '4roll – D&D digital character sheet app',
        viewport: 'width=device-width, initial-scale=1, user-scalable=no'
    }
})
