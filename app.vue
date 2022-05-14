<template>

  <div class="viewport">

    <!-- <section class="sheet">
      <div class="sheet_body">
        <div class="header">
          <h1 class="header_name">Header</h1>
          <button class="header_button">cross</button>
        </div>
        <div class="sheet_content">
          <div class="sheet_tempBlock"></div>
          <div class="sheet_tempBlock"></div>
          <div class="sheet_tempBlock"></div>
          <div class="sheet_tempBlock"></div>
          <div class="sheet_tempBlock"></div>
          <div class="sheet_tempBlock"></div>
          <div class="sheet_tempBlock"></div>
          <div class="sheet_tempBlock"></div>
        </div>
        <button class="button">button</button>
      </div>
    </section> -->

    <section class="tabbar">
      <div class="tabbar_body">
        <button class="tabbar_button">
          <i>placeholder</i>
          <p>Button</p>
        </button>
        <button class="tabbar_button">
          <i>placeholder</i>
          <p>Button</p>
        </button>
        <button class="tabbar_button tabbar_button-active">
          <i>placeholder</i>
          <p>Counter</p>
        </button>
        <button class="tabbar_button">
          <i>placeholder</i>
          <p>button</p>
        </button>
        <button class="tabbar_button tabbar_button-toggler">
          <i>hide</i>
          <p>Hide</p>
        </button>
      </div>
    </section>

    <nuxt-page class="page"/>
  </div>

</template>

<script lang="ts">
  import {defineComponent} from 'vue'

  export default defineComponent({

  });
</script>
