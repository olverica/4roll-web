<template>
  <button class="listItem listControl">
    <heading :title="{text: name}">

      <check-box v-if="isBoolean"
        :field="(field as any)"/>

      <counter v-else
        :field="(field as any)"/>

    </heading>
  </button>
</template>


<script lang="ts">
import {defineComponent, PropType} from 'vue'
import CheckBox from 'Components/Controls/Checkbox.vue'
import Heading from 'Components/List/Parts/Heading.vue'
import Counter from 'Components/Controls/Counter.vue'


export default defineComponent({
  components: { Heading, CheckBox, Counter },

  props: {
    field: {
      required: true,
      type: Object
    },

    name: {
      required: true,
      type: String as PropType<string>
    }
  },

  computed: {
    isBoolean(): boolean {
      return typeof this.field.getValue() === 'boolean';
    }
  },

  methods: {
    onClick() {
      if (this.isBoolean)
        this.update(!!!this.value);
    }
  }
});
</script>