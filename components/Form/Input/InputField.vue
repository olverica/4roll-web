<template>
  <div 
    class="input"
    :class="{'input-focused': focused}"
    @click="onRootCilck">

    <i class="input_icon input_icon-primary">{{ primaryIcon }}</i>

    <input-entry 
      v-model:focused="focused"
      v-model:entry="entry"
      :numeric="true"/>  

    <small class="input_hint">{{ hint }}</small>
    
    <i class="input_icon input_icon-secondary">{{ secondaryIcon }}</i>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import Form from 'Services/Forms/Form'
import InputEntry from 'Components/Form/Input/InputEntry.vue'


export default defineComponent({
  components: {InputEntry},

  inject: ['$form'],

  props: {
    placeholder: {
      default: '',
      type: String as PropType<string>
    },

    primaryIcon: {
      default: 'placeholder',
      type: String as PropType<string>
    }, 

    secondaryIcon: {
      default: 'placeholder',
      type: String as PropType<string>
    },

    hint: {
      default: '',
      type: String as PropType<string>
    },

    numeric: {
      default: false,
      type: Boolean as PropType<boolean>
    }
  },

  data() {
    return {
      focused: false,
      entry: ''
    }
  },

  methods: {
    onRootCilck() {
      this.focused = true;
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