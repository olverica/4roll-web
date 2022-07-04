<template>
  <div class="listItem listText">
    <heading 
      :hint="drill('hint')"
      :title="drill('title')"
      :subtitle="drill('subtitle')">

      <i v-if="shrinkable"
        class="listItem_toggle">
        
        chevron-up
      </i>
    </heading>

    <div class="listItem_content">
      <p class="listItem_paragraph">
        <slot/>
      </p>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent, PropType} from 'vue'
import Heading from 'Components/List/Parts/Heading.vue'


export default defineComponent({
  components: { Heading },

  props: {
    shrinkable: {
      default: false,
      type: Boolean as PropType<boolean>
    }
  },

  methods: {
    drill(propName: string): any {
      return this.$attrs[propName];
    },

    some() {
      console.log(123)
    }
  }
});
</script>