<template>
  <div>
    <TitleContainer
      title="Álbums"
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
  name: 'AlbumSection',
  props: ['songs'],
  components: {
    TitleContainer,
    SongCard,
  },
};
</script>
