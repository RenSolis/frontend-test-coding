<template>
  <div>
    <div class="artist-image" :style="{ background: artistImage }"></div>
  </div>
</template>

<script>
export default {
  name: 'ArtistImageHome',
  props: ['image'],
  computed: {
    artistImage() {
      return `
        linear-gradient(0deg, rgba(167, 0, 0, 0.7),
        rgba(167, 0, 0, 0.7)),
        url(${this.image['#text']}
      `;
    },
  },
};
</script>

<style lang="sass" scoped>
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
</style>
