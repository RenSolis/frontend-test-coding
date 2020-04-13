<template>
  <div>
    <h1 class="title">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TitlePage',
};
</script>

<style lang="sass" scoped>
.title
  font-weight: 600
  font-size: 22px
  line-height: 27px
  color: #662323
</style>
