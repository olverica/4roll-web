<template>
  <main class="components">

    <core-vue-header>Header text</core-vue-header>
    <core-vue-title>Title text</core-vue-title>


    <entry-form>
      <input-field hint="asd" placeholder="ssd" primary-icon="eye"/>
      <textarea-field title="asd" hint="asd" />
    </entry-form>

    <p class="paragraph">
      Ultrices consequat amet dignissim placerat egestas justo, tristique nibh et. Tristique est et dictum varius mitos vitae fringilla tellus risus, suspendisse.
    </p>

    <small class="label">label text<i>placeholder</i></small>

    <wip-controls-checkbox/>
    <wip-controls-checkbox round/>
    <wip-controls-checkbox round failled/>
    <wip-controls-radiobutton/>
    <wip-controls-switch/>
    <wip-controls-counter/>

    <core-vue-button class="button-texted">Upload picture <i>upload</i></core-vue-button>
    <core-vue-button class="button-filled">Button <i>placeholder</i></core-vue-button>
    <core-vue-button class="button-filled button-red">Delete <i>cross</i></core-vue-button>
    <core-vue-button class="button-filled button-blue">Confirm <i>arrow-right</i></core-vue-button>
    <core-vue-button class="button-filled button-green">Selected <i>check</i></core-vue-button>
    <wip-button-google>Continue with Google</wip-button-google>
    
    <div class="listHeader">
      <h3 class="listHeader_title">List header</h3>
      <button class="listHeader_button">chevron-up</button>
    </div>

    <div class="listText">
      <div class="listText_heading">
        <h3 class="listText_title">List text</h3>
        <small class="listText_hint">(Hint)</small>
        <button class="listText_button">chevron-up</button>
      </div>

      <p class="listText_paragraph">paragraph</p>
    </div>

    <button class="listItem">
      <div class="listItem_heading">
        <h3 class="listItem_title">List item</h3>
        <small class="listItem_hint">Hint <i>placeholder</i></small>
        <wip-controls-radiobutton/>
        <!-- <wip-controls-checkbox/> -->
        <!-- <wip-controls-switch/> -->
        <!-- <wip-controls-counter/> -->
        <!-- <core-vue-button class="button-texted">select <i>chevron-right</i></core-vue-button> -->
      </div>

      <p class="listItem_description">description</p>
    </button>


    <div class="textarea">
      <div class="textarea_heading">
        <h3 class="textarea_title">Textarea title</h3>
        <small class="textarea_hint">(hint)</small>
        <span class="textarea_counter">128/256</span>
        <button class="textarea_button">chevron-down</button>
      </div>

      <p class="textarea_entry" placeholder="placeholder" contenteditable>
        This textarea is filled with a lot of very 
        interesting and incredibly useful paragraph of text 
      </p>
    </div>

    <div class="input">
      <i class="input_icon input_icon-primary">placeholder</i>
      <input class="input_entry" placeholder="placeholder" type="text">  
      <small class="input_hint">hint</small>
      <i class="input_icon input_icon-secondary">placeholder</i>
    </div>

    <button class="card card-huge">
      <picture class="card_picture">
        <img src="https://i.pinimg.com/736x/d7/3b/dd/d73bdd88df21a2210fadb0e5f9e865ae.jpg">
      </picture>
      <div class="card_text">
        <h3 class="card_title">Title</h3>
        <h4 class="card_subtitle">Subtitle</h4>
      </div>
      <i class="card_icon">dots-hor</i>
    </button>

    <button class="card card-large">
      <picture class="card_picture">
        <img src="https://i.pinimg.com/736x/d7/3b/dd/d73bdd88df21a2210fadb0e5f9e865ae.jpg">
      </picture>
      <div class="card_text">
        <h3 class="card_title">Title</h3>
        <h4 class="card_subtitle">Subtitle</h4>
      </div>
      <i class="card_icon">chevron-right</i>
    </button>

    <button class="card card-large card-large-nested">
      <picture class="card_picture">
        <img src="https://i.pinimg.com/736x/d7/3b/dd/d73bdd88df21a2210fadb0e5f9e865ae.jpg">
      </picture>
      <div class="card_text">
        <h3 class="card_title">Title</h3>
        <!-- <h4 class="card_subtitle">Subtitle</h4> -->
      </div>
      <i class="card_icon">chevron-right</i>
    </button>

    <button class="card card-large card-large-described">
      <!-- <picture class="card_picture">
        <img src="https://i.pinimg.com/736x/d7/3b/dd/d73bdd88df21a2210fadb0e5f9e865ae.jpg">
      </picture> -->
      <div class="card_text">
        <h3 class="card_title">Title</h3>
        <h4 class="card_subtitle">
          This card is filled with a lot of very 
          interesting and incredibly super mega useful paragraph of text 
        </h4>
      </div>
      <i class="card_icon">chevron-right</i>
    </button>
    
    <button class="card card-medium">
      <h3 class="card_title">Title</h3>
      <i class="card_icon">chevron-right</i>
    </button>

    <div class="cells cells-2x">

      <div class="cell cell-table">
        <div class="cell_heading">
          <h3 class="cell_title">Title</h3>
          <i class="cell_icon">placeholder</i>
        </div>

        <div class="cell_table">
          <div class="cell_group">
            <div class="cell_row">
              <b class="cell_data">00</b>
              <p class="cell_text">label</p>
            </div>
            <div class="cell_row">
              <b class="cell_data">00</b>
              <p class="cell_text">label</p>
            </div>
          </div>
          <div class="cell_modifier">
            <b class="cell_data">00</b>
            <p class="cell_text">label</p>
          </div>
        </div>
      </div>

      <button class="cell cell-column">
        <div class="cell_heading">
          <h3 class="cell_title">Title</h3>
          <i class="cell_icon">placeholder</i>
        </div>

        <input class="cell_input" placeholder="–" type="number">
      </button>

    </div>
    
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import EntryForm from 'Components/Form/EntryForm.vue'
import InputField from 'Components/Form/Input/InputField.vue'
import TextareaField from 'Components/Form/Textarea/TextareaField.vue'


export default defineComponent({
  components: {EntryForm, InputField, TextareaField},

});
</script>