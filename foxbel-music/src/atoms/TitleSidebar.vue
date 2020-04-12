<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'TitleSidebar',
};
</script>

<style lang="sass" scoped>
h1
  color: #fff
  margin-top: 30px
  font-weight: 600
  font-size: 22px
  line-height: 27px
</style>
