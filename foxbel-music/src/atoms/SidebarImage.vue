<template>
  <img :src="sidebarImage" class="img-responsive img-sidebar" />
</template>

<script>
import sidebarImage from '../assets/foxbel-music.png';

export default {
  name: 'SidebarImage',
  data() {
    return {
      sidebarImage,
    };
  },
};
</script>

<style lang="sass" scoped>
.img-sidebar
  height: 59px
  width: 100%
</style>
