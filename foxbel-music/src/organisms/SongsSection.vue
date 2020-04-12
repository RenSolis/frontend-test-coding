<template>
  <div>
    <TitleContainer
      title="Recientes"
    />

    <div class="song-container">
      <SongCard
        v-for="(song, index) in songs"
        :key="index"
        :song="song"
      />
    </div>
  </div>
</template>

<script>
import TitleContainer from '../molecules/TitleContainer.vue';
import SongCard from '../molecules/SongCard.vue';

export default {
  name: 'SongsSection',
  props: ['songs'],
  components: {
    TitleContainer,
    SongCard,
  },
};
</script>

<style lang="sass" scoped>
.song-container
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))
  grid-column-gap: 22px
  grid-row-gap: 25px
</style>
