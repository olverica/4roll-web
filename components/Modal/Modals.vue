<template>
  <sheet-container 
    v-if="sheet"
    :body="sheet.component"
    @close="hideSheet"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import inject from 'Services/Support/Helpers/Inject';
import ScrollService from 'Services/Modal/ModalService'
import SheetContainer from 'Components/Modal/Sheet/SheetContainer.vue'
import ModalService, {ModalComponent, ModalContainer} from 'Services/Modal/ModalService'


export default defineComponent({
  components: { SheetContainer },

  inject: ['$modals', '$scroll'],

  computed: {
    scroll(): ScrollService {
      return inject(this, 'scroll');
    },

    modals(): ModalService {
      return inject(this, 'modals');
    },

    container(): ModalContainer {
      return this.modals.getContainer();
    },

    sheet(): {component: ModalComponent} {
      return this.container.sheet;
    }
  },

  watch: {
    sheet(value: unknown) {
      return value ? this.scroll.lock() : this.scroll.unlock();
    }
  },

  methods: {
    hideSheet() {
      this.modals.hideSheet();
    }
  }
});
</script>