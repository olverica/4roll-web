<template>
   <column-cell :title="model.name">

      <cell-value 
        :primary="model.score"
        :secondary="model.modifier"/>
    </column-cell>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ColumnCell from '~/components/Cell/Types/ColumnCell.vue'
import CellValue from '~/components/Cell/Values/CellValue.vue'
import Ability from '~/services/Charsheet/Ability'


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