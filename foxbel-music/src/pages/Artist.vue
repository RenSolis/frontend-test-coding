<template>
  <div class="album">
    <ArtistTemplate
      :artist="artistSearched"
      :songs="songs"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import ArtistTemplate from '../templates/ArtistTemplate.vue';

export default {
  name: 'Artist',
  props: ['artist'],
  components: {
    ArtistTemplate,
  },
  computed: {
    ...mapState({
      artistSearched: 'artist',
      songs: 'songs',
    }),
  },
  methods: {
    ...mapActions(['getArtistAlbums']),
  },
  async created() {
    await this.getArtistAlbums(this.artist);
  },
};
</script>
