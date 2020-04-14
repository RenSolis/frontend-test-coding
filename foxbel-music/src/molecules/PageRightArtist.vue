<template>
  <div class="distribution">
    <div>
      <TitlePage>
        {{ artist.name }}
      </TitlePage>
      <Counter>
        {{ count }} Albums
      </Counter>
      <div class="icons-display">
        <ShareIcon />
        <FollowIcon />
      </div>
    </div>

    <div class="buttons-display">
      <ButtonPlayCurrent />
      <ButtonFollow />
    </div>
  </div>
</template>

<script>
import TitlePage from '../atoms/TitlePage.vue';
import Counter from '../atoms/Counter.vue';
import ShareIcon from '../atoms/ShareIcon.vue';
import FollowIcon from '../atoms/FollowIcon.vue';
import ButtonPlayCurrent from '../atoms/ButtonPlayCurrent.vue';
import ButtonFollow from '../atoms/ButtonFollow.vue';

export default {
  name: 'PageRightArtist',
  props: ['artist', 'count'],
  components: {
    Counter,
    TitlePage,
    ShareIcon,
    FollowIcon,
    ButtonPlayCurrent,
    ButtonFollow,
  },
};
</script>

<style lang="sass" scoped>
.distribution
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%
.icons-display
  display: flex
  align-items: center
  margin-top: 16px
.buttons-display
  display: flex
  justify-content: flex-start
  align-items: center
</style>
