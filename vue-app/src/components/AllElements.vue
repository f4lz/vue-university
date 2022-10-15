<template lang="pug">
div
    <header-cite/>
    div(class="container elements") 
        div(v-for="fetchElement in fetchElements" class="elements__inner" @click="$router.push({path:`/main/${fetchElement.id}`, params:{name:fetchElement.name, desc:fetchElement.desc, date:fetchElement.date}})")
            h2 {{ fetchElement.name }}
            img(:src="require(`../assets/images/${fetchElement.full_image}`)")
</template>

<script>

import HeaderCite from './HeaderCite.vue';

export default {
    components: {
        HeaderCite
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

<style lang="scss" scoped>
.elements {
    font-size: 1.5em;
    margin-top: 30px;
    display:flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgb(235, 235, 230)
}
</style>