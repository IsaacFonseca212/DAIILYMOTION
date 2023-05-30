<template>
  <playerPage />
</template>

<script>
import playerPage from '~/components/player/player-page.vue'
export default {
  name: 'IndexPage',
  components: {
    playerPage
  },
  layout: 'player'
}
</script>
