<template>
  <section
    v-if="!!!closed" 
    class="sheet"
    :class="{'sheet--hidden': hidden}"
    :style="{transitionDuration: delay}"
    @click.self="onClick"
  >
    <slot/>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  props: {
    data: {
      required: true,
      type: Object
    },
  },

  computed: {
    hidden(): boolean {
      return this.state === 'close' || this.state === 'none';
    },
    
    delay(): string {
      return this.data.getDelay()+ 'ms';
    },

    state(): string {
      return this.data.getState();
    },
    
    closed(): boolean {
      return this.data.isClosed();
    },
  },

  methods: {
    onClick(): void {
      this.$emit('overlay-click');
    }
  }
});
</script>


<style lang="sass">

.sheet
  transition: background .4s
  background: rgba(0,0,0,.6) 

.sheet--hidden
  background: #00000000

.sheet_body--hidden
  opacity: 0
  
</style>