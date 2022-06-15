<template>
  <vue-header @close="close">{{ title }}</vue-header>

  <div 
    class="sheet_content"
    :style="{'margin-bottom': innerHeight}"
  >
    <slot name="content"/>
  </div>

  <slot name="footer"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import VueHeader from 'Components/Core/VueHeader.vue'
import VueButton from 'Components/Core/VueButton.vue'


export default defineComponent({
  components: { VueHeader, VueButton },

  props: {
    title: {
      required: true,
      type: String as PropType<string>
    },

    data: {
      required: true,
      type: Object
    },
  },

  computed: {
    innerHeight(): string {
      return this.position < 0 ? -this.position + 'px' : '0px';
    },

    position(): number {
      return this.data.getPosition();
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
});
</script>