<template lang="pug">
div(class="back")  
  <v-app>
    <header-site :auth="this.$root.authentificator"/>
  <v-container style="margin-top: 100px">
    <router-view></router-view>
  </v-container>
  </v-app>
</template>

<script>

import HeaderSite from './components/HeaderSite.vue';

export default {
  name: 'App',
  components: {
    HeaderSite
  },

  data: () => ({

  }),

};
</script>

<style scoped>

</style>