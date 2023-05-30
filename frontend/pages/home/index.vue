<template>
  <div class="principal">
    <searchBar />
    <mainPage />
  </div>
</template>

<script>
import mainPage from '~/components/main/main-page.vue'
import searchBar from '~/components/topbars/navigation-bar.vue'
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    mainPage,
    searchBar
  },
  layout: 'mainP'
}
</script>

<style scoped>
.principal{
  width: 100vw;
  height: 100vh;
}
</style>
