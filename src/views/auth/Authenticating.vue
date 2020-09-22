<template>
  <div>Authenticating...</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'login'
    ])
  },
  mounted: function () {
    const authCode = this.$route.query.code;
    this.login({ authCode });
  }
};
</script>
