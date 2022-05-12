<template>
  <section class="savingThrows">
    <button class="divider">Saving throws</button>

    <div class="cells cells-6x">
      <saving-throw
        v-for="model in savingThrows"
        :model="model"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SavingThrow from '~/components/Charsheet/SavingThrow/SavingThrow.vue'


export default defineComponent({
  components: { SavingThrow  },

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