<template>
  <div class="principal">
    <top-bar />
    <loginPage />
  </div>
</template>

<script>
import topBar from '~/components/topbars/subscribe-bar.vue'
import loginPage from '~/components/login/login-page.vue'
export default {
  name: 'IndexPage',
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
  }
</style>
