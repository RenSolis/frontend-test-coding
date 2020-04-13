<template>
  <div class="album-template columns">
    <Sidebar />
    <div class="container">
      <Navbar />
      <AlbumSection
        :songs="songs"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '../organisms/Navbar.vue';
import Sidebar from '../organisms/Sidebar.vue';
import AlbumSection from '../organisms/AlbumSection.vue';

export default {
  name: 'AlbumTemplate',
  props: {
    songs: Array,
  },
  components: {
    Navbar,
    Sidebar,
    AlbumSection,
  },
};
</script>
