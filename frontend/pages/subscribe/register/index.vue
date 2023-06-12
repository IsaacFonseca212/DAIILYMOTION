<template>
  <div class="principal">
    <topBar />
    <signUp />
  </div>
</template>

<script>
import signUp from '~/components/signup/signup-page.vue'
import topBar from '~/components/topbars/subscribe-bar.vue'
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    signUp,
    topBar
  },
  layout: 'signup'
}
</script>

<style scoped>
  .principal{
    width: 100vw;
    height: auto;
    font-family: 'Montserrat', sans-serif;
  }
</style>
