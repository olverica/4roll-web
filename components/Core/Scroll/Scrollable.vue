<template>
  <div
    ref="viewport"
    class="viewport"
    @wheel="onWheel"
    @touchmove="onTouchMove"
    @touchstart="onTouchStart"
    @touchend="onTouchRelease"
    @touchcancel="onTouchRelease"
  >
    <div 
      ref="boundaries"
      class="viewport-borders"
      :style="{'transform': translate}">
        
      <slot/>
    </div>
    
    <scroll-thumb/>

    <scroll-settings :dto="dto" :config="config"/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AnimationEngine from 'App/Animation/Engine/AnimationEngine'
import ScrollSettings from 'Components/Core/Scroll/SrollSettings.vue'
import ScrollAgregate from 'App/Scroll/Interaction/ScrollAggregate'
import ScrollThumb from 'Components/Core/Scroll/ScrollThumb.vue'
import Builder from 'App/Scroll/Settings/Builder'
import inject from 'App/Support/Helpers/Inject'


export default defineComponent({
  inject: ['$animations'],

  components: {ScrollSettings, ScrollThumb},

  computed: {
    animations(): AnimationEngine {
      return inject(this, 'animations');
    },

    translate(): string {
      return `translate(${this.left}px, ${this.top}px)`
    },

    left(): number {
      return - this.dto.viewport.x - this.dto.borders.right + this.dto.borders.left;
    },

    top(): number {
      return - this.dto.viewport.y + this.dto.borders.top - this.dto.borders.bottom;
    }
  },

  data() {
    return {
      scrollHandler: null as ScrollAgregate|null,

      dto: {
        viewport: 0,
        borders: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },

      config: {
        reactive: true,

        axis: 'both',

        viewport: {
          damping: 0.05
        },

        boundaries: {
          bounce: 'top. bottom',
          friction: 0.02,
          resistance: 1.5
        }
      }
    }
  },

  mounted() {
    this.config.viewport.el = this.$refs.viewport;
    this.config.boundaries.el = this.$refs.boundaries;
    this.scrollHandler = new Builder().make(this.config, this.dto);
    this.animations.register(this.scrollHandler);
  },

  unmounted() {
    this.animations.detach(this.scrollHandler);
  },

  methods: {
    onTouchStart(event: TouchEvent): void {
      this.scrollHandler.onTouchStart(event);
    },

    onTouchMove(event: TouchEvent): void {
      this.scrollHandler.onTouchMove(event);
    },

    onTouchRelease(event: TouchEvent): void {
      this.scrollHandler.onTouchRelease(event);
    },

    onWheel(event: WheelEvent): void {
      this.scrollHandler.onWheelSpin(event);
    }
  }
});
</script> 

<style lang="sass">

.viewwport-borders
  overflow: hidden

.page
  background: #0d0d0d

.viewport-borders
  background: #0d0d0d

.viewport
  background: aqua
  max-height: 844px

</style>