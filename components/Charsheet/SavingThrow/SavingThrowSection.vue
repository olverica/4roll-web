<template>
  <section class="section savingThrows">
    <vue-button icon="chevron-up" texted>Saving Throw</vue-button>

    <div class="grid grid-6x">
      <saving-throw
        v-for="model in savingThrows"
        :model="model"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SavingThrow from 'Components/Charsheet/SavingThrow/SavingThrow.vue'
import VueButton from '~~/components/Core/VueButton.vue';


export default defineComponent({
  components: { SavingThrow, VueButton },

  data() {
    return {
      savingThrows: [
        { name: 'STR', value: 123 },
        { name: 'DEX', value: 123 },
        { name: 'CON', value: 123 },
        { name: 'INT', value: 123 },
        { name: 'WIS', value: 123 },
        { name: 'CHA', value: 123 }
      ]
    }
  }
});
</script>