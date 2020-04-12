<template>
  <div class="home">
    <HomeTemplate
      :songs="songs"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import HomeTemplate from '../templates/HomeTemplate.vue';

export default {
  name: 'Home',
  components: {
    HomeTemplate,
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
