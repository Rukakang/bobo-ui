<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class = "gulu-tabs-nav-item" v-for="(t,index) in titles" :key="t" @click="select(t)" :ref="el=>{if(el) navItems[index]=el}" :class="{selected:t===selected}">{{t}}</div>
      <div class="gulu-tabs-nav-indicator " ref="indicator"></div>
    </div>

    <div class="gulu-tabs-content">
      <component class = "gulu-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>

  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {computed,ref,onMounted,onUpdated} from 'vue';

export default {
  props:{
    selected:{
      type:String
    }
  },
  setup(props,context){
    const defaults = context.slots.default();
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(()=>{
      const result = navItems.value.filter(div=>div.classList.contains('selected'))[0];
      const {width} = result.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left:left1} = container.value.getBoundingClientRect();
      const {left:left2} = result.getBoundingClientRect();
      indicator.value.style.left = (left2-left1) +'px';
    })
    onUpdated(()=>{
      const result = navItems.value.filter(div=>div.classList.contains('selected'))[0];
      const {width} = result.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left:left1} = container.value.getBoundingClientRect();
      const {left:left2} = result.getBoundingClientRect();
      indicator.value.style.left = (left2-left1) +'px';
    })

    defaults.forEach((tag)=>{
      if (tag.type !== Tab){
        throw new Error('Tabs子标签必须是Tab');
      }
    });
    const titles = defaults.map((tag)=>{
      return tag.props.title;
    })
    const current = computed(()=>{
      return defaults.filter((tag)=>{
        return tag.props.title === props.selected;
      })[0]
    })
    const select = (title:string)=>{
      context.emit('update:selected',title)
    }
    return {defaults,titles,current,select,navItems,indicator,container};
  }

}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator{
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>