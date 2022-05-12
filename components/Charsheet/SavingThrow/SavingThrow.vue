<template>
  <column-cell :title="model.name">

    <cell-marked-value 
      :primary="model.value"/>

  </column-cell>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CellMarkedValue from '~/components/Cell/Values/CellMarkedValue.vue'
import ColumnCell from '~/components/Cell/Types/ColumnCell.vue'
import SavingThrow from '~/services/Charsheet/SavingThrow'


export default defineComponent({
  components: { ColumnCell, CellMarkedValue },

  props: {
    model: {
      required: true,
      type: Object as PropType<SavingThrow>
    }
  }
});
</script>