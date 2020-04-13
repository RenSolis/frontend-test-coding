<template>
  <div class="artist-template columns">
    <Sidebar />
    <div class="container">
      <Navbar />
      <PageDetail
        v-if="artist"
        :object="artist"
        :albums="albums"
        type="artist"
      />
      <ArtistSection
        :albums="albums"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '../organisms/Navbar.vue';
import Sidebar from '../organisms/Sidebar.vue';
import PageDetail from '../organisms/PageDetail.vue';
import ArtistSection from '../organisms/ArtistSection.vue';

export default {
  name: 'ArtistTemplate',
  props: {
    albums: Array,
    artist: Object,
  },
  components: {
    Navbar,
    Sidebar,
    PageDetail,
    ArtistSection,
  },
};
</script>
