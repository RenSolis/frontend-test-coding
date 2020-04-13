<template>
  <div class="album-template columns">
    <Sidebar />
    <div class="container">
      <Navbar />
      <ArtistSection
        :songs="songs"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '../organisms/Navbar.vue';
import Sidebar from '../organisms/Sidebar.vue';
import ArtistSection from '../organisms/ArtistSection.vue';

export default {
  name: 'AlbumTemplate',
  props: {
    songs: Array,
  },
  components: {
    Navbar,
    Sidebar,
    ArtistSection,
  },
};
</script>
