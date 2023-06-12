<template>
  <div class="principal">
    <searchBar />
    <mainPage />
  </div>
</template>

<script>
import mainPage from '~/components/home/home-page.vue'
import searchBar from '~/components/topbars/navigation-bar.vue'
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    mainPage,
    searchBar
  },
  layout: 'home'
}
</script>

<style scoped>
.principal{
  width: 100vw;
  height: auto;
  font-family: 'Montserrat', sans-serif;
}
</style>
