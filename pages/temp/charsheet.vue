<template>
  <div class="charsheet">
    <attribute-section/>
    
    <ability-section/>

    <saving-throw-section/>

    <skill-section/>
    <skill-section/>
    <skill-section/>
    <skill-section/>


  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import SavingThrowSection from '~/components/Charsheet/SavingThrow/SavingThrowSection.vue';
import AttributeSection from '~/components/Charsheet/Attribute/AttributeSection.vue';
import AbilitySection from '~/components/Charsheet/Ability/AbilitySection.vue';
import SkillSection from '~/components/Charsheet/Skill/SkillSection.vue';


export default defineComponent({
  components: { 
    AttributeSection, 
    SavingThrowSection, 
    AbilitySection, 
    SkillSection
  }
});
</script>

<style lang="sass">

  .charsheet
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
