<template>
  <div>
    <TitleContainer
      title="Álbums"
      textColor="#662323"
    />

    <div class="song-container">
      <SongCard
        v-for="(album, index) in albums"
        :key="index"
        :object="album"
        type="album"
        :searched="false"
      />
    </div>
  </div>
</template>

<script>
import TitleContainer from '../molecules/TitleContainer.vue';
import SongCard from '../molecules/SongCard.vue';

export default {
  name: 'ArtistSection',
  props: ['albums'],
  components: {
    TitleContainer,
    SongCard,
  },
};
</script>
