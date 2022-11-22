<template lang="pug">
div
  div(class="container elements") 
      v-sheet(v-for="fetchElement in fetchElements" class="elements__inner" @click="$router.push({path:`/pages/${fetchElement.id}`})")
          h2 {{ fetchElement.name }}
          img(:src="(`/images/${fetchElement.preview_image}`)")
          p {{ fetchElement.shortDesc }}
</template>

<script>


export default {

    data: () => ({
        fetchElements:[],
    }),

    async created() {
        try {
            await fetch('/api/articles.json')
                .then(response => response.json())
                .then(data => this.fetchElements = data);
                this.fetchElements.filter(element => element.name.toLowerCase().includes(this.$root.text.toLowerCase()))
                console.log(this.fetchElements)
            
        } catch(e) {
            console.log(e)
        }
        
    },
//     computed: {
//     searchInfo() {
//       return this.fetchElements.filter(element => element.name.toLowerCase().includes(this.$root.text.toLowerCase()))
//     }
//   }

}
</script>

<style scoped>
.elements {
    font-size: 1.5em;
    margin-top: 30px;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap: 20px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}
</style>