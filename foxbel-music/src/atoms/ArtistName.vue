<template>
  <div>
    <p class="artist-name">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ArtistName',
};
</script>

<style lang="sass" scoped>
.artist-name
  font-size: 12px
  line-height: 15px
  color: #828282
</style>
