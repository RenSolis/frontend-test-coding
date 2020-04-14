<template>
  <div>
    <p class="year">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AlbumYear',
};
</script>

<style lang="sass" scoped>
.year
  font-size: 14px
  line-height: 17px
  color: #4F4F4F
</style>
