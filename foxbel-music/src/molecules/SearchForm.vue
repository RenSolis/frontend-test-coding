<template>
  <div>
    <div class="search-form">
      <InputSearch @search="searchEvent" @write="updateInputValue" />
      <ButtonSearch @search="searchEvent" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import InputSearch from '../atoms/InputSearch.vue';
import ButtonSearch from '../atoms/ButtonSearch.vue';

export default {
  name: 'SearchForm',
  components: {
    InputSearch,
    ButtonSearch,
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    ...mapActions({
      getSongs: 'getSongsSearched',
      getArtists: 'getArtistsSearched',
      getAlbums: 'getAlbumsSearched',
    }),
    updateInputValue(value) {
      this.inputValue = value;
    },
    async searchEvent() {
      await this.getSongs(this.inputValue);
      await this.getArtists(this.inputValue);
      await this.getAlbums(this.inputValue);
      this.$router.push({ name: 'Search', params: { word: this.inputValue } });
    },
  },
};
</script>

<style lang="sass">
.search-form
  position: relative
  width: 524px
  height: 36px
</style>
