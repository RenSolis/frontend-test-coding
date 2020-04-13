<template>
  <div>
    <button class="play">Reproducir</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonPlayCurrent',
};
</script>

<style lang="sass" scoped>
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
</style>
