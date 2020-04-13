<template>
  <div>
    <p class="summary" v-html="artistSummary"></p>
  </div>
</template>

<script>
export default {
  name: 'ArtistSummary',
  props: ['artistSummary'],
};
</script>

<style lang="sass" scoped>
.summary
  font-size: 12px
  line-height: 20px
  color: #fff
  margin-top: 20px
</style>
