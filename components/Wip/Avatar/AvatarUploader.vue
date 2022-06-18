<template>

  <section class="avatar avatar-uploader">
    <button class="avatar_clickable">
      <picture class="avatar_picture">
        <img src="https://i.pinimg.com/736x/d7/3b/dd/d73bdd88df21a2210fadb0e5f9e865ae.jpg">
      </picture>
      <vue-label icon="upload">Upload picture</vue-label>
    </button>
  </section>

</template>

<script lang="ts">

import VueLabel from 'Components/Core/VueLabel.vue';

export default defineComponent({
  components: {
    VueLabel,
  }
});

</script>