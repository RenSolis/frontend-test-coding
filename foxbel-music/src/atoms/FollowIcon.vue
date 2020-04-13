<template>
  <div>
    <img :src="imgSrc" class="img-icon" />
  </div>
</template>

<script>
import FollowImage from '../assets/follow.svg';

export default {
  name: 'FollowIcon',
  data() {
    return {
      imgSrc: FollowImage,
    };
  },
};
</script>

<style lang="sass" scoped>
.img-icon
  width: 23px
  height: 18px
  margin-left: 20px
</style>
