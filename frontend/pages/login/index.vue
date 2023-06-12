<template>
  <div class="principal">
    <topBar />
    <loginPage />
  </div>
</template>

<script>
import topBar from '~/components/topbars/subscribe-bar.vue'
import loginPage from '~/components/login/login-page.vue'
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    loginPage,
    topBar
  },
  layout: 'login'
}
</script>

<style scoped>
  .principal{
    width: 100vw;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
  }
</style>
