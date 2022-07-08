import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'path'


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/stylus/styles/scheme/dark.styl',
        '~/assets/stylus/style.styl',
    ],

    meta: {
        title: '4roll – D&D digital character sheet app',
        viewport: 'width=device-width, initial-scale=1, user-scalable=no'
    },

    alias: {
        'Components': resolve(__dirname, './components'),
        'Domain': resolve(__dirname, './src/Domain'),
        'App': resolve(__dirname, './src/App'),
    },

    // vite: {
    //     server: {
    //         hmr: false
    //     }
    // }
})
