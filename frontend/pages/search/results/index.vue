<template>
  <div class="principal">
    <topBar />
    <searchRes />
  </div>
</template>

<script>
import searchRes from '~/components/search/search-page.vue'
import topBar from '~/components/topbars/navigation-bar.vue'
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    searchRes,
    topBar
  },
  layout: 'search'
}
</script>

<style scoped>
  .principal{
    width: 100vw;
    height: auto;
    background-color: #212529;
    font-family: 'Montserrat', sans-serif;
  }
</style>
