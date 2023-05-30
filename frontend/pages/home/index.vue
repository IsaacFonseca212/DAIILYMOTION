<template>
  <!-- <div class="principal"> -->
  <mainPage />
  <!-- </div> -->
</template>

<script>
import mainPage from '~/components/home/home-page.vue'
export default {
  name: 'IndexPage',
  components: {
    mainPage
  },
  layout: 'home'
}
</script>

<style scoped>
/* .principal{
  width: 100vw;
  height: 100vh;
} */
</style>
