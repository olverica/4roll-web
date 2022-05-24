<template>
  <client-only>
    <viewport>
      <for-dev/>

      <modals/>
      <tabbar/>

      <nuxt-page class="page"/>
    </viewport>
  </client-only>
</template>

<script lang="ts">
import {defineComponent, reactive, provide} from 'vue'
import ScrollService from '~/services/Modal/ScrollService'
import ModalService from '~/services/Modal/ModalService'
import Viewport from '~/components/Layout/Viewport.vue'
import Tabbar from '~/components/Navigation/Tabbar.vue'
import Modals from '~/components/Modal/Modals.vue'
import ForDev from '~/components/Dev/ForDev.vue'


export default defineComponent({
  components: { Viewport, Modals, Tabbar, ForDev },

  setup() {
    provide('$scroll', reactive(new ScrollService()));
    provide('$modals', reactive(new ModalService()));
  }
});
</script>