<template>
  <div class="scrollSettings_group">
    
    <button class="listItem listHeader" @click="onClick">
      <h3 class="listItem_title">{{ capitalized }}</h3>
      <i class="listItem_toggle">chevron-up</i>
    </button>

    <shrinkable :opened="opened">
      <slot/>
    </shrinkable>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Shrinkable from 'Components/Transitions/Shrinkable.vue'

export default defineComponent({
  components: {Shrinkable},

  props: {
    title: {
      defualt: '',
      type: String
    },
  },

  computed: {
    capitalized(): string {
      if (!!!this.title.length)
        return '';
        
      return this.title.charAt(0).toUpperCase() + this.title.slice(1);
    }
  },

  data() {
    return {
      opened: true
    }
  },

  methods: {
    onClick(): void {
      this.opened = !!!this.opened;
    }
  }
});
</script>