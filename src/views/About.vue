<template>
  <div class="about">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: function () {
    return {
      message: 'This is an about page'
    };
  }
};
</script>
