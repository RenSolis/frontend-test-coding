<template>
  <button class="btn-search" @click="searchWord">
    <slot>
      <i class="fa fa-search"></i>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonSearch',
  methods: {
    searchWord() {
      this.$emit('search');
    },
  },
};
</script>

<style lang="sass" scoped>
.btn-search
  position: absolute
  right: 5px
  background: transparent
  border: none
  height: 36px
  width: 30px
  &:hover
    cursor: pointer
  .fa.fa-search
    color: #BDBDBD
    font-size: 18px
    line-height: 21px
</style>
