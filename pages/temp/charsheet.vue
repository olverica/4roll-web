<template>
  <main class="charsheet">
    
    <avatar/>

    <attribute-section/>

    <section class="section senses">

      <core-vue-button icon="chevron-up" texted>Senses</core-vue-button>

      <div class="grid grid-3x">
        <cell-types-column-cell title="Pass. Perception">
          <cell-value primary="00" secondary=""/>
        </cell-types-column-cell>
        <cell-types-column-cell title="Pass. Insight">
          <cell-value primary="00" secondary=""/>
        </cell-types-column-cell>
        <cell-types-column-cell title="Pass. Investigation">
          <cell-value primary="00" secondary=""/>
        </cell-types-column-cell>
      </div>
    </section>
    
    <ability-section/>

    <saving-throw-section/>

    <skill-section/>

  </main>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import VueHeader from 'Components/Core/VueHeader.vue';
import VueButton from 'Components/Core/VueButton.vue';
import Avatar from 'Components/Wip/avatar/Avatar.vue';
import SavingThrowSection from 'Components/Charsheet/SavingThrow/SavingThrowSection.vue';
import AttributeSection from 'Components/Charsheet/Attribute/AttributeSection.vue';
import AbilitySection from 'Components/Charsheet/Ability/AbilitySection.vue';
import SkillSection from 'Components/Charsheet/Skill/SkillSection.vue';


export default defineComponent({
  components: {
    VueHeader,
    VueButton,
    Avatar,
    AttributeSection, 
    SavingThrowSection, 
    AbilitySection, 
    SkillSection
  }
});
</script>

<style lang="sass">


</style>
