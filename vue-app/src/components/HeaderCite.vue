<template lang="pug">
div(class="wrapper")
    header(class="header container") 
        div(class="header__logo logo" @click="$router.push({name: 'home'})")
            img(src="../assets/images/logo.jpg" width="50px" height="50px" class="logo__image")
            a(class="logo__link")
        nav(class="header__nav nav") 
            ul(class="nav__list")
                li(v-for="navItem in nav" class="nav__list-item")
                    a(:href="navItem.link" class="nav__list-link" @click="$router.push({name: `${navItem.link}`})") {{ navItem.name }}
</template>

<script>
export default {
    data: () => ({
       nav: [
        {
            name: 'Главная',
            link:'/'
        },
        {
            name:'Страница новостей',   
            link:'main'
        }
       ]
        
    }),
}
</script>

<style lang="scss" scoped>

img {
    border-radius: 50%;
}

a {
    cursor: pointer;
}

.wrapper {
    padding: 10px 0;
    background-color: rgb(36, 38, 49);
}

.header {
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:rgb(235, 235, 238);
    
    &__logo {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: white;
    }
  
}

.nav__list {
    display:flex;
    gap: 20px;
    align-items: center;

    &-item {
        text-decoration: none;
        list-style: none;
    }

    &-link {
        color: white;
        text-decoration: none;
        text-transform: upperCase;
    }
}

</style>