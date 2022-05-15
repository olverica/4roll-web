<template>
  <button 
    class="sandbox_button" 
    :style="{
      left: x + 'px',
      bottom: bottom + 'px'
    }"
    @click="onClick">
      &lt
  </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  data() {
    return {
      x: 0,
      y: 0, 
      bottom: 0,
    }
  },

  computed: {
    width(): number {
      return this.$el.offsetWidth
    },

    height(): number {
      return this.$el.offsetHeight;
    }
  },

  mounted() {
    let parent = this.$el.parentElement.getBoundingClientRect();
    this.x = parent.left + parent.width - this.width / 2.5;

    this.y = innerHeight - innerHeight / 5;
    this.bottom = innerHeight - this.y - this.height;
  },

  methods: {
    onClick() {
      this.$emit('press', {
        x: this.x + this.width / 2,
        y: this.y + this.height / 2
      });
    }
  }
});
</script>

<style lang="sass">

.sandbox_button
  position: fixed
  padding-left: 5px

  background: #F7F7F7
  border-radius: 50%

  width: 50px
  aspect-ratio: 1/1

  font-size: 15px

  animation: slidein .3s ease-out


  
@keyframes slidein
  from
    transform: translateX(100%)

  to
    transform: translateX(0)
  
</style>