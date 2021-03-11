<template>
  <button><span></span></button>
</template>

<style lang="scss" scoped>
  $h:22px;
  $h2:$h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: blue;
    border-radius: $h/2;
    position: relative;
  }
  span{
    width: $h2;
    height: $h2;
    border-radius: $h2/2;
    background: white;
    position: absolute;
    top: 2px;
    left: 2px;
  }
  button:hover >span{
    left: calc(100% - #{$h2} - 2px);
  }
</style>