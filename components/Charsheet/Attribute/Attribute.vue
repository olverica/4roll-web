<template>
  <column-cell 
    :title="model.name" 
    :icon="model.icon">

    <cell-value :primary="model.value"/>
  </column-cell>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CellMarkedValue from '~/components/Cell/Values/CellMarkedValue.vue'
import ColumnCell from '~/components/Cell/Types/ColumnCell.vue'


export interface AttributeModel {
  name: string,
  icon: string,
  value: string|number
}

export default defineComponent({
  components: { ColumnCell, CellMarkedValue },

  props: {
    model: {
      required: true,
      type: Object as PropType<AttributeModel>
    }
  }
});
</script>