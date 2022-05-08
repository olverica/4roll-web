<template>

  <div class="page">

    <section class="attributes">
      <h1>Attributes</h1>
      <div class="cells cells-4x">
        <div class="cell cell-temp cell-column">
          <p class="cell_title">title <i class="cell_icon">placeholder</i></p>
          <div class="cell_value">
            <span class="cell_value_primary">0</span>
            <span class="cell_value_secondary">0</span>
          </div>
        </div>
      </div>
    </section>

    <section class="abilities">
      <h1>Abilities</h1>
      <div class="cells cells-3x">
        <div class="cell cell-temp cell-column">
          <p class="cell_title">title <i class="cell_icon">placeholder</i></p>
          <div class="cell_value">
            <span class="cell_value_primary">+0</span>
            <span class="cell_value_secondary">(00)</span>
          </div>
        </div>
      </div>
    </section>

    <section class="savingThrows">
      <h1>Saving throws</h1>
      <div class="cells cells-6x">
        <div class="cell cell-temp cell-column">
          <p class="cell_title">title <i class="cell_icon">placeholder</i></p>
          <div class="cell_value cell_value-marked">
            <span class="cell_value_primary">+0</span>
            <i class="cell_mark"></i>
          </div>
        </div>
      </div>
    </section>

    <section class="skills">
      <h1>Skills</h1>
      <div class="cells cells-2x">
        <div class="cell cell-row">
          <p class="cell_title"><i class="cell_icon">placeholder</i> title</p>
          <div class="cell_value cell_value-marked">
            <span class="cell_value_primary">+00</span>
            <i class="cell_mark"></i>
          </div>
        </div>
      </div>
    </section>

  </div>

</template>

<style lang="sass">

  .page
    gap: 20px !important

  section
    gap: 15px
    display: flex
    flex-direction: column

  h1
    color: #b3b3b3
    font-size: 18px
    font-weight: 600

</style>
