<template>
  <v-row class="principal">
    <v-col cols="10" class="title">
      <v-card-title>
        Daiilymotion
      </v-card-title>
    </v-col>
    <v-col cols="2" class="btn">
      <v-btn>
        login
      </v-btn>
    </v-col>
    <v-row style="width: 100%;">
      <v-row style="display: flex; justify-content: center;">
        <v-column cols="12" style="width: 100%">
          <v-card-title style="display: flex; justify-content: center;">
            Elige tu paquete
          </v-card-title>
        </v-column>
      </v-row>
    </v-row>
    <v-row style="width: 100%;">
      <v-row style="display: flex; justify-content: center;">
        <v-column cols="12" style="width: 100%">
          <v-card-title style="display: flex; justify-content: center;">
            Información adicional
          </v-card-title>
        </v-column>
      </v-row>
    </v-row>
    <v-row style="width: 100%; display: flex; justify-content: space-around;">
      <v-column cols="4" style="background-color: cadetblue; height: 450px; width: 30%;">
        <v-banner outlined>
          <v-btn>
            Empieza ahora
          </v-btn>
        </v-banner>
      </v-column>
      <v-column cols="4" style="background-color: cadetblue; height: 450px; width: 30%;">
        <v-banner outlined>
          <v-btn>
            Empieza ahora
          </v-btn>
        </v-banner>
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

.title{
  display: flex;
  justify-content: center;
  position: relative;
  left: 8%;
}

</style>
