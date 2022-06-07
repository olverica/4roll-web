<template>

  <div>
    <VueHeader>Vue header</VueHeader>

    <slot/>

    <tabbar/>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import VueHeader from 'Components/Core/VueHeader.vue'
import Viewport from 'Components/Layout/Viewport.vue'
import Tabbar from 'Components/Navigation/Tabbar.vue'

export default defineComponent({
  components: { Viewport,  VueHeader, Tabbar},
});
</script>