<template>
  <playerPage />
</template>

<script>
import playerPage from '~/components/player/player-page.vue'
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    playerPage
  },
  layout: 'player'
}
</script>
