<template>
  <div>我是Button 文档</div>
  <div>示例</div>
  <Button @click="onClick"
          @focus="onClick"
          @mouseover="onClick"
          size="small"
          >你好
    <Button>

</template>

<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  components:{Button},
  setup(){
    const onClick =()=>{
      console.log('hi');
    }
    return{onClick};
  }
}

</script>