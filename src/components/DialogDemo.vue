<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible = "x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>自定义的加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>自定义内容ddddddddddasd安抚打发打发打发打发打发发啊手动阀打发打发撒大大</strong>
      <div>也是自定义内容撒旦发射点法发达到法定发发大打发发发</div>
    </template>
  </Dialog>

  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>

</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from "../lib/Button.vue";
import {openDialog} from "../lib/openDialog.ts";
import {ref,h} from 'vue';
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
    const showDialog = () =>{
      openDialog({
        title:h('strong',{},'标题'),
        content:'showDialog自定义内容',
        ok(){
          console.log('show点ok');
        },
        cancel(){
          console.log('show点取消');
        },
        closeOnClickOverlay:true

      })

    }
    return{
      x,
      toggle,
      f1,
      f2,
      showDialog
    }
  },

}
</script>