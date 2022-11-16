<template lang="pug">
div(class="back")  
  <v-app>
  <v-container style="margin-top: 100px">
    <router-view></router-view>
  </v-container>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>