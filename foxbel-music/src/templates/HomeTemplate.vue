<template>
  <div class="home-template columns">
    <Sidebar />
    <div class="container">
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from '../organisms/Navbar.vue';
import Sidebar from '../organisms/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style lang="sass" scoped>
.container
  padding: 30px 56px
  width: 100%
  height: 100%
</style>
