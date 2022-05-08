<template>
  <div 
    class="input"
    :class="{
      'input-focused': focused,
      'input-titled': titled}"
    @click="onRootCilck">

    <label class="input_title">{{ title }}</label>

    <input 
      class="input_entry" 
      type="text" 
      ref="input"
      :placeholder="title" 
      v-model="entry"
      @focus="onInputFocus"
      @blur="onInputBlur">

    <span  v-if="hint" class="input_hint">{{ hint }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    title: {
      default: null,
      type: String as PropType<string|null>
    },
    
    hint: {
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
    }
  },

  methods: {
    onRootCilck() {
      this.$refs.input.focus();
    },

    onInputFocus() {
      this.focused = true;
    },

    onInputBlur() {
      this.focused = false;
    }
  }
});
</script>