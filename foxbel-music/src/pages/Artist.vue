<template>
  <div class="album">
    <ArtistTemplate
      :artist="artistSearched"
      :albums="albums"
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
      albums: 'albums',
    }),
  },
  methods: {
    ...mapActions(['getArtistAlbums', 'getArtistAction']),
  },
  async created() {
    await this.getArtistAction(this.artist);
    await this.getArtistAlbums(this.artist);
  },
};
</script>
