<template>

  <section class="temper">
    <div class="radioButton radioButton-active"></div>
    <div class="checkBox checkBox-active"></div>
    <div class="checkBox checkBox-round checkBox-active"></div>
    <div class="checkBox checkBox-round checkBox-fail checkBox-active"></div>
    <div class="switch switch-active"></div>
    
    <div class="counter">
      <button class="counter_button counter_button-minus">minus</button>
      <input class="counter_input" value="1">
      <button class="counter_button counter_button-plus">plus</button>
    </div>

    <button class="button">button</button>
    <button class="button" disabled>disabled</button>
    <button class="button button-google">Продолжить c Google</button>

  </section>

  <section class="tabbar">
    <button class="tabbar_button">
      <i class="tabbar_button_icon">placeholder</i>
      <p class="tabbar_button_text">button</p>
    </button>
    <button class="tabbar_counter">
      <p class="tabbar_button_icon">0/0</p>
      <p class="tabbar_button_text">counter</p>
    </button>
    <button class="tabbar_button" disabled>
      <i class="tabbar_button_icon">placeholder</i>
      <p class="tabbar_button_text">button</p>
    </button>
  </section>

</template>