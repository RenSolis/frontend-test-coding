<template>
  <p class="username">{{ user.name }}</p>
</template>

<script>
export default {
  name: 'UserData',
  data() {
    return {
      user: {
        name: 'Francisco M.',
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.username
  font-size: 16px
  line-height: 20px
  color: #4F4F4F
</style>
