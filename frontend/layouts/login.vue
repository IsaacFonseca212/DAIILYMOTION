<template>
  <v-app class="image">
    <v-row class="page">
      <Nuxt />
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
  .page{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .image{
    background-image: url('~@/assets/images/purple-gradient.jpg');
    background-attachment: fixed;
  }
</style>
