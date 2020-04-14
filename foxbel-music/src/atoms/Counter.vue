<template>
  <div>
    <p class="count">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
};
</script>

<style lang="sass" scoped>
.count
  font-size: 14px
  line-height: 17px
  color: #4F4F4F
</style>
