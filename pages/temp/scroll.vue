<template>
  <div>
    <scrollable ref="scroll" class="dumb-list">
      
      <canvas id="asd" style=" z-index: 222; display: none; position: fixed; bottom: 0; left:0; background: white; height: 500px; width: 500px;"></canvas>

      <div v-for="i of columns"
          class="dumb-column">

        <div v-for="j of rows"
          class="dumb"
          :style="{'background-color': computeColor(i, j)}">
        </div>
      </div>

      <config 
        v-if="scroll"
        :dto="scroll.dto" 
        :config="scroll.config"/>

      <graph
        v-if="scroll"
        :dto="scroll.dto"
        :config="scroll.config"/> 

    </scrollable>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Scrollable from 'Components/Scroll/Scrollable.vue'
import Config from 'Components/Scroll/Settings/Config.vue'
import Graph from 'Components/Scroll/Settings/Graph.vue'


export default defineComponent({
  components: { Scrollable, Config, Graph },

  data() {
    return{
      rows: 50,
      columns: 4,
      scroll: null,
    }
  },

  mounted() {
    this.scroll = this.$refs.scroll;
  },

  methods: {
    computeColor(column: number, row: number): string {
      let vecticalStep = parseInt('ff', 16) / (this.rows - 1);
      let verticalOpacity = (this.rows - row) * vecticalStep;

      let horizontalStep = parseInt('ff', 16) / (this.columns - 1);
      let horizontalOpacity = (this.columns - column) * horizontalStep;

      let average  = Math.round((horizontalOpacity + verticalOpacity) / 2);

      return '#ffffff'+ (average).toString(16).padEnd(2, '0')
    }
  }
});
</script>

<style lang="sass">

*
  overflow: hidden

.dumb-column 
  flex-direction: column
  width: auto
  display: flex
  gap: 10px

.dumb-list > .viewport-borders
  width: fit-content
  display: flex
  gap: 10px

.dumb
  padding: 20px 15px
  width: 210px
  aspect-ratio: 1/1
  border-radius: 10px
  
</style>