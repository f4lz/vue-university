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
      component: MainPage
    },
    {
      path: '/pages',
      name: 'pages',
      component: AllPages,
    },
    {
      path: '/pages/:id',
      component: SelectedPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditProfilePage
    },
    {
      path: '*',
      component: ErrorHandler
    }
]
});