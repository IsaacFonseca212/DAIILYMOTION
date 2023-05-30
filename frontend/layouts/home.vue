<template>
  <v-app style="background-color: #212529">
    <v-row class="display">
      <Nuxt />
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'Home'
}
</script>

  <style scoped>
  .display{
    width: 100vw;
    height: auto;
    display: flex;
    flex: none;
    background-color: #212529;
  }

  </style>
