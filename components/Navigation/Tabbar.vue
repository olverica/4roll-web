<template>
 <section class="tabbar">
    <div class="tabbar_body">
      <tabbar-button/>
      <tabbar-button/>
      <tabbar-button active caption="shit"/>
      <tabbar-button/>
      <tabbar-toggler/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TabbarToggler from '~/components/Navigation/TabbarToggler.vue';
import TabbarButton from '~/components/Navigation/TabbarButton.vue';


export default defineComponent({
  components: { TabbarButton, TabbarToggler },
});
</script>