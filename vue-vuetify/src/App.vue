<template lang="pug">
div(class="back")  
  <v-app>
    <header-site :auth="this.$root.authentificator" @logout="logoutOfProfile"/>
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
  
  methods: {
    logoutOfProfile: function() {
      localStorage.removeItem('auth')
      this.$root.authentificator = false
      this.$root.email = null
      this.$root.login = null
      this.$root.password = null
      
    }
  }

};
</script>

