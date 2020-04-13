<template>
  <div class="container-img">
    <div class="img-charect" :style="{ backgroundImage: imageURL }"></div>
  </div>
</template>

<script>
export default {
  name: 'PageImage',
  props: ['image'],
  computed: {
    imageURL() {
      return `url(${this.image})`;
    },
  },
};
</script>

<style lang="sass" scoped>
.container-img
  width: 100%
  height: 100%
.img-charect
  width: 100%
  height: 100%
  background-size: cover
  background-repeat: no-repeat
  background-position: center
</style>
