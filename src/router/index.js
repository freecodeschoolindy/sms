import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store/index.js';
import helpers from '@/helpers/index.js';
const ALLOWED_GROUPS = helpers.ALLOWED_GROUPS;

import AccessDenied from '@/views/AccessDenied.vue';
import Authenticating from '@/views/auth/Authenticating.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
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
    component: Authenticating,
    meta: {
      groups: [
        ...ALLOWED_GROUPS,
        'unassigned'
      ]
    }
  }
];

export const routerConfig = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
};

const router = new VueRouter(routerConfig);

router.beforeEach(loadUser);
router.beforeEach(checkRoutePermissions);

export function loadUser (to, from, next) {
  if (!store.state.currentUser.id) {
    // TODO: Hook up to route to get user and permissions
    let currentUser = {
      firstName: 'Jane',
      lastName: 'Doe',
      preferredName: 'Janey',
      email: 'janedoe@example.com',
      groups: 'student',
      id: 20
    };

    if (!ALLOWED_GROUPS.includes(currentUser.groups)) {
      currentUser.groups = 'unassigned';
    }

    store.commit('setCurrentUser', currentUser);
  }
  next();
}

export function checkRoutePermissions (to, from, next) {
  if (!to.meta.groups.includes(store.state.currentUser.groups)) {
    store.commit('setLastURLRequested', to.path);
    next('/access-denied');
  } else {
    next();
  }
}

export default router;
