<template>
  <div>
    <h3 class="song-title">
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'TitleSong',
};
</script>

<style lang="sass" scoped>
.song-title
  font-weight: 600
  font-size: 14px
  line-height: 17px
  color: #555555
  margin-top: 8px
</style>
