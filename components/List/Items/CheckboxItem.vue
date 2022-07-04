<template>
  <div class="listItem listText">
    <heading>
      <template #left>
        <slot name="title"/>
        <slot name="subtitle"/>
      </template>
     
      <template #right>
        <slot name="hint"/>

        <check-box 
          :checked="drill('checked')"
          @update:checked="update">
        </check-box>
      </template>
    </heading>

    <div v-if="hasContent"
      class="listItem_content">

      <p class="listItem_paragraph">
        <slot/>
      </p>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent, PropType} from 'vue'
import CheckBox from 'Components/Fields/Checkbox.vue'
import Heading from 'Components/List/Parts/Heading.vue'


export default defineComponent({
  components: { Heading, CheckBox },

  props: {
    shrinkable: {
      default: false,
      type: Boolean as PropType<boolean>
    }
  },

  computed: {
    hasContent(): boolean {
      return this.$slots.default;
    }
  },

  methods: {
    drill(propName: string): any {
      return this.$attrs[propName];
    },

    onClick() {
      this.$emit('update:checked', !!!this.drill('checked'));
    },

    update(value: boolean) {
      this.$emit('update:checked', value);
    }
  }
});
</script>