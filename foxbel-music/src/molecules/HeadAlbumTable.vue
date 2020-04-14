<template>
  <div>
    <li class="list-item">
      <ArrowIcon />
      <HashIcon />
      <SongTitle />
      <ClockIcon />
      <MusicIcon />
      <StarIcon />
    </li>
  </div>
</template>

<script>
import ArrowIcon from '../atoms/ArrowIcon.vue';
import HashIcon from '../atoms/HashIcon.vue';
import SongTitle from '../atoms/SongTitle.vue';
import ClockIcon from '../atoms/ClockIcon.vue';
import MusicIcon from '../atoms/MusicIcon.vue';
import StarIcon from '../atoms/StarIcon.vue';

export default {
  name: 'HeadAlbumTable',
  components: {
    ArrowIcon,
    HashIcon,
    SongTitle,
    ClockIcon,
    MusicIcon,
    StarIcon,
  },
};
</script>

<style lang="sass" scoped>
.list-item
  width: 100%
  display: grid
  grid-template-columns: 5% 5% 60% 10% 10% 10%
</style>
