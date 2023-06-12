<template>
  <div class="principal">
    <topBar />
    <subscribePage />
  </div>
</template>

<script>
import subscribePage from '~/components/subscribe/subscribe-page.vue'
import topBar from '~/components/topbars/subscribe-bar.vue'
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    subscribePage,
    topBar
  },
  layout: 'subscribe'
}
</script>

<style scoped>
.principal{
  width: 100vw;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
}
</style>
