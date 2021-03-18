<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo"></Demo>
    <Demo :component="Switch2Demo"></Demo>
    <div>
      <span>上一节：</span>
      <router-link class = "gulu-go" to="/doc/get-started">开始使用</router-link>
    </div>

    <div>
      <span>下一节：</span>
      <router-link class = "gulu-go" to="/doc/button">Button组件</router-link>
    </div>

  </div>

</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue';

import Demo from "./Demo.vue";
export default {
  components:{Demo},
  setup(){
    return {Switch1Demo,Switch2Demo}
  }
}

</script>

