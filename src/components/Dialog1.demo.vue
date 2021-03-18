<demo>
常规使用
</demo>

<template>
  <Button @click="toggle">打开对话框</Button>
  <Dialog v-model:visible = "x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>自定义的加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>自定义加粗内容</strong>
      <div>自定义普通内容</div>
    </template>
  </Dialog>
</template>
<script>
import Dialog from '../lib/Dialog.vue';
import Button from "../lib/Button.vue";
import {ref} from 'vue';

export default {
  components:{
    Button,
    Dialog
  },
  setup(){
    const x =ref(false);
    const toggle=()=>{
      x.value = !x.value
    }
    const f1 = () =>{
      return '点击了ok' ;
    }
    const f2 = () => {

    }

    return{
      x,
      toggle,
      f1,
      f2
    }
  },

}
</script>