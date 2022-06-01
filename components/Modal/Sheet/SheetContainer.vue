<template>
  <sheet-section :interaction-handler="interactionHandler">
    <sheet :interaction-handler="interactionHandler">
      <sheet-thumb
        :interaction-handler="interactionHandler"
        :event-handler="eventHandler"
      />

      <component :is="body" @close="close">
        <sheet-extender :interaction-handler="interactionHandler"/>
      </component>
    </sheet>
  </sheet-section>
</template>

<script lang="ts">
import {PropType, defineComponent, DefineComponent} from 'vue'
import SheetInteractionHandler from '~/services/Animation/Sheet/SheetInteractionHandler'
import EventHandler from '~/services/Animation/Sheet/Behaviour/EventHandler'
import SheetSection from '~/components/Modal/Sheet/SheetSection.vue'
import SheetExtender from '~/components/Modal/Sheet/SheetExtender.vue'
import SheetThumb from '~/components/Modal/Sheet/SheetThumb.vue'
import Sheet from '~/components/Modal/Sheet/Sheet.vue'


export default defineComponent({
  components: { SheetSection, SheetThumb, SheetExtender, Sheet},

  props: {
    body: {
      required: true,
      type: Object as PropType<DefineComponent>
    },
  },

  data() {
    return {
      interactionHandler: new SheetInteractionHandler(),
      eventHandler: new EventHandler(),
      detached: false
    }
  },

  mounted() {
    this.interactionHandler = new SheetInteractionHandler();
    this.interactionHandler.init();
  },

  watch: {
    closed(value: boolean) {
      if (value)
        this.close();
    }
  },

  methods: {
    close(): void {
      this.interactionHandler.onClose();
    }
  }
});
</script>