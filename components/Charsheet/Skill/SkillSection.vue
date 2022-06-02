<template>
  <section class="skills">
    <core-vue-title>Skills</core-vue-title>

    <div class="cells cells-2x">
      <skill 
        v-for="skill in skills"
        :model="skill"/>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Skill from 'Components/Charsheet/Skill/Skill.vue'


export default defineComponent({
  components: { Skill },

  data() {
    return {
      skills: [
        { name: "Athletics", value: 1 },
        { name: "Acrobatics", value: 2 },
        { name: "Sleight of Hand", value: 3 },
        { name: "Stealth", value: 4 },
        { name: "Arcana", value: 5 },
        { name: "History", value: 6 },
        { name: "Investigation", value: 7 },
        { name: "Nature", value: 8 },
        { name: "Religion", value: 9 },
        { name: "Deception", value: 1 },
        { name: "Intimidation", value: 2 },
        { name: "Performance", value: 3 },
        { name: "Persuasion", value: 4 },
        { name: "Animal Handling", value: 5 },
        { name: "Insight", value: 6 },
        { name: "Medicine", value: 7 },
        { name: "Perception", value: 8 },
        { name: "Survival", value: 9 },
      ]
    }
  }
});
</script>