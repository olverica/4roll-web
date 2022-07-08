<template>
  <div 
    ref="shrinkable" 
    class="shrinkable"
    :class="{'shrinkable-closed': !!!opened}"
    :style="{'transition': transition}">

    <div 
      ref="content"
      :class="innerClass">
      <slot/>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export enum ShrinkableState {
  Open, Close, Moving
}

export default defineComponent({
  props: {
    opened: {
      default: false,
      type: Boolean
    },

    duration: {
      default: 200,
      type: Number
    },
  
    innerClass: {
      default: '',
      type: String
    }
  },

  data() {
    return {
      state: ShrinkableState,
      timeout: null as NodeJS.Timeout|null
    }
  },

  computed: {
    transition(): string {
      return `height ${this.duration}ms`
    }
  },

  watch: {
    opened(value) {
      clearTimeout(this.timeout);

      if (value)
        this.open();
      else 
        this.close();
    }
  },

  methods: {
    close(): void {
      this.setHeight(this.$refs.shrinkable.offsetHeight);

      setTimeout(() => {
        this.setHeight(0);
        this.waitForTransition(() =>
          this.state = ShrinkableState.Close
        );
      })
    },

    open(): void {
      this.setHeight(this.$refs.content.offsetHeight);

      this.waitForTransition(() => {
        this.releaseHeight();
        this.state = ShrinkableState.Open
      })
    },

    waitForTransition(callback: () => void): void {
      this.timeout = setTimeout(callback, this.duration);
    },

    releaseHeight(): void {
      this.$refs.shrinkable.style.height = '';
    },

    setHeight(value: number): void {
      this.$refs.shrinkable.style.height = value + 'px';
    }
  }
});
</script>