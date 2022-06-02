<template>
  <sheet-section :data="data">
    <sheet ref="sheet" :data="data">

      <sheet-thumb
        :interaction-handler="interactionHandler"
      />

      <component :is="body" @close="close">
        <sheet-extender :data="data"/>
      </component>
    </sheet>
  </sheet-section>
</template>

<script lang="ts">
import {PropType, defineComponent, DefineComponent} from 'vue'
import SheetInteractionHandler from 'Services/Animation/Sheet/SheetInteractionHandler'
import InteractionBoundaries from 'Services/Animation/Sheet/Info/InteractionBoundaries'
import SheetExtender from 'Components/Modal/Sheet/SheetExtender.vue'
import SheetSection from 'Components/Modal/Sheet/SheetSection.vue'
import SheetThumb from 'Components/Modal/Sheet/SheetThumb.vue'
import SheetDTO from 'Services/Animation/Sheet/SheetDTO';
import Sheet from 'Components/Modal/Sheet/Sheet.vue'


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
      data: new SheetDTO(),
      interactionHandler: null,
      detached: false
    }
  },

  computed: {
    closed(): boolean {
      return this.data.isClosed();
    }
  },

  mounted() {
    let boundaries = new InteractionBoundaries({
      closePoint: window.innerHeight - this.offsetTop(),
      bottomBreak: 200,
      topBreak: 200,
    });

    this.data.changePosition(boundaries.closeAt());
    this.interactionHandler = new SheetInteractionHandler(this.data, boundaries);
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
      this.$emit('close');
    },

    offsetTop(): number {
      let el = this.$refs.sheet.$el;
      return el ? el.getBoundingClientRect().top : 0;
    }
  }
});
</script>