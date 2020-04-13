<template>
  <div class="home-template columns">
    <Sidebar />
    <div class="container">
      <Navbar />
      <FirstSong />
      <SongsSection
        :songs="songs"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '../organisms/Navbar.vue';
import Sidebar from '../organisms/Sidebar.vue';
import FirstSong from '../organisms/FirstSong.vue';
import SongsSection from '../organisms/SongsSection.vue';

export default {
  name: 'HomeTemplate',
  props: ['songs'],
  components: {
    Sidebar,
    Navbar,
    FirstSong,
    SongsSection,
  },
};
</script>
