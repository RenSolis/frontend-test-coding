<template>
  <div class="album">
    <AlbumTemplate
      :songs="songs"
      :album="albumSearched"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import AlbumTemplate from '../templates/AlbumTemplate.vue';

export default {
  name: 'Album',
  props: ['artist', 'album'],
  components: {
    AlbumTemplate,
  },
  computed: {
    ...mapState({
      albumSearched: 'album',
      songs: 'songs',
    }),
  },
  methods: {
    ...mapActions({
      getAlbumAction: 'getAlbumAction',
    }),
  },
  async created() {
    await this.getAlbumAction({ artist: this.artist, album: this.album });
  },
};
</script>
