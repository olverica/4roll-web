<template>
  <main class="charsheet">
    
    <vue-header>Character name</vue-header>
    
    <div class="avatar">
      <picture class="avatar_picture">
        <img src="https://i.pinimg.com/736x/d7/3b/dd/d73bdd88df21a2210fadb0e5f9e865ae.jpg">
      </picture>
      <h2 class="avatar_title">Title</h2>
      <h3 class="avatar_subtitle">Subtitle</h3>
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

  </main>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import VueHeader from 'Components/Core/VueHeader.vue'
import SavingThrowSection from 'Components/Charsheet/SavingThrow/SavingThrowSection.vue';
import AttributeSection from 'Components/Charsheet/Attribute/AttributeSection.vue';
import AbilitySection from 'Components/Charsheet/Ability/AbilitySection.vue';
import SkillSection from 'Components/Charsheet/Skill/SkillSection.vue';


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
