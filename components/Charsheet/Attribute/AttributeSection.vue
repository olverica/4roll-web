<template>
  <section class="attributes">
    <h1 class="title-18">Attributes</h1>

    <div class="cells cells-4x">
      <attribute v-for="model in attributes"
        :model="model"/>
    </div>
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
        { name: 'XP', value: '00' },
        { name: 'HP', value: '00' },
        { name: 'AC', value: '00' },
        { name: 'PB', value: '00' },
        { name: 'Speed', value: '00' },
        { name: 'Initiative', value: '00' },
        { name: 'Perception', value: '00' },
        { name: 'Inspiration', value: '00' },
      ]
    }
  }
});
</script>