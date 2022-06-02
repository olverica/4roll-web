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
import ScrollService from 'Services/Modal/ScrollService'
import ModalService from 'Services/Modal/ModalService'
import Viewport from 'Components/Layout/Viewport.vue'
import Tabbar from 'Components/Navigation/Tabbar.vue'
import Modals from 'Components/Modal/Modals.vue'
import ForDev from 'Components/Dev/ForDev.vue'


export default defineComponent({
  components: { Viewport, Modals, Tabbar, ForDev },

  setup() {
    provide('$scroll', reactive(new ScrollService()));
    provide('$modals', reactive(new ModalService()));
  }
});
</script>