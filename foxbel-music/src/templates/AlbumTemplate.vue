<template>
  <div class="artist-template columns">
    <Sidebar />
    <div class="container">
      <Navbar />
      <PageDetail
        v-if="album"
        :object="album"
        :songs="songs"
        type="album"
      />
      <AlbumSection
        :songs="songs"
        :album="album"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '../organisms/Navbar.vue';
import Sidebar from '../organisms/Sidebar.vue';
import AlbumSection from '../organisms/AlbumSection.vue';
import PageDetail from '../organisms/PageDetail.vue';

export default {
  name: 'AlbumTemplate',
  props: {
    songs: Array,
    album: Object,
  },
  components: {
    Navbar,
    Sidebar,
    PageDetail,
    AlbumSection,
  },
};
</script>
