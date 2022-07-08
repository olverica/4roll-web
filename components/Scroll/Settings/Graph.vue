<template>
  <section class="scrollSettings scrollSettings-graph">
    <canvas ref="graph" class="scrollSettings_canvas"></canvas>
    
    <div class="list">
      <h2 class="title">Graph settings</h2>  

      <setting name="Time skip" :field="timeSkip"/> 
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import ReactiveSetting from 'App/Scroll/Settings/Value/ReactiveSetting'
import AnimationEngine from 'App/Animation/Engine/AnimationEngine'
import RangeSetting from 'App/Scroll/Settings/Fields/RangeSetting'
import ScrollGraph from 'App/Scroll/Testing/ScrollGraph'
import Setting from 'Components/Scroll/Settings/Setting.vue'
import inject from 'App/Support/Helpers/Inject'


export default defineComponent({
  components: {Setting}, 

  inject: ['$animations'],

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

  data() {
    return {
      colors: {
        stroke: '#6699FF',
        background: '#262626',
        gradient: '#364462'
      },

      timeSkip: new RangeSetting(this.config as any, 'graph.timeSkip', 0.1, 1, 0.1),
      graph: null,
    }
  },

  unmounted() {
    this.animations.detach(this.graph);
  },

  mounted() {
    let setting = new ReactiveSetting(this.config, 'graph.timeSkip');
    let graph = new ScrollGraph(this.$refs.graph, this.dto, this.colors, setting);
    this.animations.register(graph);
  }
});
</script>