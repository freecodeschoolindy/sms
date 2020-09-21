<template>
  <div>
    <h1>Login Page</h1>
    <button class="button" @click="logUserIn">
      Github Login
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    logUserIn: function () {
      // Routes to GitHub login page. Once authenticated, GitHub will route back to `/auth/callback?code=1234`
      window.location.href = 'https://github.com/login/oauth/authorize?client_id=b1566423c56583f16eb0';
    }
  }
};
</script>
