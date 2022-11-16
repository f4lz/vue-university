<template lang="pug">
div
  <header-cite/>
  div(class="elements")
    v-sheet(class="elements__inner" v-if="obj")
      h2 {{ obj.name }}
      img(:src="(`/images/${obj.full_image}`)")
      span {{ obj.date }}
      p {{ obj.desc }}
      div(class="comments")
        h2 Оставьте ваш комментарий 
        <v-text-field label="Ваше имя" type="text" v-model="form.name"></v-text-field>
        <v-text-field label="Введите ваш комментарий" type="text" v-model="form.text"></v-text-field>
        <v-btn color="primary" x-large @click="addComment" class="comments__btn">Оставить комментарий</v-btn> 
      h3 Комментарии
      div(class="comments__wrapper")
        div(v-for="(comment, index) in comments" :key="index" class="comment__inner") 
          h3 {{ comment.name }}
          p(class="comment__line") {{ comment.text }}
</template>

<script>

import HeaderCite from '@/components/HeaderSite.vue'


export default {
  components: {
    HeaderCite
  },

  data: () => ({
      comments: [
        {
          name: 'Igor',
          text: 'super'
        },
        {
          name: 'Vika',
          text: 'ura'
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
        this.comments.push({
          name: this.form.name,
          text: this.form.text
        })
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

.comment__line {
  border-bottom: 1px solid black;
}

</style>