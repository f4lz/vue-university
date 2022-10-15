import VueRouter from 'vue-router';

import MainPage from '@/components/MainPage';
import AllElements from '@/components/AllElements';
import SelectedPage from '@/components/SelectedPage';


export default new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/main',
            name: 'main',
            component: AllElements
        },
        {
            path: '/main/:id',
            component: SelectedPage,
            props: true,
        },
        {
            path: '*',
            redirect: {name: 'home'}
        }
    ]
  });