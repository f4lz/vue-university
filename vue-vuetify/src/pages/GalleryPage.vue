<template lang="pug">
div
  div(class="container elements") 
    h2(class="mb-3 text") Галерея
    v-sheet(v-for="fetchElement in fetchElements" class="elements__inner")
        img(:src="(`/images/${fetchElement.preview_image}`)")
</template>

<script>

  
export default {

  props: {
    isAuth: {
      type: Boolean,
      default: false
    }
  },
    data: () => ({
        fetchElements:[]
    }),

    async created() {
        try {
            await fetch('/api/articles.json')
                .then(response => response.json())
                .then(data => this.fetchElements = data);
            
        } catch(e) {
            console.log(e)
        }
    },
}
</script>

<style scoped>

.text {
  font-size: 2.5rem;
}

.elements {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>