<template>
  <section class="savingThrows">
    <h1>Saving throws</h1>

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
        { name: 'throw', value: 123 },
        { name: 'throw', value: 123 },
        { name: 'throw', value: 123 },
        { name: 'throw', value: 123 },
        { name: 'throw', value: 123 },
        { name: 'throw', value: 123 }
      ]
    }
  }
});
</script>