<template>
  <section class="attributes">
    <h1>Attributes</h1>

    <div class="cells cells-4x">
      <attribute v-for="model in attributes"
        :model="model"/>
    </div>>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Attribute from '~/components/Charsheet/Attribute/Attribute.vue'


export default defineComponent({
  components: { Attribute },

  data() {
    return {
      attributes: [
        { name: 'asd', value: '666px' },
        { name: 'asd', value: '000ln' },
        { name: 'asd', value: '000ln' },
        { name: 'asd', value: '000ln' },
        { name: 'asd', value: '000ln' },
        { name: 'asd', value: '000ln' },
        { name: 'asd', value: '000ln' },
        { name: 'asd', value: '000ln' },
      ]
    }
  }
});
</script>