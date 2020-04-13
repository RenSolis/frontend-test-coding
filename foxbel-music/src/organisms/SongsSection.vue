<template>
  <div>
    <TitleContainer
      title="Recientes"
    />

    <div class="song-container">
      <SongCard
        v-for="(song, index) in songs"
        :key="index"
        :object="song"
        type="song"
        :searched="false"
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
