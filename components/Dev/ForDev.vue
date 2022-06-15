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
import {defineComponent, provide} from 'vue'
import ConsoleService from 'App/Dev/ConsoleService'
import ExposeTransition from 'Components/Dev/Sandbox/ExposeTransition.vue';
import SandboxButton from 'Components/Dev/Sandbox/SandboxButton.vue';
import Sandbox from 'Components/Dev/Sandbox/Sandbox.vue';


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

  setup() {
    let messages = reactive([]);

    provide('$console', reactive(new ConsoleService(messages)));
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