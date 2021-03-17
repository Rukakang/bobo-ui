<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>啵啵UI</h1>
        <h2>一个普通的UI框架</h2>
        <div class="actions">
          <a href="https://github.com/">GitHub</a>
          <router-link to ="/doc">开始</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="features">
    <svg class="icon" >
      <use xlink:href="#icon-Vue"></use>
    </svg>
    <svg class="icon" >
      <use xlink:href="#icon-typescript"></use>
    </svg>
    <svg class="icon" >
      <use xlink:href="#icon-light"></use>
    </svg>
  </div>

</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {Topnav}
}
</script>

<style lang="scss" scoped>
.topnavAndBanner{
  background: linear-gradient(149deg, rgba(140,159,207,1) 0%, rgba(29,34,67,1) 100%);
}
.features{
  > svg{
    width: 64px;
    height: 64px;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #082745;
  > .actions{
    padding: 8px 0;
    a {
      &:first-child{
        background: linear-gradient(149deg, rgba(255,69,124,1) 0%, rgba(255,117,90,1) 100%);
      }
      &:nth-child(2){
        background: linear-gradient(149deg, rgba(0,127,228,1) 0%, rgba(0,179,237,1) 100%);
    }
      margin:0 8px;
      color: white;
      display: inline-block;
      border-radius: 4px;
      padding: 8px 24px;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>

