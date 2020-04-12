<template>
  <div class="sidebar">
    <aside>
      <ImageSidebar />
      <SidebarList />
    </aside>
  </div>
</template>

<script>
import SidebarList from '../molecules/SidebarList.vue';
import ImageSidebar from '../molecules/ImageSidebar.vue';

export default {
  name: 'Sidebar',
  components: {
    ImageSidebar,
    SidebarList,
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
    min-width: 330px
    height: 100%
    padding: 40px 50px
</style>
