<template>
  <v-app class="image">
    <v-row class="page">
      <Nuxt />
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'Signup'
}
</script>

<style scoped>
  .page{
    width: 100vw;
    height: auto;
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
