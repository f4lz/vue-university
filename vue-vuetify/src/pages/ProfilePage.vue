<template lang="pug">
div
  h2 {{ $root.login }}
  p {{ $root.email }}
  <router-link :to="{name: 'edit'}"> Редактировать профиль</router-link>
</template>

<script>

export default {

}
</script>