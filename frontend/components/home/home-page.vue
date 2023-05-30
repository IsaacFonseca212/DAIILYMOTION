<template>
  <v-row class="principal">
    <v-row class="row-busqueda">
      <div class="div-row-busqueda">
        <h1>
          Aqui va la busqueda xd
        </h1>
      </div>
    </v-row>
    <v-row class="row-categorias">
      <div class="div-row-categorias">
        <div class="featured">
          <h2>Featured</h2>
        </div>
        <div class="news">
          <h2>News</h2>
        </div>
        <div class="sport">
          <h2>Sports</h2>
        </div>
        <div class="entertainment">
          <h2>Entertainment</h2>
        </div>
        <div class="music">
          <h2>Music</h2>
        </div>
      </div>
    </v-row>
    <v-row class="row-contenido">
      <v-row class="featured-videos">
        <div style="display:flex; justify-content: center; width: 20%; height: 25%;">
          <h2>
            Featured
          </h2>
        </div>
        <div style="display:flex; justify-content: center; width: 80%; height: 25%;" />
      </v-row>
      <v-row class="news-videos">
        <div>
          <h5>
            Featured
          </h5>
        </div>
      </v-row>
      <v-row class="sports-videos">
        <div>
          <h5>
            Featured
          </h5>
        </div>
      </v-row>
      <v-row class="entertainment-videos">
        <div>
          <h5>
            Featured
          </h5>
        </div>
      </v-row>
      <v-row class="music-videos">
        <div>
          <h5>
            music
          </h5>
        </div>
      </v-row>
    </v-row>
  </v-row>
</template>

<style scoped>

.principal{
  width: 100vw;
  height: 100vh;
  margin: 0;
}

.featured-videos{
  width: 100%;
  height: 20%;
  margin: 0;
  background-color: burlywood;
}

.news-videos{
  width: 100%;
  height: 20%;
  margin: 0;
}

.sports-videos{
  width: 100%;
  height: 20%;
  margin: 0;
}

.entertainment-videos{
  width: 100%;
  height: 20%;
  margin: 0;
}

.music-videos{
  width: 100%;
  height: 20%;
  margin: 0;
}

.row-busqueda{
  width: 100%;
  height:15%;
  margin: 0;
  background-color: aqua;
}

.div-row-categorias{
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0;
  justify-content: center;
}

.featured{
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.news{
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sport{
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.entertainment{
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.music{
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;}
.div-row-busqueda{
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

.row-categorias{
  width: 100%;
  height: 7%;
  margin: 0;
  display: flex;
  background-color: bisque;
}
.row-contenido{
  width: 70%;
  height: 80%;
  margin: 0;
  /* justify-content: center;
  align-content: center; */
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
