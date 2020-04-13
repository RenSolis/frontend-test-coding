<template>
  <div class="album">
    <ArtistTemplate
      :songs="songs"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import ArtistTemplate from '../templates/ArtistTemplate.vue';

export default {
  name: 'Album',
  components: {
    ArtistTemplate,
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
