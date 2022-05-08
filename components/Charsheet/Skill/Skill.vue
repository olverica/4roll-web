<template>
  <row-cell :title="model.name">
    <cell-marked-value :primary="model.value"/>
  </row-cell>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CellMarkedValue from '~/components/Cell/Value/CellMarkedValue.vue'
import RowCell from '~/components/Cell/Types/RowCell.vue'
import Skill from '~/services/Charsheet/Skill';


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