<template>
  <div class="first-image" :style="{ backgroundImage: backgroundCard }">
    <PlayButton
      :width="63"
      :height="72"
    />
  </div>
</template>

<script>
import * as axios from 'axios';
import PlayButton from '../atoms/PlayButton.vue';

export default {
  name: 'FirstSongLeft',
  props: ['song'],
  components: {
    PlayButton,
  },
  data() {
    return {
      artist: {},
    };
  },
  computed: {
    backgroundCard() {
      if (this.song === undefined) return '';
      return `url(${this.song.image[0]['#text']})`;
    },
  },
  async created() {
    const ROOT_LAST_FM = 'http://ws.audioscrobbler.com/2.0/';
    const API_KEY = 'dc61d5c048da94d702624940c3a9c541';
    const artistName = this.song.artist.name;

    const response = await axios({
      method: 'get',
      url: `${ROOT_LAST_FM}?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`,
    });
    this.artist = response.data.artist;
  },
};
</script>

<style lang="sass" scoped>
.first-image
  background-position: center
  background-size: cover
  width: 250px
  height: 250px
</style>
