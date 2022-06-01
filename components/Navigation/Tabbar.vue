<template>
 <nav class="tabbar">
    <tabbar-button/>
    <tabbar-button/>
    <tabbar-button active caption="shit"/>
    <tabbar-button/>
    <tabbar-button/>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TabbarButton from '~/components/Navigation/TabbarButton.vue';


export default defineComponent({
  components: { TabbarButton },
});
</script>