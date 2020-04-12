<template>
  <div class="home-template columns">
    <Sidebar />
    <div class="container">
      <Navbar />
      <SongsSection
        :songs="songs"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '../organisms/Navbar.vue';
import Sidebar from '../organisms/Sidebar.vue';
import SongsSection from '../organisms/SongsSection.vue';

export default {
  name: 'HomeTemplate',
  props: {
    songs: Array,
  },
  components: {
    Sidebar,
    Navbar,
    SongsSection,
  },
};
</script>

<style lang="sass" scoped>
.container
  padding: 30px 56px
  width: 100%
  height: 100%
</style>
