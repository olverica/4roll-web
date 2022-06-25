<template>
  <div class="scroll-config">

    <section class="config-section">
      <h1 class="setting-title">VIEWPORT</h1>
      <div class="scroll-setting">
        <label class="setting-label">damping:</label>
        <input class="setting-input" ref="damping" type="number" placeholder="0" @input="dampingChange"/>
      </div>
    </section>

    <section class="config-section">
      <h1 class="setting-title">Boundaries</h1>
      <div class="scroll-setting">
        <label class="setting-label">resistance:</label>
        <input class="setting-input" ref="resistance" type="number" placeholder="0" @input="resistanceChange"/>
      </div>
    </section>

    <section class="config-section graph" ref="graph">
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ScrollThumb from 'Components/Core/Scroll/ScrollThumb.vue'
import AnimationEngine from 'App/Animation/Engine/AnimationEngine'
import ScrollGraph from 'App/Scroll/Testing/ScrollGraph'
import inject from 'App/Support/Helpers/Inject'


export default defineComponent({
  inject: ['$animations'],

  components: { ScrollThumb },

  computed: {
    animations(): AnimationEngine {
      return inject(this, 'animations');
    },
  },

  props: {
    dto: {
      required: true,
      type: Object
    },

    config: {
      required: true,
      type: Object
    }
  },

  unmounted() {
    this.animations.detach(this.scrollHandler);
  },

  mounted() {
    let graph = new ScrollGraph(this.$refs.graph, this.dto);

    this.animations.register(graph);

    this.$refs.damping.value = this.config.viewport.damping;
    this.$refs.resistance.value = this.config.boundaries.resistance;
  },

  methods: {
    resistanceChange(event: InputEvent ): void {
      let value = (event.target as HTMLInputElement).value;
      let parsed = parseFloat(value);

      if (!!!isNaN(parsed))
        this.config.boundaries.resistance = parsed;
    },

    dampingChange(event: InputEvent ): void {
      let value = (event.target as HTMLInputElement).value;
      let parsed = parseFloat(value);

      if (!!!isNaN(parsed))
        this.config.viewport.damping = parsed ;
    },
  }
});
</script> 


<style lang="sass">

.scroll-config
  display: grid
  flex-direction: column
  width: 300px
  position: fixed
  right: 0
  bottom: 0
  z-index: 30
  gap: 10px
  background: #1a1a1a
  color: white
  padding-top: 15px 

  grid-template-areas: 'viewport boundaries' 'graph graph' 


.scroll-setting
  display: flex
  gap: 10px
  padding-left: 10px

.setting-title
  padding-left: 15px
  font-size: 16px

.setting-label
  padding-left: 20px
  font-size: 15px
  color: #ffffffcc

.setting-input
  color: white
  flex-grow:  1
  width: 30px
  color: #ffffffee
  
.graph
  grid-area: graph

</style>