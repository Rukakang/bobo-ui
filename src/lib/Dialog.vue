<template>
  <div class="gulu-dialog-overlay"></div>
  <div class="gulu-dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行内容</p>
      <p>第二行内容</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>
<script>
import Button from "./Button";
export default {
  components: {Button}
}
</script>