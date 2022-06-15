<template>
  <div 
    class="textarea"
    :style="{
      'height': height
    }"
    :class="{
      'textarea-focused': focused,
      'textarea-closed': trulyClosed
    }"
    @transitionend="onTransitionEnd">
    <slot/>
  </div>
</template>


<script lang="ts">
import {defineComponent, PropType} from 'vue'
import sleep from 'App/Support/Helpers/Sleep'

export default defineComponent({
  props: {
    focused: {
      default: false,
      type: Boolean as PropType<boolean>
    },

    closed: {
      default: false,
      type: Boolean as PropType<boolean>
    },
  },

  data() {
    return {
      trulyClosed: false,
      restriction: null as null|number,
    }
  },

  computed: {
    height(): string|null {
      return this.restriction !== null ? this.restriction + 'px' : null; 
    },

    opened() {
      return !!!this.closed;
    }
  },

  watch: {
     closed(closing: boolean) {
      if (closing)
        this.close()
      else
        this.open();
    }
  },

  methods: {
     async close(): Promise<void> {
      this.restriction = this.elHeight();
      await this.tillRender();

      this.trulyClosed = true;
    },

    async open(): Promise<void> {
      this.trulyClosed = false;
    },

    tillRender(callback: () => void): Promise<void> {
      return sleep(100).then(callback);
    },
  
    elHeight(): number {
      return this.$el.getBoundingClientRect().height;
    },

    onTransitionEnd(): void {
      if (this.opened) this.restriction = null;
    },
  }
});
</script>

<style>

.textarea-closed {
  height: 50px !important;
}

</style>