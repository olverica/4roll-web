<template>
  <row-cell :title="model.name">
    <cell-marked-value :primary="model.value"/>
  </row-cell>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CellMarkedValue from 'Components/Cell/Values/CellMarkedValue.vue'
import RowCell from 'Components/Cell/Types/RowCell.vue'
import Skill from 'App/Charsheet/Skill';


export default defineComponent({
  components: { RowCell, CellMarkedValue },
  
  props: {
    model: {
      required: true,
      type: Object as PropType<Skill>
    }
  }
});
</script>