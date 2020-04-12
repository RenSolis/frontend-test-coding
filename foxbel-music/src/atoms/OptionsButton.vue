<template>
  <div class="btn-options">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'OptionsButton',
};
</script>

<style lang="sass" scoped>
.btn-options
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: absolute
  right: 8px
  top: 8px
  span
    background-color: #fff
    height: 4px
    width: 4px
    border-radius: 50%
    display: block
    &:not(:nth-child(1))
      margin-top: 3px
</style>
