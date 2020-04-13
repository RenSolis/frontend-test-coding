<template>
  <div class="first-container">
    <PageLeft
      v-if="object.image"
      :image="image"
    />
    <div v-if="type == 'artist'" class="right-display">
      <PageRight
        :artist="object"
        :count="albums.length"
      />
    </div>
  </div>
</template>

<script>
import PageLeft from '../molecules/PageLeft.vue';
import PageRight from '../molecules/PageRight.vue';

export default {
  name: 'PageDetail',
  props: ['object', 'type', 'albums'],
  components: {
    PageLeft,
    PageRight,
  },
  computed: {
    image() {
      return this.object.image[2]['#text'];
    },
  },
};
</script>

<style lang="sass" scoped>
.first-container
  display: flex
  justify-content: center
  align-items: center
  margin-top: 40px
.right-display
  width: calc(100% - 150px)
  height: 150px
  padding: 10px 20px
</style>
