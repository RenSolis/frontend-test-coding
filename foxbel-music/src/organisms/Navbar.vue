<template>
  <div class="navbar">
    <SearchForm />
    <AccountData />
  </div>
</template>

<script>
import SearchForm from '../molecules/SearchForm.vue';
import AccountData from '../molecules/AccountData.vue';

export default {
  name: 'Navbar',
  components: {
    SearchForm,
    AccountData,
  },
};
</script>

<style lang="sass" scoped>
.navbar
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%
</style>
