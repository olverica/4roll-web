<template>
  <sandbox-button
    v-if="buttonShown"
    @press="open"/>

  <expose-transition :center="coords">
    <sandbox 
      v-if="sandboShown" 
      class="sandbox" 
      @close="hide"
    />
  </expose-transition>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ExposeTransition from '~/components/Dev/ExposeTransition.vue';
import SandboxButton from '~/components/Dev/SandboxButton.vue';
import Sandbox from '~/components/Dev/Sandbox.vue';


export default defineComponent({
  components: { ExposeTransition, SandboxButton, Sandbox },

  data() {
    return {
      sandboShown: false,
      buttonLoaded: false,
      coords: {x: 0, y: 0}
    }
  },
  
  computed: {
    buttonShown() {
      return !!!this.sandboShown && this.buttonLoaded;
    }
  },

  mounted() {
    setTimeout(() => 
      this.buttonLoaded = true, 1000);
  },

  methods: {
    open(coords) {
      this.coords = coords;
      this.sandboShown = true;
    },

    hide() {
      this.sandboShown = false;
    }
  }
});
</script>