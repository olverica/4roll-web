<template>
  <section class="scrollMenu scrollSettings">
    <div class="scrollSettings_list">
      <h2 class="scrollSettings_title">Scroll options</h2>  
      
      <list-group title="scroll axes">
        <div class="scrollSettings_row">
          <setting name="horizontal" :field="horizontal"/>
          <setting name="vertical" :field="vertical"/>
        </div>  
      </list-group>

      <list-group title="bounce">
        <div class="scrollSettings_row">
          <setting name="top" :field="top"/>
          <setting name="bottom" :field="bottom"/> 
        </div>
        <div class="scrollSettings_row">
          <setting name="left" :field="left"/>
          <setting name="right" :field="right"/>
        </div>
      </list-group>
    </div>

    <div class="scrollSettings_list">
      <h2 class="scrollSettings_title">Scroll values</h2>  

      <list-group title="viewport">
        <setting name="damping" :field="damping"/> 
      </list-group>

      <list-group title="boundaries">
        <setting name="friction" :field="friction"/> 
        <setting name="resistance" :field="resistance"/> 
      </list-group>

      <list-group title="controls">
        <setting name="release modifier" :field="releaseModifier"/> 
        <setting name="spin modifier" :field="spinModifier"/> 
        <setting name="max velocity" :field="maxVelocity"/> 
      </list-group>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Setting from 'Components/Scroll/Settings/Setting.vue'
import ListGroup from 'Components/List/ListGroup.vue'
import AxisSetting from 'App/Scroll/Settings/Fields/AxisSetting'
import RangeSetting from 'App/Scroll/Settings/Fields/RangeSetting'
import BounceSetting from 'App/Scroll/Settings/Fields/BounceSetting'


export default defineComponent({
  components: {Setting, ListGroup}, 

  props: {
    dto: {
      required: true,
      type: Object
    },

    config: {
      required: true,
      type: Object
    }
  },

  data() {
    return {
      damping: new RangeSetting(this.config as any, 'viewport.damping', 0, 1, 0.1),
      
      friction: new RangeSetting(this.config as any, 'boundaries.friction', 0, 1, 0.1),
      resistance: new RangeSetting(this.config as any, 'boundaries.resistance', 0, 30, 0.5),
      
      maxVelocity: new RangeSetting(this.config as any, 'controls.maxVelocity', 0, 3000, 100),
      spinModifier: new RangeSetting(this.config as any, 'controls.spinModifier', 0, 30, 0.5),
      releaseModifier: new RangeSetting(this.config as any, 'controls.releaseModifier', 0, 1000, 10),

      top: new BounceSetting(this.config as any, 'top'),
      left: new BounceSetting(this.config as any, 'left'),
      right: new BounceSetting(this.config as any, 'right'),
      bottom: new BounceSetting(this.config as any, 'bottom'),

      vertical: new AxisSetting(this.config as any, 'vertical'),
      horizontal: new AxisSetting(this.config as any, 'horizontal'),
    }
  }
});
</script>