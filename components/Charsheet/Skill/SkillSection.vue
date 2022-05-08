<template>
  <section class="skills">
    <h1>Skills</h1>

    <div class="cells cells-2x">
      <skill 
        v-for="skill in skills"
        :model="skill"/>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Skill from '~/components/Charsheet/Skill/Skill.vue'


export default defineComponent({
  components: { Skill },

  data() {
    return {
      skills: [
        { name: "asd", value: 1 },
        { name: "asd", value: 1 },
        { name: "asd", value: 1 },
        { name: "asd", value: 1 },
        { name: "asd", value: 1 },
        { name: "asd", value: 1 },
        { name: "asd", value: 1 },
        { name: "asd", value: 1 },
      ]
    }
  }
});
</script>