<template>
  <main class="components">
    
    <section class="scrollMenu scrollGraph">
      <canvas class="scrollGraph_canvas"></canvas>
      <div class="scrollSettings_list">
        <h2 class="scrollSettings_title">Graph settings</h2>  
        <div class="scrollSettings_group">
          <wip-list-control/>  
        </div>
      </div>
    </section>
    <section class="scrollMenu scrollSettings">
      <div class="scrollSettings_list">
        <h2 class="scrollSettings_title">Scroll options</h2>  
        <div class="scrollSettings_group">
          <wip-list-header>
            Scroll axes
          </wip-list-header>
          <div class="scrollSettings_row">
            <wip-list-control/>
            <wip-list-control/>
          </div>      
        </div>
        <div class="scrollSettings_group">
          <wip-list-header>
            boundaries
          </wip-list-header>
          <div class="scrollSettings_row">
            <wip-list-control/>
            <wip-list-control/>
          </div>
          <div class="scrollSettings_row">
            <wip-list-control/>
            <wip-list-control/>
          </div>       
        </div>
      </div>
      <div class="scrollSettings_list">
        <h2 class="scrollSettings_title">Scroll values</h2>  
        <div class="scrollSettings_group">
          <wip-list-header>
            Viewport
          </wip-list-header>
          <wip-list-control/>  
        </div>
        <div class="scrollSettings_group">
          <wip-list-header>
            Boundaries
          </wip-list-header>
          <wip-list-control/>
          <wip-list-control/>    
        </div>
        <div class="scrollSettings_group">
          <wip-list-header>
            Controls
          </wip-list-header>
          <wip-list-control/>
          <wip-list-control/>    
        </div>
      </div>
    </section>




    <div class="group">
      <core-vue-title button="placeholder">Vue Title</core-vue-title>
      <core-vue-label icon="placeholder">Vue label</core-vue-label>
      <core-vue-text>Some text</core-vue-text>      
    </div>

    <div class="group">
      <wip-avatar/>
      <wip-avatar-uploader/>
    </div>

    <button class="experience">
      <div class="experience_progress">
        <div class="experience_current" style="width: 75%;"></div>
      </div>
      <div class="experience_values">
        <small class="experience_value">7 LEVEL</small>
        <small class="experience_value">19 750 / 34 000 XP.</small>
      </div>
    </button>

    <div class="list">
      <wip-list-header/>
      <wip-list-text/>
      <wip-list-control/>
    </div>

    <div class="group">
      <entry-form>
        <input-field hint="asd" placeholder="ssd" primary-icon="eye"/>
        <textarea-field title="asd" hint="asd" />
      </entry-form>
    </div>

    <div class="group">
      <wip-controls-checkbox/>
      <wip-controls-checkbox round/>
      <wip-controls-checkbox round failled/>
      <wip-controls-radiobutton/>
      <wip-controls-switch/>
      <wip-controls-counter/>
    </div>
  
    <div class="group">
      <core-vue-button texted>Button</core-vue-button>
      <core-vue-button>Button</core-vue-button>
      <core-vue-button coloring="red" icon="placeholder">Delete</core-vue-button>
      <core-vue-button coloring="green">Confirm</core-vue-button>
      <core-vue-button coloring="blue">Selected</core-vue-button>
      <wip-button-google>Continue with Google</wip-button-google>
    </div>

    <div class="group">
      <wip-card-huge-card/>
      <wip-card-large-card/>
      <wip-card-large-card nested/>
      <wip-card-large-card described/>
      <wip-card-medium-card>Medium card</wip-card-medium-card>
    </div>

    <div class="cells cells-2x">
      <cell-types-checkbox-cell/>
      <cell-types-checkbox-cell/>
    </div>

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