<template>
  <div class="search">
    <SearchTemplate
      :songs="songs"
      :artists="artists"
      :albums="albums"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import SearchTemplate from '../templates/SearchTemplate.vue';

export default {
  name: 'Search',
  props: ['word'],
  components: {
    SearchTemplate,
  },
  computed: {
    ...mapState(['songs', 'artists', 'albums']),
  },
  methods: {
    ...mapActions({
      getSongs: 'getSongsSearched',
      getArtists: 'getArtistsSearched',
      getAlbums: 'getAlbumsSearched',
    }),
  },
  async created() {
    await this.getSongs(this.word);
    await this.getArtists(this.word);
    await this.getAlbums(this.word);
    console.log('songs', this.songs);
    console.log('artists', this.artists);
    console.log('albums', this.albums);
  },
};
</script>
