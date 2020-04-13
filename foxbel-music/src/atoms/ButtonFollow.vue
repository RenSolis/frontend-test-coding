<template>
  <div>
    <button class="follow">Seguir</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonFollow',
};
</script>

<style lang="sass" scoped>
.follow
  border: 1px solid #EB5757
  border-radius: 100px
  padding: 7px 36px
  background: transparent
  font-size: 14px
  line-height: 17px
  color: #EB5757
  margin-left: 20px
  &:hover
    cursor: pointer
</style>
