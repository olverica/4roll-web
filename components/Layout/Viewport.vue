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
import ScrollService from '~/services/Modal/ModalService';


export default defineComponent({
  inject: ['$scroll'],

  computed: {
    scroll(): ScrollService {
      if (!!!this.$scroll)  
        throw Error('Dependency not injecteds');
      
      return this.$scroll;
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