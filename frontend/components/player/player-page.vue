<template>
  <v-row class="principal" margin="0">
    <v-row class="row-player" margin="0">
      <v-row class="reproductor" margin="0">
        <h1>Aqui va la pantalla del video</h1>
      </v-row>
      <v-row class="detalles" margin="0">
        <h1>Aqui van los detalles del video</h1>
      </v-row>
    </v-row>
    <v-row class="sugeridos" margin="0">
      <h1>Aqui van los videos sugeridos</h1>
    </v-row>
  </v-row>
</template>

<style scoped>
.principal{
  width: 100%;
  height: 100%;
}

.row-player{
  width: 70%;
  height: 100%;
}
.reproductor{
  width: 100%;
  height: 75%;
  background-color:rgb(165, 126, 42);
}

.detalles{
  width: 100%;
  height: 25%;
  background-color: purple;
}

.sugeridos{
  width:30%;
  height: 100%;
  background-color: darkgreen;
}

</style>
