<template>
  <client-only>
    <div class="viewport">
      <for-dev/>

      <modals/>
      
      <tabbar/>

      <nuxt-page class="page"/>
    </div>
  </client-only>
</template>

<script lang="ts">
import {defineComponent, reactive, provide} from 'vue'
import ModalService from '~/services/Modal/ModalService';
import Modals from '~/components/Modal/Modals.vue';
import Tabbar from '~/components/Navigation/Tabbar.vue'
import ForDev from '~/components/Dev/ForDev.vue'


export default defineComponent({
  components: { Modals, Tabbar, ForDev },

  setup() {
    provide('$modals', reactive(new ModalService()));
  }
});
</script>