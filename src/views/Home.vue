<template>
  <div>
    <div class="topnav">
      <div class ="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>啵啵UI</h1>
      <P>一个普通的UI框架</P>
      <P class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </P>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .topnav{
    background: pink;
    display: flex;
    >.logo{
      max-width: 6em;
      margin-right: auto;
    }
    >.menu{
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li{
        margin: 0 1em;
      }
    }
  }
</style>