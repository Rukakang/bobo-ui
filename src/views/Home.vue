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
    <ul>
      <li>
        <svg class="icon" >
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue3</h3>
        <p>使用了 Vue3 Composition API</p>
      </li>
      <li>
        <svg class="icon" >
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码使用TypeScript书写（非严格检查）</p>

      </li>
      <li>
        <svg class="icon" >
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都很简洁</p>
      </li>
    </ul>
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
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features{
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }

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

