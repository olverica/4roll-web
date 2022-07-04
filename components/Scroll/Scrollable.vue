<template>
  <div
    ref="viewport"
    class="viewport"
    @wheel="onWheel"
    @touchmove="onTouchMove"
    @touchstart="onTouchStart"
    @touchend="onTouchRelease"
    @touchcancel=""
  >
    <div 
      ref="boundaries"
      class="viewport-borders"
      :style="{'margin': margin}">
        
      <slot/>
    </div>
    
    <scroll-thumb/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AnimationEngine from 'App/Animation/Engine/AnimationEngine'
import ScrollAgregate from 'App/Scroll/Interaction/ScrollAggregate'
import ScrollThumb from 'Components/Scroll/ScrollThumb.vue'
import Factory from 'App/Scroll/Settings/Construction/Factory'
import inject from 'App/Support/Helpers/Inject'


export default defineComponent({
  inject: ['$animations'],

  components: {ScrollThumb},

  computed: {
    animations(): AnimationEngine {
      return inject(this, 'animations');
    },

    margin(): string {
      return `${this.top}px 0 0 ${this.left}px`
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

        graph: {
          timeSkip: 0.1
        },

        axis:{
          horizontal: false,
          vertical: true
        },

        viewport: {
          damping: 0.003
        },

        boundaries: {
          bounce: {
            bottom: true,
            right: false,
            left: false,
            top: true,
          },

          friction: 0.02,
          resistance: 0.09
        },

        controls: {
          releaseModifier: 500,
          spinModifier: 5,
          maxVelocity: 1250,
        }   
      }
    }
  },

  mounted() {
    this.config.viewport.el = this.$refs.viewport;
    this.config.boundaries.el = this.$refs.boundaries;
    this.scrollHandler = new Factory().make(this.config, this.dto);
    this.animations.register(this.scrollHandler);

    console.log(this.dto);
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

<style lang="sass" scoped>
  
.viewport-borders
  background: #0d0d0d

.viewport
  background: aqua
  max-height: 844px
  margin: 0 0

</style>