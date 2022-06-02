<template>
  <div class="dev-console">
    <dev-console-message
      v-for="{data, timestamp} of messages"
      :timestamp="timestamp"
      :data="data"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DevConsoleMessage from 'Components/Dev/Console/DevConsoleMessage.vue'
import ConsoleService, {ConsoleMessage} from 'Services/Dev/ConsoleService'
import inject from 'Services/Support/Helpers/Inject';


export default defineComponent({
  components: { DevConsoleMessage },

  inject: ['$console'],

  computed: {
    console(): ConsoleService {
      return inject(this, 'console');
    },

    messages(): ConsoleMessage[] {
      return this.console.getMessages().slice(-20);
    }
  },
});
</script>

<style lang="sass">

.dev-console
  display: flex
  flex-direction: column-reverse

  width: 100%
  gap: 10px

  font-size: 12px
  
    
</style>