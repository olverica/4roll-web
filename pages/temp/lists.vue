<template>

  <section class="page">

    <div class="list_heading list_item list_item-dropdown">
      <div class="list_item_header">
        <p class="list_item_title">Title</p>
      </div>
    </div>

    <div class="list_text list_item list_item-dropdown">
      <div class="list_item_header">
        <p class="list_item_title">Title <i class="list_item_info">(info)</i></p>
        <p class="list_item_hint">hint <i class="list_item_icon">placeholder</i></p>
        <controls-checkbox/>
      </div>
      <p class="list_item_description">Description</p>
    </div>

    <div class="list_table list_item">
      <div class="list_item_header">
        <p class="list_item_title">Title <i class="list_item_info">(info)</i></p>
        <p class="list_item_hint">hint <i class="list_item_icon">placeholder</i></p>
        <controls-checkbox/>
      </div>
      <div class="list_item_column">
        <div class="list_item_row">
          <b>Name:</b>
          <i>placeholder</i>
          <p>value</p>
        </div>
      </div>
    </div>

  </section>

</template>