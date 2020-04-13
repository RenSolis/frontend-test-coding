<template>
  <div class="album">
    <AlbumTemplate
      :songs="songs"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import AlbumTemplate from '../templates/AlbumTemplate.vue';

export default {
  name: 'Album',
  components: {
    AlbumTemplate,
  },
  computed: {
    ...mapState({
      songs: 'songs',
    }),
  },
  methods: {
    ...mapActions({
      getTopSongsAction: 'getTopSongsAction',
    }),
  },
  created() { this.getTopSongsAction(); },
};
</script>
