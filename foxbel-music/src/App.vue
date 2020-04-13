<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap')

*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: Quicksand, sans-serif
  font-style: normal
  font-weight: normal
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

#app .columns
  display: flex

.img-responsive
  max-height: 100%
  max-width: 100%

.container
  padding: 30px 56px
  width: 100%
  height: 100%

.song-container
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))
  grid-column-gap: 22px
  grid-row-gap: 25px
</style>
