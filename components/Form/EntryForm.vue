<template>
  <slot/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Form from 'Services/Forms/Form'


export default defineComponent({
  provide() {
    return {
      '$form': new Form()
    }
  }
});
</script>