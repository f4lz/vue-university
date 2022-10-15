<template lang="pug">
div
  <header-cite/>
  div(class="elements__wrapper container")
    div(class="elements" v-if="obj")
      div(class="elements__info")
        h2 {{ obj.name }}
        p {{ obj.date }}
        img(:src="require(`../assets/images/${obj.preview_image}`)")
        a(class="elements__back" @click="$router.push({name:'main'})") ← Вернуться к страницам
      p(class="elements__descr") {{ obj.desc }}
          
</template>

<script>

import HeaderCite from './HeaderCite.vue';

export default {
    components: {
        HeaderCite
    },
    data: () => ({
      fetchElements: [],
      obj: null,
    }), 

    async mounted() {
        try {
            await fetch('/api/articles.json')
                .then(response => response.json())
                .then(data => this.fetchElements = data);
                this.obj = this.fetchElements.filter(objInfo => objInfo.id == this.$route.params.id)
                this.obj = this.obj[0]
        } catch(e) {
            console.log(e)
        }
    },

}
</script>

<style lang="scss" scoped>

a {
  transition:0.4s;

}

a:hover {
  transform: scale(1.2);
  transition:0.4s;
}

h2 {
  font-size: 2em;
}
.elements__wrapper {
  margin-top: 30px;
  padding:  0 20px;
  text-align: left;
  display:flex;
  background-color: rgb(235, 235, 230)
}
.elements {
  display:flex;
  justify-content:center;
  align-items:center;
  gap:20px;
  
  &__info {
    position: relative;

  }

  &__back {
    max-height: 100%;
    max-width: 100%;
    display: inline;
    vertical-align:center;
    margin-top: 15px;
    left: 0%;
    top: 100%;
    cursor: pointer;
    position: absolute;
  }

  &__descr{
    font-size: 1.3em;
  }
}
</style>