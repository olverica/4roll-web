<template>
  <div 
    class="viewport" 
    ref="viewport"
    @touchmove="onScroll"
    @scroll="onScroll"
    @wheel="onScroll"
  >

    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import inject from 'App/Support/Helpers/Inject';
import ScrollService from 'App/Modal/ModalService'


export default defineComponent({
  inject: ['$scroll'],

  computed: {
    scroll(): ScrollService {
      return inject(this, 'scroll')
    },

    locked(): boolean {
      return this.scroll.locked();
    }
  },

  methods: {
    onScroll(event: Event): boolean {
      if (!!!this.locked)
        return;

      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }
});
</script>