<template lang="pug">
div
  <header-cite/>
  h2 Имя пользователя
  p Почта
  <router-link to="edit"> Редактировать профиль</router-link>
</template>

<script>
import HeaderCite from '@/components/HeaderSite.vue'

export default {
  components: {
    HeaderCite
  }
}
</script>