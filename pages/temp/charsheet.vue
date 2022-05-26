<template>
  <div class="charsheet">
    
    <vue-header>Character name</vue-header>
    
    <div class="avatar">
      <picture class="avatar_picture">
        <img src="https://i.pinimg.com/736x/d7/3b/dd/d73bdd88df21a2210fadb0e5f9e865ae.jpg">
      </picture>
      <h1 class="avatar_title">Title</h1>
      <h2 class="avatar_subtitle">Subtitle</h2>
    </div>

    <attribute-section/>
    
    <ability-section/>

    <saving-throw-section/>

    <skill-section/>


    <!-- 
    <skill-section/>
    <skill-section/>
    <skill-section/> 
    -->

  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import VueHeader from '~/components/core/VueHeader.vue'
import SavingThrowSection from '~/components/Charsheet/SavingThrow/SavingThrowSection.vue';
import AttributeSection from '~/components/Charsheet/Attribute/AttributeSection.vue';
import AbilitySection from '~/components/Charsheet/Ability/AbilitySection.vue';
import SkillSection from '~/components/Charsheet/Skill/SkillSection.vue';


export default defineComponent({
  components: {
    VueHeader,
    AttributeSection, 
    SavingThrowSection, 
    AbilitySection, 
    SkillSection
  }
});
</script>

<style lang="sass">


</style>
