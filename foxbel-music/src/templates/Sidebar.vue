<template>
  <div class="sidebar">
    <aside>
      <img :src="sidebarImage" class="img-responsive img-sidebar" />
      <h1>Mi librería</h1>
      <ul>
        <li>
          <router-link to="/" exact>Recientes</router-link>
        </li>
        <li>
          <router-link to="/artists" exact>Artistas</router-link>
        </li>
        <li>
          <router-link to="/albums" exact>Álbums</router-link>
        </li>
        <li>
          <router-link to="/songs" exact>Canciones</router-link>
        </li>
        <li>
          <router-link to="/stations" exact>Estaciones</router-link>
        </li>
      </ul>
      <h1>Playlist</h1>
      <ul>
        <li>
          <router-link to="/playlist/metal" exact>Metal</router-link>
        </li>
        <li>
          <router-link to="/playlist/to-dance" exact>Para bailar</router-link>
        </li>
        <li>
          <router-link to="/playlist/rock-90" exact>Rock 90s</router-link>
        </li>
        <li>
          <router-link to="/playlist/balada" exact>Baladas</router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import sidebarImage from '../assets/foxbel-music.png';

export default {
  name: 'Sidebar',
  data() {
    return {
      sidebarImage,
    };
  },
};
</script>

<style lang="sass" scoped>
.sidebar
  width: 330px
  min-height: 1130px
  background: #662323
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  position: relative
  .img-sidebar
    height: 59px
  aside
    width: 100%
    height: 100%
    padding: 40px 50px
  h1
    color: #fff
    margin-top: 30px
    font-weight: 600
    font-size: 22px
    line-height: 27px
  ul
    list-style: none
  li
    margin-top: 8px
    &:first-child
      margin-top: 4px
    a
      color: #fff
      text-decoration: none
      font-size: 16px
      line-height: 20px

.router-link-active
  &::before
    content: ""
    position: absolute
    width: 5px
    height: 20px
    background: #E86060
    left: 0

.img-responsive
  max-height: 100%
  max-width: 100%
</style>
