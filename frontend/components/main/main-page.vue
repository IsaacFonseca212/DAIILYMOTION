<template>
  <v-row class="principal">
    <v-row class="row-busqueda">
      <div class="div-row-busqueda">
        <v-card-title>
          Aqui va la busqueda xd
        </v-card-title>
      </div>
    </v-row>
    <v-row class="row-categorias">
      <div class="div-row-busqueda">
        <v-card-title>
          Aqui va la barrita de categorías
        </v-card-title>
      </div>
    </v-row>
    <v-row class="row-contenido">
      <div class="div-row-busqueda">
        <v-card-title>
          Aqui van los videos sugeridos en grande
        </v-card-title>
      </div>
    </v-row>
    <v-row class="row-sugeridos">
      <div class="div-row-busqueda">
        <v-card-title>
          Aqui van los videos sugeridos en chiquitito
        </v-card-title>
      </div>
    </v-row>
  </v-row>
</template>

<style scoped>

.principal{
  width: 100vw;
  height: 100vh;
  margin: 0;
}

.row-busqueda{
  width: 100%;
  height:15%;
  margin: 0;
  background-color: aqua;
}

.div-row-busqueda{
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
}

.row-categorias{
  width: 100%;
  height: 5%;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: bisque;
}
.row-contenido{
  width: 70%;
  height: 80%;
  margin: 0;
  justify-content: center;
  align-content: center;
  background-color: cadetblue;
}

.row-sugeridos{
  width: 30%;
  height: 80%;
  margin: 0;
  justify-content: center;
  align-content: center;
  background-color: brown;
}

</style>
