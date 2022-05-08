<template>
  <column-cell 
    :title="model.name" 
    :icon="'star'">

    <cell-value :primary="model.value"/>
  </column-cell>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CellMarkedValue from '~/components/Cell/Value/CellMarkedValue.vue'
import ColumnCell from '~/components/Cell/Types/ColumnCell.vue'


export interface AttributeModel {
  name: string,
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