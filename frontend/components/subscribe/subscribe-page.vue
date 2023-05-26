<template>
  <v-row class="principal" style="margin:0">
    <v-row class="row-bar" style="margin:0">
      <v-column class="row-bar-title">
        <div class="div-bar-title">
          <v-card-title>
            Daiilymotion
          </v-card-title>
        </div>
      </v-column>
      <v-column class="btn">
        <div class="col-btn">
          <v-btn>
            login
          </v-btn>
        </div>
      </v-column>
    </v-row>
    <v-row style="width: 100%; margin:0">
      <v-row style="display: flex; justify-content: center; margin:0">
        <v-column cols="12" style="width: 100%">
          <v-card-title style="display: flex; justify-content: center;">
            Elige tu paquete
          </v-card-title>
        </v-column>
      </v-row>
    </v-row>
    <v-row style="width: 100%; margin:0">
      <v-row style="display: flex; justify-content: center; margin:0">
        <v-column cols="12" style="width: 100%">
          <v-card-title style="display: flex; justify-content: center;">
            Información adicional
          </v-card-title>
        </v-column>
      </v-row>
    </v-row>
    <v-row style="width: 100%; display: flex; justify-content: space-around;" margin: 0>
      <v-column cols="4" style="background-color: cadetblue; height: 450px; width: 30%;">
        <v-banner outlined>
          <v-btn>
            Empieza ahora
          </v-btn>
        </v-banner>
      </v-column>
      <v-column cols="4" style="background-color: cadetblue; height: 450px; width: 30%;">
        <div class="banner">
          <v-card class="card-bno">
            <v-column class>
              <v-card-title class="card">
                6 meses
              </v-card-title>
            </v-column>
            <v-card-subtitle>
              7 meses
            </v-card-subtitle>
            <v-btn>
              Empieza ahora
            </v-btn>
          </v-card>
        </div>
      </v-column>
      <v-column cols="4" style="background-color: cadetblue; height: 450px; width: 30%;">
        <v-banner outlined>
          <v-btn>
            Empieza ahora
          </v-btn>
        </v-banner>
      </v-column>
    </v-row>
  </v-row>
</template>

  <style scoped>
  .principal{
    width: 100%;
    height: 100%;
    /* background-color: saddlebrown; */
  }
  .btn{
    display: flex;
    justify-content: flex-end;
    padding-right: 2%;
    padding-top: 2%;
  }

  .col-btn{
    width: 100%;
    height: 100%
  }

  .row-bar{
    width:100%;
    height: 12%;
    margin: 0;
  }

  .row-bar-title{
    width: 80%;
    height: 12%;
    margin: 0
  }

  .div-bar-title{
    width: 100%;
    height: 100%;
  }
  .card{
    display: flex;
    justify-content: center;
  }

  .bn{
    width:100%
  }

  .banner{
    width: 100%;
    height: 100%;
  }

  .meses{
    width: 100%;
  }

  </style>
