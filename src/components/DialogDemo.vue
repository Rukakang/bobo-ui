<template>
  <h1>Dialog示例</h1>
  <Demo :component="Dialog1Demo"></Demo>
  <Demo :component="Dialog2Demo"></Demo>

  <div>
    <span>上一节：</span>
    <router-link class = "gulu-go" to="/doc/button">Button组件</router-link>
  </div>

  <div>
    <span>下一节：</span>
    <router-link class = "gulu-go" to="/doc/tabs">Tabs组件</router-link>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
export default {
  components:{
    Demo
  },
  setup(){
    return{
      Dialog1Demo,
      Dialog2Demo
    }
  },

}
</script>