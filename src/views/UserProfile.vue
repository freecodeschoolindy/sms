<template>
  <div>
    <h1>{{ currentUser.email }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
