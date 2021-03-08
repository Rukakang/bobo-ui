<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Bobo/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Bobo from './components/Bobo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Bobo
  }
}
</script>
