<template>
  <section class="section abilities">
    <core-vue-title>Abilities</core-vue-title>

    <div class="grid grid-3x">
      <ability v-for="model in abilities"
        :model="model"/>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Ability from 'Components/Charsheet/Ability/Ability.vue'


export default defineComponent({
  components: { Ability },

  data() {
    return {
      abilities: [
        { name: 'Strength', score: 123, modifier: 123},
        { name: 'Dexterity', score: 123, modifier: 123},
        { name: 'Constitution', score: 123, modifier: 123},
        { name: 'Intelligence', score: 123, modifier: 123},
        { name: 'Wisdom', score: 123, modifier: 123},
        { name: 'Charisma', score: 123, modifier: 123},
      ]
    }
  }
});
</script>