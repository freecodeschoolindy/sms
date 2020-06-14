<template>
  <div id="app">
    <div id="nav">
      <template v-for="(link, linkIndex) in links">
        <router-link
          v-text="link.title"
          :to="link.path"
          :key="'link' + linkIndex"
        />
        <span
          v-if="linkIndex < links.length - 1"
          v-text="' | '"
          :key="'|' + linkIndex"
        ></span>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      links: [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'About',
          path: '/about'
        }
      ]
    };
  }
};
</script>
