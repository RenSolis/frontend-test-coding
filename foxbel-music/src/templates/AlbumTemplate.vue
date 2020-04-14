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
      <AlbumTable
        :songs="songs"
        :album="album"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '../organisms/Navbar.vue';
import Sidebar from '../organisms/Sidebar.vue';
import AlbumTable from '../organisms/AlbumTable.vue';
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
    AlbumTable,
  },
};
</script>
