<template>
  <div>
    <h3 class="artist-name">
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'ArtistAlbum',
};
</script>

<style lang="sass" scoped>
.artist-name
  font-weight: bold
  font-size: 14px
  line-height: 17px
  color: #4F4F4F
</style>
