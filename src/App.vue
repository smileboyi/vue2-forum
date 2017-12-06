<template>
  <div id="app">
    <appBar />

    <resetPage />

    <router-view/>
    <bottom-nav />
  </div>
</template>

<script>
import appBar from './components/appBar'
import resetPage from './components/resetPage'
import bottomNav from './components/bottomNav'



export default {
  name: 'app',
  components:{
    appBar,
    resetPage,
    bottomNav
  }
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
