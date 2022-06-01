<template>
  <transition 
    name="expose" 
    @before-enter="enterFrom"
    @enter="enterTo"

    @before-leave="leaveFrom"
    @leave="leaveTo"

    @after-enter="clear"
    @after-leave="clear"
  >

    <slot/>
  </transition>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'


export default defineComponent({
  props: {
    center: {
      required: true,
      type: Object as PropType<{x: number, y: number}>
    }
  },

  methods: {
    enterFrom(el: HTMLElement): void {
      this.close(el);
    },

    enterTo(el: HTMLElement): void {
      setTimeout(() => {
        this.open(el);
      }, 0)
    },

    leaveFrom(el: HTMLElement): void {
      this.open(el);
    },
    
    leaveTo(el: HTMLElement): void {
      setTimeout(() => {
        this.close(el);
      }, 0)
    },

    open(el: HTMLElement): void {
      el.style.clipPath = this.circle(innerHeight);
    },

    close(el: HTMLElement): void {
      el.style.clipPath = this.circle(0);
    },

    clear(el): void {
      el.style.clipPath = '';
    },

    circle(size: number): string {
      return `circle(${size}% at ${this.center.x}px ${this.center.y}px)`;
    }
  }
});
</script>

<style lang="sass">

.expose-enter-active, .expose-leave-active
  transition: clip-path .008s ease-in

</style>