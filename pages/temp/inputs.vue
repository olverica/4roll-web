<template>

  <section class="page">
    <input-field
      title="sheeeeesh"
      hint="B)"/>

    <textarea-field
      title="sheeeeesh"
      :max-length="12"/>

  </section>

</template>

<script lang="ts">
import InputField from '~/components/fields/InputField.vue'
import TextareaField from '~/components/fields/TextareaField.vue'
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  components: { InputField, TextareaField },
});
</script>