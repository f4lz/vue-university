import VueRouter from 'vue-router';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';

import MainPage from '@/pages/MainPage';
import AllPages from '@/pages/AllPages';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import ErrorHandler from '../components/ErrorHandler';
import GalleryPage from '@/pages/GalleryPage';
import SelectedPage from '@/pages/SelectedPage';
import ProfilePage from '@/pages/ProfilePage';
import EditProfilePage from '@/pages/EditProfilePage';

export default new VueRouter ({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
      props: true,
    },
    {
      path: '/pages',
      name: 'pages',
      props: true,
      component: AllPages,
     
    },
    {
      path: '/pages/:id',
      props: true,
      component: SelectedPage,

    },
    {
      path: '/register',
      name: 'register',
      props: true,
      component: RegisterForm
    },
    {
      path: '/login',
      name: 'login',
      props: true,
      component: LoginForm
    },
    {
      path: '/gallery',
      name: 'gallery',
      props: true,
      component: GalleryPage
    },
    {
      path: '/profile',
      name: 'profile',
      props: true,
      component: ProfilePage,
    },
    {
      path: '/edit',
      name: 'edit',
      props: true,
      component: EditProfilePage,
      // beforeEnter: (to, from, next) => {
      //   if (localStorage.getItem('auth')) {
      //     next();
      //   } else {
      //     next({name: 'home'})
      //   }
      // }
    },
    {
      path: '*',
      component: ErrorHandler
    }
]
});