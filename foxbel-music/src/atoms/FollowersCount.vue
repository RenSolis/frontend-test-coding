<template>
  <div class="listeners">
    <span>{{ followers }} seguidores</span>
  </div>
</template>

<script>
export default {
  name: 'FollowersCount',
  props: ['followers'],
};
</script>

<style lang="sass" scoped>
.listeners
  color: #662323
  font-size: 10px
  line-height: 12px
  margin-left: 16px
  display: inline-block
</style>
