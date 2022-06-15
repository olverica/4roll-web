<template>
  <div
    ref="viewport"
    :style="{'overflow': 'hidden'}"
    @touchmove="onTouchMove"
    @touchstart="onTouchStart"
    @touchend="onTouchRelease"
    @touchcancel="onTouchRelease"
  >
    <div 
      ref="content"
      :style="{'transform': 'translateY('+top+')'}">
        
      <slot/>
    </div>
    
    <scroll-thumb/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ScrollThumb from 'Components/Core/Scroll/ScrollThumb.vue'
import ScrollInteractionHandler from 'App/Animation/Scroll/ScrollInteractionHander'
import AnimationEngine from 'App/Animation/Engine/AnimationEngine'
import Viewport from 'App/Animation/Scroll/Viewport'
import inject from 'App/Support/Helpers/Inject'
import BoundingBorders from 'App/Animation/Scroll/BoundingBorders'


export default defineComponent({
  inject: ['$animations'],

  components: { ScrollThumb },

  computed: {
    animations(): AnimationEngine {
      return inject(this, 'animations');
    },

    top(): string {
      return - this.viewport.getPosition() - this.borders.getOverscrolled().x  + 'px';
    }
  },

  data() {
    return {
      scrollHandler: null as ScrollInteractionHandler|null,
      viewport: null as Viewport,
      borders: null as BoundingBorders,
    }
  },

  beforeMount() {
    this.borders = new BoundingBorders();
    this.viewport = new Viewport(this.borders);
  },

  mounted() {
    this.scrollHandler = new ScrollInteractionHandler(this.viewport);
    this.animations.register(this.scrollHandler);
  },

  unmounted() {
    this.animations.detach(this.scrollHandler);
  },

  methods: {
    onTouchStart(event: TouchEvent): void {
      this.scrollHandler.onTouchStart(this.computePosition(event));
    },

    onTouchMove(event: TouchEvent): void {
      this.scrollHandler.onTouchMove(this.computePosition(event));
    },

    onTouchRelease(): void {
      this.scrollHandler.onTouchRelease();
    },

    computePosition(event: TouchEvent): number {
      return event.touches[0].clientY;
    } 
  }
});
</script>