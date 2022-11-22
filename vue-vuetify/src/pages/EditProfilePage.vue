<template lang="pug">
div(class="d-flex justify-space-between container redactor__wrapper")
  div
    h2 Старый пароль
    <v-text-field label="Main input" :rules="rules" hide-details="auto" v-model="currentLogin" ></v-text-field>
    h2 Новый пароль
    <v-text-field label="Another input" v-model="newLogin"></v-text-field>
    button(@click="changePassword") Редактировать имя
  div
    h2 Старый пароль
    <v-text-field label="Main input" :rules="rules" hide-details="auto"  v-model="currentLogin" ></v-text-field>
    h2 Новый логин
    <v-text-field label="Another input" v-model="newLogin"></v-text-field>
    button(@click="changeLogin") Редактировать имя
</template>

<script>

export default {
  data: () => ({
    currentLogin: '',
    currentPassword: ''
  }),
  methods: {
    changePassword () {
      
    },
    changeLogin () {
        
    }
  }
}
</script>

<style scoped>
.redactor__wrapper {
  max-width: 50%;
}
</style>
