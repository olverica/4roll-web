<template>
  <section class="sheet" @click.self="close">
    
    <!-- overlay -->

    <sheet
      ref="sheet"
      :interaction-handler="interactionHandler"
    >
      <sheet-thumb
        :interaction-handler="interactionHandler"
        :event-handler="eventHandler"
        :margin="offset"
      />

      <component 
        :is="body" 
        @close="close"
      />

      <sheet-extender
        :interaction-handler="interactionHandler"
      />
    </sheet>
  </section>
</template>

<script lang="ts">
import {PropType, defineComponent, DefineComponent} from 'vue'
import SheetInteractionHandler from '~/services/Animation/Sheet/SheetInteractionHandler'
import EventHandler from '~/services/Animation/Sheet/Behaviour/EventHandler'
import SheetExtender from '~/components/Modal/Sheet/SheetExtender.vue'
import SheetThumb from '~/components/Modal/Sheet/SheetThumb.vue'
import VueHeader from '~/components/Core/VueHeader.vue'
import Sheet from '~/components/Modal/Sheet/Sheet.vue'


export default defineComponent({
  components: { VueHeader, SheetThumb, SheetExtender, Sheet},

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
    }
  },

  computed: {
    closed(): boolean {
      return this.interactionHandler && this.interactionHandler.closed();
    },

    offset(): number {
      console.log('counted');
      return this.$refs.sheet ? this.$refs.sheet.$el.offsetHeight : 0;
    },
  },

  watch: {
    closed(value: boolean) {
      if (value)
        this.close();
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
});
</script>