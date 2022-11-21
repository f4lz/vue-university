<template lang="pug">
div(class="text-center")
  h1(class="text-uppercase") Рады видеть вас на нашем сайте
  a(@click="$router.push({name:'pages'})") Посмотреть все новости
  div(class="slider__wrapper")
    div(v-for="(fetchElement, index) in fetchElements" :key="fetchElement.id" @click="$router.push({path:`/pages/${fetchElement.id}`})")
      img(:src="(`/images/${fetchElement.full_image}`)" :class="{ 'hidden': index != i}")
      h2(:class="{ 'hidden': index != i}") {{ fetchElement.name }}
  v-sheet(class='d-flex justify-center align-center container')
    v-icon(class="mx-2" @click="decrement") arrow_back_ios
    v-icon(class="mx-2" @click="increment") arrow_forward_ios
</template>

<script>

export default {

  data: () => ({
    fetchElements:[],
    i: 0,
  }),
  async created() {
    try {
      await fetch('/api/articles.json')
        .then(response => response.json())
        .then(data => this.fetchElements = data);
        this.fetchElements = this.fetchElements.filter(element => element.slider);
    } catch(e) {
        console.log(e)
    }
  },
  methods: {
    decrement() {
      if (this.i <= 0) {
        this.i = this.fetchElements.length;
      }
      this.i--;

    },
    increment() {
      if (this.i == this.fetchElements.length - 1) {
        this.i = 0;
      } else {
        this.i++;
      }

    }
  }
}

</script>

<style lang="css" scoped>
  a:hover {
    text-decoration: underline;
  }

  .container {
    max-width: 400px;
  }

  .hidden {
    display:none;
  }
  .slider__wrapper {
    margin-top: 30px;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
</style>