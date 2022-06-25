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
import EngineService from 'App/Animation/Engine/EngineService'
import ScrollService from 'App/Modal/ScrollService'
import ModalService from 'App/Modal/ModalService'
import Viewport from 'Components/Layout/Viewport.vue'
import Tabbar from 'Components/Navigation/Tabbar.vue'
import Modals from 'Components/Modal/Modals.vue'
import ForDev from 'Components/Dev/ForDev.vue'
  

export default defineComponent({
  components: { Viewport, Modals, Tabbar, ForDev },

  setup() {
    provide('$animations', new EngineService());
    provide('$scroll', reactive(new ScrollService()));
    provide('$modals', reactive(new ModalService()));
  }
});
</script>