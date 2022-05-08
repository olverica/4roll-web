<template>
  <div 
    class="textarea"
    :class="{
      'textarea-focused': focused,
      'textarea-counted': maxLength,
      'textarea-filled': !!!empty}"
    @click="onRootCilck">

    <label class="textarea_title">
      {{ title }}
    </label>

    <span 
      v-if="counterShown"
      class="textarea_counter">
      {{counterMessage}}
    </span>

    <p
      ref="textarea"
      class="textarea_entry" 
      contenteditable
      :placeholder="placeholder"
      @focus="onTextareaFocus"
      @blur="onTextareaBlur"
      @input="onInput"
    ></p>
   
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    placeholder: {
      default: null,
      type: String as PropType<string|null>
    },
    
    maxLength: {
      default: null,
      type: Number as PropType<number|null>
    },

    title: {
      default: null,
      type: String as PropType<string|null>
    }
  },

  data() {
    return {
      focused: false,
      entry: ''
    }
  },

  computed: {
    empty() {
      return this.entry.length === 0;
    },

    titled() {
      return this.title !== null && !!!this.empty;
    },

    counterShown() {
      return this.maxLength !== null && 
        (this.entry.length / this.maxLength) > 0.7
    },

    counterMessage() {
      return `${this.entry.length}/${this.maxLength}`;
    }
  },

  methods: {
    onRootCilck() {
      this.$refs.textarea.focus();
    },

    onTextareaFocus() {
      this.focused = true;
    },

    onTextareaBlur() {
      this.focused = false;
      
    },

    onInput(event: InputEvent) {
      this.entry = (event.target as HTMLParagraphElement).innerText;
    }
  }
});
</script>