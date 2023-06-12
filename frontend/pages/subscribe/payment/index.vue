<template>
  <div class="principal">
    <topBar />
    <payMethod />
  </div>
</template>

<script>
import payMethod from '~/components/payment/payment-methods.vue'
import topBar from '~/components/topbars/subscribe-bar.vue'
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    payMethod,
    topBar
  },
  layout: 'payment'
}
</script>

<style scoped>
  .principal{
    width: 100vw;
    height: auto;
    font-family: 'Montserrat', sans-serif;
  }
</style>
