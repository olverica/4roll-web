<template>
  <div>
    <scrollable class="dumb-list">
      <div 
        v-for="index of stubs"
        class="dumb"
        :style="{'background-color': '#ffffff'+ index.toString(16).padEnd(2, '0')}">

        <span class="dumb-label">{{ (index - 1) * 200 + (index - 1) * 10 }}px</span>
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
      stubs: 16
    }
  }
});
</script>

<style lang="sass">

*
  overflow: hidden

.dumb
  padding: 20px 15px
  height: 200px

.dumb-label
  font-size: 20px
  filter: contrast(0)

.dumb-list > div
  flex-direction: column
  display: flex
  gap: 10px
  width: 100%
  
</style>