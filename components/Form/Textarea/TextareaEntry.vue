<template>
  <p
    class="input_entry" 
    :placeholder="placeholder"
    @beforeinput="onBeforeInput"
    @keypress="onKeyPress"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    contenteditable
    ></p>  
</template>


<script lang="ts">
import {defineComponent, PropType} from 'vue'
import FieldEntry from 'Components/Form/Mixins/FieldEntry'


export default defineComponent({
  mixins: [FieldEntry],

  methods: {
    onKeyPress(event: KeyboardEvent): void {
      if (event.key !== 'Enter') 
        return;
      
      if (!!!this.endsWithNewLine(this.getValue()))
        return;

      event.preventDefault();
    },

    validate(data: string): boolean {
      if (!!!this.startsWithNewLine(data)) 
        return true;
      
      return !!!this.endsWithNewLine(this.getValue());
    },

    endsWithNewLine(value: string): boolean {
      return !!value.match(/\n *$/);
    },

    startsWithNewLine(value: string): boolean {
      return !!value.match(/^ *\n/);
    },

    setValue(value: string): void {
      this.$el.innerText = value;
    },

    getValue(): void {
      return this.$el.innerText;
    },
  }
});
</script>