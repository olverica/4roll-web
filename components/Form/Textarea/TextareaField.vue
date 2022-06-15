<template>
  <textarea-root 
    :focused="focused"
    :closed="closed"
    @click="onRootClick">


    <textarea-heading
      :title="title"
      :hint="hint"
      @toggle="onToggle"
    />

    <textarea-entry 
      v-model:entry="entry"
      v-model:focused="focused"
      :placeholder="placeholder"
      multilined
    />
  </textarea-root>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import TextareaHeading from 'Components/Form/Textarea/TextareaHeading.vue'
import TextareaEntry from 'Components/Form/Textarea/TextareaEntry.vue'
import TextareaRoot from 'Components/Form/Textarea/TextareaRoot.vue'
import Form from 'App/Forms/Form'


export default defineComponent({
  components: {TextareaRoot, TextareaHeading, TextareaEntry},

  inject: ['$form'],

  props: {
    placeholder: {
      default: '',
      type: String as PropType<string>
    },

    title: {
      default: 'placeholder',
      type: String as PropType<string>
    }, 

    hint: {
      default: '',
      type: String as PropType<string>
    }
  },

  data() {
    return {
      focused: false,
      closed: false,
      entry: 'Cavun'
    }
  },

  computed: {
    formatedHeight(): string|null {
      return this.height !== null ? this.height + 'px' : null; 
    }
  },

  methods: {
    onRootClick() {
      if (this.closed)
        this.closed = false;
      else
        this.focused = true;
    },

    onEntryFocus() {
      this.focused = true;
    },

    onEntryBlur() {
      this.focused = false;
    },
    
    onToggle() {
      this.closed = !!!this.closed
    }
  }
});
</script>