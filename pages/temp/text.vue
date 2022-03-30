<template>

  <section class="demo">
    <div class="demoList">
      <h1 class="bold-22">Header Bold 22px 100%</h1>
      <h2 class="bold-20">Header Bold 20px 100%</h2>
    </div>

    <div class="demoList">
      <p class="semi-20">Title Semi 20px 100%</p>
      <p class="semi-18">Title Semi 18px 100%</p>
      <p class="semi-16">Title Semi 16px 100%</p>
      <p class="semi-14">Title Semi 14px 100%</p>
      <p class="semi-14-i">Title Semi 14px 100%</p>
      <p class="semi-12">Title Semi 12px 100%</p>
      <p class="semi-10">Title Semi 10px 100%</p>
    </div>

    <div class="demoList">
      <p class="med-18">Subtitle Med 18px 100%</p>
      <p class="med-16">Subtitle Med 16px 100%</p>
      <p class="med-14">Subtitle Med 14px 100%</p>
      <p class="med-12">Subtitle Med 12px 100%</p>
      <p class="med-12-i">Subtitle Med 12px 100%</p>
    </div>

    <div class="demoList">
      <p class="text-16">Text Med 16px 140%</p>
      <p class="text-14">Text Med 14px 140%</p>
      <p class="text-12">Text Med 12px 140%</p>
      <p class="text-12-i">Text Med 12px 140%</p>
    </div>

    <div class="demoList">
      <i class="icon-4R" style="font-size: 100px;">cancel</i>
    </div>
  
  </section>

</template>


<style lang="sass">

  .demo
    display: flex
    flex-direction: column
    gap: 20px
  
  .demoList
    color: #fff
    // flex
    display: flex
    flex-direction: column
    gap: 10px

</style>