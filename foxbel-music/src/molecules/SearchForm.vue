<template>
  <div>
    <form action="" class="search-form">
      <InputSearch />
      <ButtonSearch />
    </form>
  </div>
</template>

<script>
import InputSearch from '../atoms/InputSearch.vue';
import ButtonSearch from '../atoms/ButtonSearch.vue';

export default {
  name: 'SearchForm',
  components: {
    InputSearch,
    ButtonSearch,
  },
};
</script>

<style lang="sass">
.search-form
  position: relative
  width: 524px
  height: 36px
</style>
