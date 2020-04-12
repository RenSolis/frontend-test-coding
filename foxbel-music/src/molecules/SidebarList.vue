<template>
  <div>
    <TitleSidebar>Mi librería</TitleSidebar>
    <ul>
      <ItemSidebar routeName="/">Recientes</ItemSidebar>
      <ItemSidebar routeName="/artists">Artistas</ItemSidebar>
      <ItemSidebar routeName="/albums">Álbums</ItemSidebar>
      <ItemSidebar routeName="/songs">Canciones</ItemSidebar>
      <ItemSidebar routeName="/stations">Estaciones</ItemSidebar>
    </ul>

    <TitleSidebar>Playlist</TitleSidebar>
    <ul>
      <ItemSidebar routeName="/playlist">Metal</ItemSidebar>
      <ItemSidebar routeName="/playlist">Para bailar</ItemSidebar>
      <ItemSidebar routeName="/playlist">Rock 90s</ItemSidebar>
      <ItemSidebar routeName="/playlist">Baladas</ItemSidebar>
    </ul>
  </div>

</template>

<script>
import TitleSidebar from '../atoms/TitleSidebar.vue';
import ItemSidebar from '../atoms/ItemSidebar.vue';

export default {
  name: 'SidebarList',
  components: {
    TitleSidebar,
    ItemSidebar,
  },
};
</script>

<style lang="sass">
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
  color: #E86060 !important
  font-weight: 600
  text-decoration: none
  &::before
    content: ""
    position: absolute
    width: 5px
    height: 20px
    background: #E86060
    left: 0
</style>
