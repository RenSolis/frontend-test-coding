<template>
  <div class="info-song">
    <div>
      <div class="artist-image" v-if="artist.image" :style="{ background: artistImage }"></div>

      <h1 class="song-name">{{ artist.name }} {{ song.name }}</h1>
      <p class="the-best">
        {{ messageBest }}
        <span class="listeners" v-if="artist.stats">{{ artist.stats.listeners }} seguidores</span>
      </p>
      <p class="summary" v-if="artist.bio" v-html="summary"></p>
    </div>

    <div class="bottom">
      <button class="play">Reproducir</button>
      <button class="follow">Seguir</button>
      <OptionsButton
        :inSong="false"
      />
    </div>
  </div>
</template>

<script>
import * as axios from 'axios';

import OptionsButton from '../atoms/OptionsButton.vue';

export default {
  name: 'FirstSongRight',
  props: ['song'],
  components: {
    OptionsButton,
  },
  data() {
    return {
      artist: {},
    };
  },
  computed: {
    messageBest() {
      return `Lo mejor de ${this.artist.name}`;
    },
    artistImage() {
      return `
        linear-gradient(0deg, rgba(167, 0, 0, 0.7),
        rgba(167, 0, 0, 0.7)),
        url(${this.artist.image[1]['#text']}
      `;
    },
    summary() {
      return `${this.artist.bio.summary.substring(0, 300)}...`;
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
    console.log(this.artist);
  },
};
</script>

<style lang="sass" scoped>
.info-song
  width: calc(100% - 250px)
  padding: 40px 32px 20px 32px
  mix-blend-mode: normal
  position: relative
  display: flex
  flex-direction: column
  justify-content: space-between
.artist-image
  opacity: 0.5
  width: 100%
  height: 100%
  position: absolute
  top: 0px
  left: 0px
  z-index: -1
  background-repeat: no-repeat !important
  background-size: cover !important
.song-name
  font-size: 22px
  line-height: 27px
  font-weight: 600
  color: #fff
.the-best
  font-size: 14px
  line-height: 17px
  color: #fff
.listeners
  color: #662323
  font-size: 10px
  line-height: 12px
  margin-left: 16px
.summary
  font-size: 12px
  line-height: 20px
  color: #fff
  margin-top: 20px
.play
  background: #E86060
  mix-blend-mode: normal
  border-radius: 100px
  padding: 7px 22px
  border: none
  color: #fff
  font-size: 14px
  line-height: 17px
  &:hover
    cursor: pointer
.follow
  border: 1px solid #EB5757
  border-radius: 100px
  padding: 7px 36px
  background: transparent
  font-size: 14px
  line-height: 17px
  color: #EB5757
  margin-left: 20px
  &:hover
    cursor: pointer
.bottom
  position: relative
  display: flex
</style>
