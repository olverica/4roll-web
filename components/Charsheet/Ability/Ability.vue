<template>
   <column-cell :title="model.name">

      <cell-value 
        :primary="model.score"
        :secondary="model.modifier"/>
    </column-cell>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ColumnCell from 'Components/Cell/Types/ColumnCell.vue'
import CellValue from 'Components/Cell/Values/CellValue.vue'
import Ability from 'App/Charsheet/Ability'


export default defineComponent({
  components: { ColumnCell, CellValue },

  props: {
    model: {
      required: true,
      type: Object as PropType<Ability>
    }
  }
});
</script>