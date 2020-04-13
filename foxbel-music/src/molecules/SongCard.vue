<template>
  <div>
    <div class="card-background" :style="{ backgroundImage: backgroundCard }">
      <OptionsButton
        :inSong="true"
      />
      <PlayButton
        :width="32"
        :height="36"
      />
    </div>

    <TitleSong>
      {{ object.name }}
    </TitleSong>
    <ArtistName>
      {{ artistName }}
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
  props: ['object', 'type'],
  components: {
    OptionsButton,
    PlayButton,
    TitleSong,
    ArtistName,
  },
  computed: {
    backgroundCard() {
      return `url(${this.object.image[2]['#text']})`;
    },
    artistName() {
      if (this.type === 'artist') return this.object.name;
      return this.object.artist;
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
