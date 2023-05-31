<template>
  <div class="principal">
    <topBar />
    <playerPage />
  </div>
</template>

<script>
import playerPage from '~/components/player/player-page.vue'
import topBar from '~/components/topbars/navigation-bar.vue'
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    playerPage,
    topBar
  },
  layout: 'player'
}
</script>

<style scoped>
.principal{
  width: 100vw;
  height: auto;
}
</style>
