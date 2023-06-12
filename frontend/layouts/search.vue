<template>
  <v-app style="background-color: #212529;">
    <v-row class="page">
      <Nuxt />
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'Search'
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
</style>
