<template>
  <div class="title-container">
    <TitleSection :textColor="textColor">{{ title }}</TitleSection>
  </div>
</template>

<script>
import TitleSection from '../atoms/TitleSection.vue';

export default {
  name: 'TitleContainer',
  props: {
    title: String,
    textColor: String,
  },
  components: {
    TitleSection,
  },
};
</script>

<style lang="sass" scoped>
.title-container
  margin-top: 40px
  margin-bottom: 20px
  width: 100%
</style>
