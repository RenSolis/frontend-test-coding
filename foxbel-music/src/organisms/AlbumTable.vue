<template>
  <div class="container-table">
    <ul>
      <HeadAlbumTable />
      <BodyAlbumTable />
    </ul>
  </div>
</template>

<script>
import HeadAlbumTable from '../molecules/HeadAlbumTable.vue';
import BodyAlbumTable from '../molecules/BodyAlbumTable.vue';

export default {
  name: 'AlbumTable',
  props: ['albums'],
  components: {
    HeadAlbumTable,
    BodyAlbumTable,
  },
};
</script>

<style lang="sass" scoped>
.container-table
  margin-top: 40px
ul
  list-style: none
</style>
