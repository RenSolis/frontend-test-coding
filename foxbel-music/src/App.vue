<template>
  <div id="app">
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './templates/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap')

*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: Quicksand, sans-serif
  font-style: normal
  font-weight: normal
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
