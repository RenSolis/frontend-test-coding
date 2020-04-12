<template>
  <div class="container-play">
    <span class="btn-play"></span>
  </div>
</template>

<script>
export default {
  name: 'PlayButton',
};
</script>

<style lang="sass" scoped>
.container-play
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
.btn-play
  background-color: #fff
  clip-path: polygon(0 0, 0% 100%, 100% 50%)
  width: 32px
  height: 36px
  display: block
</style>
