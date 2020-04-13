<template>
  <div>
    <TitleContainer
      title="Canciones"
    />
    <div class="song-container">
      <SongCard
        v-for="(song, index) in songs"
        :key="index"
        :object="song"
        type="song"
        :searched="true"
      />
    </div>

    <TitleContainer
      title="Artistas"
    />
    <div class="song-container">
      <SongCard
        v-for="(artist, index) in artists"
        :key="index"
        :object="artist"
        type="artist"
        :searched="true"
      />
    </div>

    <TitleContainer
      title="Álbumes"
    />
    <div class="song-container">
      <SongCard
        v-for="(album, index) in albums"
        :key="index"
        :object="album"
        type="album"
        :searched="true"
      />
    </div>
  </div>
</template>

<script>
import TitleContainer from '../molecules/TitleContainer.vue';
import SongCard from '../molecules/SongCard.vue';

export default {
  name: 'ResultsSection',
  props: ['songs', 'artists', 'albums'],
  components: {
    TitleContainer,
    SongCard,
  },
};
</script>
