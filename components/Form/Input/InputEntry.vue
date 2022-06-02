<template>
  <input
    ref="entry"
    class="input_entry" 
    :placeholder="placeholder"
    @beforeinput="onBeforeInput"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"/>  
</template>


<script lang="ts">
import {defineComponent, PropType} from 'vue'
import FieldEntry from 'Components/Form/Mixins/FieldEntry'


export default defineComponent({
  mixins: [FieldEntry],

  props: {
    numeric: {
      default: false,
      type: Boolean as PropType<boolean>
    }
  },

  methods: {
    validate(data: string): boolean {
      if (this.numeric && data.match(/\D/))
        return false;

      return true;
    },

    setValue(value: string): void {
      this.$el.value = value;
    },

    getValue(): void {
      return this.$el.value;
    }
  }
});
</script>