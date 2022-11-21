<template lang="pug">
div
  div(class="elements")
    v-sheet(class="elements__inner" v-if="obj")
      h2 {{ obj.name }}
      img(:src="(`/images/${obj.full_image}`)")
      span {{ obj.date }}
      p {{ obj.desc }}
      div(class="comments")
        h2 Оставьте ваш комментарий 
        <v-text-field label="Введите ваш комментарий" type="text" v-model="form.text"></v-text-field>
        <v-btn color="primary" x-large @click="addComment" class="comments__btn">Оставить комментарий</v-btn> 
      h3 Комментарии
      div(class="comments__wrapper")
        div(v-for="(comment, index) in comments" :key="index" class="comment__inner") 
          h3 {{ comment.name }}
          p(class="comment__line") {{ comment.text }}
</template>

<script>



export default {

  data: () => ({
      comments: [
        {
          name: 'Igor',
          text: 'comment text'
        },
        {
          name: 'Vika',
          text: 'comment text'
        }
      ],
      form: {
        name: '',
        text: ''
      },
      fetchElements:[],
      obj: null
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
    methods: {
      addComment() {
        const authing = localStorage.getItem('auth')
        if (authing) {
          console.log('dadada')
          this.comments.reverse()
          this.comments.push({
            name: this.$root.login,
            text: this.form.text
          })
          this.comments.reverse()
        }
        
      }
    }

}
</script>

<style scoped>
.comments {
  margin-top: 30px;
  margin-bottom: 20px;
  max-width: 25%;
}

.comments__wrapper {
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  border: 1px solid black;
}

.comment__inner {
  padding: 20px 0 0 20px;
}

</style>