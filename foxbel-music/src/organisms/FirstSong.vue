<template>
  <div class="first-song">
    <FirstSongLeft
      v-if="song && song.image"
      :song="song"
    />
    <FirstSongRight
      v-if="song"
      :song="song"
    />
  </div>
</template>

<script>
import FirstSongLeft from '../molecules/FirstSongLeft.vue';
import FirstSongRight from '../molecules/FirstSongRight.vue';

export default {
  name: 'FirstSong',
  components: {
    FirstSongLeft,
    FirstSongRight,
  },
  computed: {
    song() {
      return this.$store.getters.getFirstSong;
    },
  },
};
</script>

<style lang="sass" scoped>
.first-song
  display: flex
  justify-content: center
  margin-top: 40px
</style>
