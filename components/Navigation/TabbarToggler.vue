<template>
  <tabbar-button
    class="tabbar_button-toggler"
    caption="hide"
    icon="hide"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TabbarButton from '~/components/Navigation/TabbarButton.vue';


export default defineComponent({
  components: { TabbarButton }
});
</script>