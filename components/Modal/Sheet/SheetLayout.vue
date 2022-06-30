<template>

  <vue-header @close="close">{{ title }}</vue-header>

  <main class="sheet_content">
    <slot name="content"/>
  </main>

  <footer class="footer">
    <slot name="footer"/>
  </footer>

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
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
});
</script>