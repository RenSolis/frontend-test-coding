<template>
  <div class="item-sidebar">
    <li>
      <router-link :to="routeName" exact>
        <slot></slot>
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: 'ItemSidebar',
  props: ['routeName'],
};
</script>
