<template>
  <sheet-section 
    :data="data" 
    @overlay-click="close"
  >
    <sheet ref="sheet" :data="data">

      <sheet-thumb
        :interaction-handler="interactionHandler"
      />

      <component
        :is="body"
        :data="data"
        @close="close" 
      />
      
    </sheet>
  </sheet-section>
</template>

<script lang="ts">
import {PropType, defineComponent, DefineComponent} from 'vue'
import SheetInteractionHandler from 'App/Animation/Sheet/SheetInteractionHandler'
import InteractionBoundaries from 'App/Animation/Sheet/Info/InteractionBoundaries'
import SheetSection from 'Components/Modal/Sheet/SheetSection.vue'
import SheetThumb from 'Components/Modal/Sheet/SheetThumb.vue'
import SheetDTO from 'App/Animation/Sheet/SheetDTO'
import Sheet from 'Components/Modal/Sheet/Sheet.vue'
import inject from 'App/Support/Helpers/Inject';
import AnimationEngine from 'App/Animation/Engine/AnimationEngine'


export default defineComponent({
  inject: ['$animations'],

  components: { SheetSection, SheetThumb, Sheet},

  props: {
    body: {
      required: true,
      type: Object as PropType<DefineComponent>
    },
  },

  data() {
    return {
      data: new SheetDTO(),
      interactionHandler: null,
      detached: false
    }
  },

  computed: {
    closed(): boolean {
      return this.data.isClosed();
    },

    animations(): AnimationEngine {
      return inject(this, 'animations');
    }
  },

  mounted() {
    let boundaries = new InteractionBoundaries({
      closePoint: window.innerHeight - this.offsetTop(),
      bottomBreak: 200,
      topBreak: 200,
    });

    
    this.data.changePosition(boundaries.closeAt());
    this.interactionHandler = new SheetInteractionHandler(this.data, boundaries);
    this.animations.register(this.interactionHandler);
  },

  unmounted() {
    this.animations.detach(this.interactionHandler);
  },

  watch: {
    closed(value: boolean) {
      if (value) this.$emit('close');
    }
  },

  methods: {
    close(): void {
      this.interactionHandler.onClose();
    },

    offsetTop(): number {
      let el = this.$refs.sheet.$el;
      return el ? el.getBoundingClientRect().top : 0;
    }
  }
});
</script>