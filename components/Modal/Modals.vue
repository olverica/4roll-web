<template>
  <sheet-container 
    v-if="sheet"
    @close="hideSheet"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {ModalContainer} from '~/services/Modal/ModalService';
import ModalService from '~/services/Modal/ModalService';
import SheetContainer from '~/components/Modal/Sheet/SheetContainer.vue';


export default defineComponent({
  components: { SheetContainer },

  inject: ['$modals'],

  computed: {
    modals(): ModalService {
      if (!!!this.$modals)  
        throw Error('Dependency not injecteds');

      return this.$modals;
    },

    container(): ModalContainer {
      return this.modals.getContainer();
    },

    sheet(): object {
      return this.container.sheet;
    }
  },

  methods: {
    hideSheet() {
      this.modals.hideSheet();
    }
  }
});
</script>