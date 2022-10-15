<template lang="pug">
div(id="app" class="app")
  //- <main-page class="app__nav"/>
  <router-view></router-view>
  //- <all-elements/>
</template>

<script>
// import MainPage from './components/MainPage.vue'
// import AllElements from './components/AllElements.vue'


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="scss">


.container {
    margin: 0 auto;
    max-width: 1440px;
}

#app {
  height:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0
}

html, body {
  margin: 0;
  height: 100%;
  padding: 0;
  background-color: rgb(235, 235, 238)
}


</style>
