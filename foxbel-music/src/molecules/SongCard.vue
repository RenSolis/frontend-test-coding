<template>
  <div>
    <div class="card-background" :style="{ backgroundImage: backgroundCard }">
      <OptionsButton />
      <PlayButton />
    </div>

    <TitleSong>
      {{ song.name }}
    </TitleSong>
    <ArtistName>
      {{ artist.name }}
    </ArtistName>
  </div>
</template>

<script>
import OptionsButton from '../atoms/OptionsButton.vue';
import PlayButton from '../atoms/PlayButton.vue';
import TitleSong from '../atoms/TitleSong.vue';
import ArtistName from '../atoms/ArtistName.vue';

export default {
  name: 'SongCard',
  props: ['song'],
  components: {
    OptionsButton,
    PlayButton,
    TitleSong,
    ArtistName,
  },
  computed: {
    backgroundCard() {
      return `url(${this.song.image[0]['#text']})`;
    },
    artist() {
      return this.song.artist;
    },
  },
};
</script>

<style lang="sass" scoped>
.card-background
  background-position: center
  background-size: cover
  width: 160px
  height: 160px
  position: relative
</style>
