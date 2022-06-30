<template>
  <div>
    <scrollable class="dumb-list">
      <div
          v-for="i of columns"
          class="dumb-column">

        <div 
          v-for="j of rows"
          class="dumb"
          :style="{'background-color': computeColor(i, j)}">

          <span class="dumb-label">{{ computeLabel(i, j) }}</span>
        </div>
      </div>
    </scrollable>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Scrollable from 'Components/Core/Scroll/Scrollable.vue'


export default defineComponent({
  components: { Scrollable },

  data() {
    return{
      rows: 16,
      columns: 4
    }
  },

  methods: {
    computeLabel(column: number, row: number): string {
      let x = (column - 1) * 200 + (column - 1) * 10;
      let y = (row - 1) * 300 + (row - 1) * 15;
      
      return `${x}px ${y}px`
    },

    computeColor(column: number, row: number): string {
      return '#ffffff'+ (column + row).toString(16).padEnd(2, '0')
    }
  }
});
</script>

<style lang="sass">

*
  overflow: hidden

.dumb-column 
  flex-direction: column
  width: 300px
  display: flex
  gap: 10px

.dumb-list > .viewport-borders
  width: fit-content
  display: flex
  gap: 15px  

.dumb
  padding: 20px 15px
  height: 200px

.dumb-label
  font-size: 20px
  filter: contrast(0)

  
</style>