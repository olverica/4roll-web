<template>
  <section class="attributes">
    <core-vue-title>Attributes</core-vue-title>

    <div class="cells cells-3x">
      <attribute v-for="model in attributes"
        :model="model"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Attribute from 'Components/Charsheet/Attribute/Attribute.vue'


export default defineComponent({
  components: { Attribute },

  data() {
    return {
      attributes: [
        { name: 'XP', value: '00', icon: 'star' },
        { name: 'HP', value: '00', icon: 'heart' },
        { name: 'AC', value: '00', icon: 'shield' },
        { name: 'Speed', value: '00', icon: 'steps' },
        { name: 'Initiative', value: '00', icon: 'flag' },
        { name: 'Proficiency', value: '00', icon: 'trophy' },
      ]
    }
  }
});
</script>