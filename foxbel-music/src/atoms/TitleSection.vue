<template>
  <div>
    <h2 class="title-section" :style="{ color: colorTitle }">
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'TitleSection',
  props: ['textColor'],
  computed: {
    colorTitle() {
      return (this.textColor === undefined) ? '#E86060' : this.textColor;
    },
  },
};
</script>

<style lang="sass" scoped>
.title-section
  font-weight: bold
  font-size: 22px
  line-height: 27px
</style>
