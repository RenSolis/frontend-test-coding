<template>
  <input
    type="text"
    placeholder="Buscar"
    @keyup.enter="enterSearchInput"
    @input="changeValue"
  />
</template>

<script>
export default {
  name: 'InputSearch',
  methods: {
    changeValue(event) {
      const { value } = event.target;
      this.$emit('write', value);
    },
    enterSearchInput() {
      this.$emit('search');
    },
  },
};
</script>

<style lang="sass" scoped>
input
  width: 100%
  height: 100%
  background: #fff
  border: 1px solid #828282
  border-radius: 100px
  padding: 0 30px 0 15px
  outline: none
</style>
