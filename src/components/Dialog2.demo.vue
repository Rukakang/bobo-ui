<demo>
一键打开 Dialog
</demo>

<template>
  <Button @click="showDialog">打开对话框</Button>
</template>
<script>

import Button from "../lib/Button.vue";
import {openDialog} from "../lib/openDialog.ts";
import {h} from 'vue';
export default {
  components:{
    Button
  },
  setup(){
    const showDialog = () =>{
      openDialog({
        title:h('strong',{},'自定义标题'),
        content:'自定义内容',
        ok(){
          console.log('点ok');
        },
        cancel(){
          console.log('点取消');
        },
        closeOnClickOverlay:true
      })
    }
    return{
      showDialog
    }
  },

}
</script>