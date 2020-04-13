<template>
  <div class="btn-options" :class="{ songCard: inSong }">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'OptionsButton',
  props: ['inSong'],
};
</script>

<style lang="sass" scoped>
.btn-options
  display: flex
  justify-content: center
  align-items: center
  margin-left: 20px
  &:hover
    cursor: pointer
  span
    background-color: #fff
    height: 4px
    width: 4px
    border-radius: 50%
    display: block
    &:not(:nth-child(1))
      margin-left: 3px
      margin-top: 0px

.songCard
  flex-direction: column
  position: absolute
  right: 8px
  top: 8px
  margin-left: 0px
  span
    &:not(:nth-child(1))
      margin-left: 0px
      margin-top: 3px
</style>
