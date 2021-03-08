<template>
  <div>导航栏|
    <router-link to="/">BOBO</router-link>|
    <router-link to="/xxx">BOBO2</router-link></div>
  <hr />
  <router-view />
</template>

<script>

export default {
  name: 'App',

}
</script>
