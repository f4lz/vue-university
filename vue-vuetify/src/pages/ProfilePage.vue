<template lang="pug">
div
  h2 Имя пользователя
  p Почта
  <router-link :to="{name: 'edit'}"> Редактировать профиль</router-link>
</template>

<script>

export default {

  props: {
    isAuth: {
      type: Boolean,
      default: false
    }
  },
}
</script>