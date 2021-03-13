<template>
  <div>我是Button 文档</div>
  <div>示例</div>
  <Button  >你好</Button>
  <Button theme="button" >你好</Button>
  <Button theme="link" >你好</Button>
  <Button theme="text" >你好</Button>

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