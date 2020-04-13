<template>
  <div>
    <img :src="imgSrc" class="img-icon" />
  </div>
</template>

<script>
import ShareImage from '../assets/share.svg';

export default {
  name: 'ShareIcon',
  data() {
    return {
      imgSrc: ShareImage,
    };
  },
};
</script>

<style lang="sass" scoped>
.img-icon
  width: 23px
  height: 18px
</style>
