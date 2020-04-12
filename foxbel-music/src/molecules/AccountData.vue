<template>
  <div class="account">
    <UserIcon />
    <UserData />
  </div>
</template>

<script>
import UserIcon from '../atoms/UserIcon.vue';
import UserData from '../atoms/UserData.vue';

export default {
  name: 'AccountData',
  components: {
    UserIcon,
    UserData,
  },
};
</script>

<style lang="sass" scoped>
.account
  display: flex
  justify-content: flex-end
  align-items: center
</style>
