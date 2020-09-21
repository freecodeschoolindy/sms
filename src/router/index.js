import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store/index.js';
import helpers from '@/helpers/index.js';
const ALLOWED_GROUPS = helpers.ALLOWED_GROUPS;

import AccessDenied from '@/views/AccessDenied.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import Authenticating from '@/views/auth/Authenticating.vue';
import UserProfile from '@/views/UserProfile.vue';
import About from '@/views/About.vue';
import UsersList from '@/views/UsersList.vue';
import UserDetails from '@/views/UserDetails.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDenied,
    meta: {
      groups: [
        ...ALLOWED_GROUPS,
        'unassigned'
      ]
    }
  },

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      groups: [
        ...ALLOWED_GROUPS,
        'unassigned'
      ]
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      groups: [
        ...ALLOWED_GROUPS,
        'unassigned'
      ]
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      groups: [
        ...ALLOWED_GROUPS,
        'unassigned'
      ]
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: UserProfile,
    meta: {
      groups: [
        ...ALLOWED_GROUPS,
        'unassigned'
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      groups: [
        ...ALLOWED_GROUPS,
        'unassigned'
      ]
    }
  },
  {
    path: '/users',
    name: 'UsersList',
    component: UsersList,
    meta: {
      groups: ALLOWED_GROUPS
    }
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetails,
    meta: {
      groups: ALLOWED_GROUPS
    },
    props: true
  },
  {
    path: '/auth/callback',
    name: 'Authenticating',
    component: Authenticating
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
