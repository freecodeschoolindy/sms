<template>
  <div>
    <h1>Login Page</h1>
    <label>
      E-mail:
      <input v-model="email" type="email" />
    </label>
    <label>
      Password:
      <input v-model="password" type="password" />
    </label>
    <button @click="logUserIn">
      Login
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: function () {
    return {
      email: 'gwen@example.com',
      password: 'hellomotto'
    };
  },
  methods: {
    ...mapActions(['login']),
    logUserIn: function () {
      const payload = {
        username: this.email,
        password: this.password
      };
      this.login(payload);
    }
  },
  computed: {
    ...mapState([
      'currentUser',
      'loggedInUser'
    ])
  }
};
</script>
