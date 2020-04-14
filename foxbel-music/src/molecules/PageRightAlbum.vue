<template>
  <div class="distro">
    <div class="same-line">
      <TitlePage>
        {{ album.name }}
      </TitlePage>
      <div class="circle">
        <PlayButton
          :width="10"
          :height="10"
        />
      </div>
    </div>
    <ArtistAlbum>
      {{ album.artist }}
    </ArtistAlbum>
    <AlbumYear>
      {{ albumYear }}
    </AlbumYear>
    <Counter>
      {{ count }} Canciones
    </Counter>
    <div class="additional">
      <Counter>
        {{ totalTimeAlbum }}
      </Counter>
      <span class="intersept"></span>
      <AlbumYear>
        {{ firstTag }}
      </AlbumYear>
    </div>
  </div>
</template>

<script>
import TitlePage from '../atoms/TitlePage.vue';
import PlayButton from '../atoms/PlayButton.vue';
import Counter from '../atoms/Counter.vue';
import ArtistAlbum from '../atoms/ArtistAlbum.vue';
import AlbumYear from '../atoms/AlbumYear.vue';

export default {
  name: 'PageRightAlbum',
  props: ['album', 'count'],
  components: {
    TitlePage,
    PlayButton,
    Counter,
    ArtistAlbum,
    AlbumYear,
  },
  computed: {
    albumYear() {
      return this.album.wiki.published.substring(7, 11);
    },
    totalTimeAlbum() {
      let total = 0;
      this.album.tracks.track.forEach((song) => { total += Number(song.duration); });
      const minutes = Math.floor(total / 60);
      const seconds = Math.round(Number(String(total / 60).split('.')[1].substring(0, 2)));
      return `${minutes}:${seconds}`;
    },
    firstTag() {
      return this.album.tags.tag[0].name;
    },
  },
};
</script>

<style lang="sass" scoped>
.distro
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%
.same-line
  display: flex
  align-items: center
.circle
  width: 30px
  height: 30px
  background: #E86060
  border-radius: 50%
  margin-left: 20px
.additional
  display: flex
  align-items: center
  text-transform: capitalize
.intersept
  display: block
  margin-left: 6px
  margin-right: 6px
  width: 4px
  height: 4px
  border-radius: 50%
  background-color: #4F4F4F
</style>
