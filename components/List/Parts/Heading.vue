<template>
  <div 
    class="listItem_heading"
    @click="onClick">
    
    <div class="left">
      <h3 class="listItem_title">{{ title.text }}</h3>

      <i v-if="title.icon" 
        class="listItem_icon">
        {{ title.icon }}
      </i>

      <small v-if="subtitle"
        class="listItem_subtitle">
        ({{ subtitle }})
      </small>
    </div>

    <div ref="right" class="right">
      <small v-if="hint"
        class="listItem_hint">

          {{ hint.text }} 
          <i v-if="hint.icon">{{ hint.icon }}</i>
      </small>

      <slot/>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent, PropType} from 'vue'

export interface SignedText
{
  text: string
  icon?: string
}

export default defineComponent({
  props: {
    title: {
      required: true,
      type: Object
    },

    hint: {
      default: null,
      type: Object
    },

    subtitle: {
      default: null,
      type: String as PropType<string|null>
    }
  },

  methods: {
    onClick(event: MouseEvent): void {
      let el = this.$refs.right as HTMLElement;
      let eventCopy = new MouseEvent(event.type, {...event});

      for (let child of el.children)
        child.dispatchEvent(eventCopy);
    }
  }
});
</script>