<template>
  <div class="container-left">
    <ImageLeftFirst
      v-if="song"
      :image="song.image[0]"
    />
    <PlayButton
      :width="63"
      :height="72"
    />
  </div>
</template>

<script>
import ImageLeftFirst from '../atoms/ImageLeftFirst.vue';
import PlayButton from '../atoms/PlayButton.vue';

export default {
  name: 'FirstSongLeft',
  props: ['song'],
  components: {
    ImageLeftFirst,
    PlayButton,
  },
};
</script>

<style lang="sass" scoped>
.container-left
  width: 250px
  height: 250px
</style>
