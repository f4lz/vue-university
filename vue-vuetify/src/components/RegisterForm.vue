<template>
<div>
  <header-cite/>
  <v-container fluid fill-height>
    <v-layout justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
              <v-toolbar dark color="pink lighten-3">
                <v-toolbar-title>Регистрация</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                      prepend-icon="person"
                      name="login"
                      label="Login"
                      type="text"
                      v-model="login"
                    ></v-text-field>
                    <v-text-field
                      id="email"
                      prepend-icon="email"
                      name="email"
                      label="Email"
                      type="email"
                      v-model="email"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="password"
                    ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="pink lighten-3" dark  @click="regForm()">Зарегистрироваться</v-btn>
              </v-card-actions>
          </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
  

<script>
import HeaderCite from '@/components/HeaderSite.vue'
export default {
  components: {
    HeaderCite
  },
  data: () => ({
    login: '',
    email: '',
    password: ''
  }),
  methods: {
    regForm() {
      const person = {
        login: this.login,
        email: this.email,
        password: this.password
      }
      const personFormated = JSON.stringify(person)
      localStorage.setItem(`${this.login}`, personFormated)
      this.$router.push({name: 'login'})
    },
    jopa() {
      console.log('daadada');
    }
  }

}
</script>

  <style scoped>
  </style>