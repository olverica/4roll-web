<template>
  <button 
    class="checkbox"
    :class="{
      'checkbox-active': checked,
      'checkbox-failed': failed,
      'checkbox-rounded': round}"
      @click.stop="onClick">
  </button>
</template>


<script lang="ts">
import {defineComponent, PropType} from 'vue'
import Field from 'App/Fields/Field'


export default defineComponent({
  props: {
    failed: {
      default: false,
      type: Boolean as PropType<boolean>,
    },

    round: {
      default: false,
      type: Boolean as PropType<boolean>,
    },

    field: {
      required: true,
      type: Object as PropType<Field<boolean>>
    }
  },

  computed: {
    checked(): boolean {
      return this.field.getValue();
    }
  },

  methods: {
    onClick() {
      this.field.change(!!!this.checked);
    }
  }
});
</script>