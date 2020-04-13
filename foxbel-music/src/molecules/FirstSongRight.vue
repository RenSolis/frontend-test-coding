<template>
  <div class="info-song">
    <div>
      <ArtistImageHome
        v-if="artist.image"
        :image="artist.image[1]"
      />

      <NameArtistSong
        v-if="artist && song"
        :artistName="artist.name"
        :songName="song.name"
      />

      <p class="the-best">
        {{ messageBest }}
        <FollowersCount
          v-if="artist.stats"
          :followers="artist.stats.listeners"
        />
      </p>
      <ArtistSummary
        v-if="artist.bio"
        :artistSummary="summary"
      />
    </div>

    <div class="bottom">
      <ButtonPlayCurrent />
      <ButtonFollow />
      <OptionsButton
        :inSong="false"
      />
    </div>
  </div>
</template>

<script>
import * as axios from 'axios';

import ArtistImageHome from '../atoms/ArtistImageHome.vue';
import NameArtistSong from '../atoms/NameArtistSong.vue';
import FollowersCount from '../atoms/FollowersCount.vue';
import ArtistSummary from '../atoms/ArtistSummary.vue';
import ButtonPlayCurrent from '../atoms/ButtonPlayCurrent.vue';
import ButtonFollow from '../atoms/ButtonFollow.vue';
import OptionsButton from '../atoms/OptionsButton.vue';

export default {
  name: 'FirstSongRight',
  props: ['song'],
  components: {
    OptionsButton,
    ArtistImageHome,
    FollowersCount,
    ArtistSummary,
    ButtonPlayCurrent,
    ButtonFollow,
    NameArtistSong,
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
.the-best
  font-size: 14px
  line-height: 17px
  color: #fff
.bottom
  position: relative
  display: flex
</style>
