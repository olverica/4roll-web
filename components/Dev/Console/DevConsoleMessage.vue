<template>
  <div class="dev-console_message">
    <span class="dev-console_timestamp">{{ formatedTimestamp }}</span>
    <span class="dev-console_data">
      <span v-html="message"></span>
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import formatHighlight from 'json-format-highlight'


export default defineComponent({
  functional: true,

  props: {
    timestamp: {
      required: true,
      type: Object as PropType<Date>
    },
    
    data: {
      type: Array as PropType<any[]>
    }
  },

  computed: {
    message(): string {
      try {
        return this.data
          .map(this.convertToJson)
          .join(' ');
      }
      catch {
        return 'reccursive'
      }
    },

    formatedTimestamp() {
      return this.timestamp.toLocaleTimeString()
    }
  },

  mounted() {
    let one = {asd: 123 as any};
    let two = {asd: one};
    one.asd = two;
  },

  methods: {
    convertToJson(data: Array<any>) {
      return formatHighlight(JSON.stringify(data));
    }
  }
});
</script>

<style lang="sass">

.dev-console_message
  line-break: anywhere

.dev-console_timestamp
  margin-right: 10px
    
</style>