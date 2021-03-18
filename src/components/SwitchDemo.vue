<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo"></Demo>
    <Demo :component="Switch2Demo"></Demo>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue';
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const Prism = (window as any).Prism;
import Demo from "./Demo.vue";
export default {
  components:{Demo, Button},
  setup(){
    return {Switch1Demo,Switch2Demo,Prism}
  }
}

</script>

