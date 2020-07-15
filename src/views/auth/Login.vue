<template>
  <div>
    <h1>Login Page</h1>
    <input v-model="email">
    <input v-model="password">
    <button @click="logUserIn">
      Login
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      email: 'gwen@example.com',
      password: 'hellomotto'
    }
  },
  computed: {
    ...mapState(['loggedInUser', 'currentUser'])
  },
  methods: {
    ...mapActions(['login']),
    logUserIn() {
      const payload = {
        username: this.email,
        password: this.password
      }
      this.login(payload)
    }
  }
}
</script>
