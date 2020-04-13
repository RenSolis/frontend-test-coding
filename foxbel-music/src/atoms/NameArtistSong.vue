<template>
  <div>
    <h1 class="song-name">{{ artistName }} {{ songName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NameArtistSong',
  props: ['artistName', 'songName'],
};
</script>

<style lang="sass" scoped>
.song-name
  font-size: 22px
  line-height: 27px
  font-weight: 600
  color: #fff
</style>
