<template>
  <div id="app">
      <icon name="files-o" scale="3" class="alert"></icon>
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'app',


}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
