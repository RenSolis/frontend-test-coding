<template>
  <div>
    <div class="first-image" :style="{ backgroundImage: backgroundCard }"></div>
  </div>
</template>

<script>
export default {
  name: 'ImageLeftFirst',
  props: ['image'],
  computed: {
    backgroundCard() {
      if (this.image === undefined) return '';
      return `url(${this.image['#text']})`;
    },
  },
};
</script>

<style lang="sass" scoped>
.first-image
  background-position: center
  background-size: cover
  width: 250px
  height: 250px
  position: absolute
</style>
