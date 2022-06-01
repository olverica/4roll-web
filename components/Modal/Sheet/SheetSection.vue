<template>
  <section
    v-if="!!!closed" 
    class="sheet"
    :class="{'shown': shown}"
    @click.self="close"
  >
    <slot/>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  props: {
    interactionHandler: {
      required: true,
      type: Object
    },
  },

  computed: {
    shown(): boolean {
      return this.state === 'appear' || this.state === 'static';
    },

    state(): string {
      return this.loaded ? this.interactionHandler.stateName() : '';
    },
    
    closed(): boolean {
      return this.loaded && this.interactionHandler.closed();
    },

    loaded(): boolean {
      return Boolean(this.interactionHandler && this.interactionHandler.loaded());
    }
  },

  methods: {
    close(): void {
      this.interactionHandler.onClose();
    }
  }
});
</script>


<style lang="sass">

.sheet
  transition: background .4s
  background: #00000000
  background: red

.shown
  background: #00000009

</style>