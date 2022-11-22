<template>
<div>
  <v-app-bar absolute class="pink lighten-3" dark>
        <v-avatar color="white" style="cursor: pointer;" @click="$router.push({name:'home'})">
            <span class="pink--text text-h5">RI</span>
        </v-avatar>
        <v-spacer></v-spacer>
        <v-btn elevation="1" rounded color="white" depressed class="mr-3" light @click="$router.push({name:'home'})">
          Главная
        </v-btn>
        <v-btn elevation="1" rounded color="white" depressed class="mr-3" light @click="$router.push({name:'pages'})">
          Страница новостей
        </v-btn>
        <v-btn elevation="1" rounded color="white" depressed class="mr-3" light @click="$router.push({name:'gallery'})">
          Галерея
        </v-btn>
        <v-btn elevation="1" rounded color="white" depressed class="normal" light >
          <span v-if="auth === false" @click="$router.push({name:'login'})">Войти</span> 
          <div v-else @click="$emit('logout')">
          <span>Выйти</span> 
          <v-icon right>mdi-logout</v-icon> 
          </div>
        </v-btn>  
        <v-btn v-if="auth === true" @click="$router.push({name:'profile'})" elevation="1" rounded color="white" depressed class="ml-3" light>
          <v-icon>person</v-icon>
        </v-btn>
        <v-btn @click="searchInformation" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-text-field v-if="isSearch" class="normaly input" dark type="text" v-model="searchText"></v-text-field>
  </v-app-bar>
      <v-sheet id="scrolling-techniques-8" class="overflow-y-auto" max-height="600">
        
      </v-sheet>
</div>
</template>

<script>
  export default {
    props: {
      auth: {
        type: Boolean,
        default: false
      },
    },
    data: () => ({
      searchText: '',
      isSearch: false
    }),
    methods: {
      searchInformation () {
        this.isSearch = !this.isSearch
        this.$root.text = this.searchText
        // this.$emit('search')
        if (this.$route.path !== '/pages') {
          this.$router.push({name: 'pages'})
        }
        
      }
    }
  }



</script>

<style>
.input {
  max-width: 10%;
}

</style>
