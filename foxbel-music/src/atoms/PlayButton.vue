<template>
  <div class="container-play" @click="clickPlay">
    <span
      class="btn-play"
      :style="{ width: buttonWidth, height: buttonHeight }"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'PlayButton',
  props: ['width', 'height'],
  methods: {
    clickPlay() {
      this.$emit('emitClick');
    },
  },
  computed: {
    buttonWidth() {
      return `${this.width}px`;
    },
    buttonHeight() {
      return `${this.height}px`;
    },
  },
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
  display: block
  &:hover
    cursor: pointer
</style>
