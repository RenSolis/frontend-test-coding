<template>
  <div class="image-container">
    <PageImage
      :image="image"
    />
  </div>
</template>

<script>
import PageImage from '../atoms/PageImage.vue';

export default {
  name: 'PageLeft',
  props: ['image'],
  components: {
    PageImage,
  },
};
</script>

<style lang="sass" scoped>
.image-container
  width: 150px
  height: 150px
</style>
