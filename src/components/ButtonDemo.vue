<template>

  <h2>示例1</h2>
  <div>
    <Button  >默认按钮</Button>
    <Button theme="button" >普通按钮</Button>
    <Button theme="link" >链接按钮</Button>
    <Button theme="text" >文字按钮</Button>
  </div>

  <h2>示例2</h2>
  <div>
    <div>
      <Button size="big">大普通按钮</Button>
      <Button>中普通按钮</Button>
      <Button size="small">小普通按钮</Button>
    </div>
    <div>
      <Button theme="link" size="big">大链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button size="small" theme="link">小链接按钮</Button>
    </div>
    <div>
      <Button size="big" theme="text">大文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button size="small" theme="text">小文字按钮</Button>
    </div>
  </div>

  <h2>示例3</h2>
  <div>
    <div>
      <Button level="main">主要普通按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险普通按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>

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