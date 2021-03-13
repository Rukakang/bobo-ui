<template>
    <button class="gulu-button" :class="{[`theme-${theme}`]:theme}"> <!-- 根元素默认就绑定了父元素传过来的所有属性 -->
      <slot/>
    </button>
</template>

<script lang="ts">
export default {
    props:{
      theme:{
        type:String,
        default:'button'
      }
    }
}

</script>

<style lang="scss" scoped>

</style>