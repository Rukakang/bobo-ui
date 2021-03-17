<template>
  <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}"><span></span></button>
</template>

<script lang="ts">

export default {
  props:{
    value:Boolean
  },
  setup(props,context){

    const toggle = () =>{
      context.emit('update:value',!props.value)
    }

    return {toggle};
  }
}
</script>

<style lang="scss" scoped>
  $h:22px;
  $h2:$h - 4px;
  .gulu-switch{
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
    &.gulu-checked{
      background: #1890ff;
    }
    &.gulu-checked >span{
      left: calc(100% - #{$h2} - 2px);
    }
    &:focus{
      outline: none;
    }
    &:active{
      > span {width: $h2 + 4px;}
    }
    &.gulu-checked:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }

  span{
    width: $h2;
    height: $h2;
    border-radius: $h2/2;
    background: white;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all 250ms;
  }

</style>