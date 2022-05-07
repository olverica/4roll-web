<template>


<section class="page">

  <div class="cell cell-col-3">
    <p class="cell_title icon-platinum">Title</p>
    <div class="cell_value">
      <p class="cell_value_primary">00</p>
      <p class="cell_value_secondary">00</p>
    </div>
  </div>

  <div class="cell cell-input cell-col-3">
    <p class="cell_title">Title</p>
    <input type="tel" placeholder="-" class="cell_input">
  </div>

  <div class="cell cell-row-2">
    <p class="cell_title">Title</p>
    <div class="cell_value cell_value-indicator">
      <p class="cell_value_primary">00</p>
      <i class="cell_indicator"></i>
    </div>
  </div>

  <div class="cell cell-row-2">
    <p class="cell_title">Title</p>
    <controls-checkbox/>
  </div>

  <div class="cell cell-table">
    <p class="cell_title">Title</p>
    <div class="cell_table">
      <div class="cell_table_group">
        <div class="cell_table_row">
          <b class="cell_table_value">00</b>
          <p class="cell_table_text">text</p>
        </div>
        <div class="cell_table_row">
          <b class="cell_table_value">00</b>
          <p class="cell_table_text">text</p>
        </div>
      </div>
      <div class="cell_table_modifier">
        <div class="cell_table_row">
          <b class="cell_table_value">00</b>
          <p class="cell_table_text">text</p>
        </div>
      </div>
    </div>
  </div>


</section>


</template>