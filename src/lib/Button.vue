<template>
  <!-- 父元素传过来的所有属性默认绑定到根元素上，可以不继承，并且拆分属性只绑定部分属性 -->
  <div :size = "size">
    <!-- <button v-bind="$attrs"> 把父元素传过来的所有属性绑定到button上 -->
    <button v-bind="rest"> <!-- 只绑定除size外的剩余属性 -->
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs:false,//模板根元素不继承父元素传过来的事件
  setup(props,context){
    const{onClick,onMouseOver,size,...rest}=context.attrs;//拿到父元素传的属性解构赋值
    return{onClick,onMouseOver,size,rest};

  }
}

</script>

<style lang="scss" scoped>

</style>