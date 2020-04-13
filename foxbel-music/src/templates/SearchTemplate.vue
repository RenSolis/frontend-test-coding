<template>
  <div class="search-template columns">
    <Sidebar />
    <div class="container">
      <Navbar />
      <ResultsSection
        :songs="songs"
        :artists="artists"
        :albums="albums"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '../organisms/Navbar.vue';
import Sidebar from '../organisms/Sidebar.vue';
import ResultsSection from '../organisms/ResultsSection.vue';

export default {
  name: 'SearchTemplate',
  props: ['songs', 'artists', 'albums'],
  components: {
    Navbar,
    Sidebar,
    ResultsSection,
  },
};
</script>
