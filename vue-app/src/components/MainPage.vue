<template lang="pug">
div(class="content")
  <header-cite/>
    div(class="container content__wrapper")
      h1 Добро пожаловать!
      a(class="" @click="$router.push({name: 'main'})") Страница новостей

</template>


<script>

import HeaderCite from '../components/HeaderCite.vue';


export default {
  components: {
    HeaderCite
  }
}
</script>

<style lang="scss" scoped>
a {
  font-size: 1.2em;
  cursor: pointer;
  transition:0.4s;

}

a:hover {
  transform: scale(1.2);
  transition:0.4s;
  cursor: pointer;
}
.content {
  min-height: 100vh;

  &__wrapper {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top: 100px;
}

h1 {
  font-size: 3em;
}

}


</style>>