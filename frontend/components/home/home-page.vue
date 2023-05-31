<template>
  <v-row class="principal">
    <v-row class="row-categorias">
      <div class="div-row-categorias">
        <div class="categoria">
          <h2>Featured</h2>
        </div>
        <div class="categoria">
          <h2>News</h2>
        </div>
        <div class="categoria">
          <h2>Sports</h2>
        </div>
        <div class="categoria">
          <h2>Entertainment</h2>
        </div>
        <div class="categoria">
          <h2>Music</h2>
        </div>
      </div>
    </v-row>
    <v-row class="row-contenido">
      <v-row class="videos">
        <div class="nombre-categoria-padre">
          <h1>Featured</h1>
          <h4>Top Stories</h4>
        </div>
        <div class="videos-mostrados" />
      </v-row>
      <v-row class="videos">
        <div class="nombre-categoria-padre">
          <h1>News</h1>
          <h4>In focus</h4>
        </div>
        <div class="videos-mostrados" />
      </v-row>
      <v-row class="videos">
        <div class="nombre-categoria-padre">
          <h1>Sports</h1>
          <h4>Top sports moments</h4>
        </div>
        <div class="videos-mostrados" />
      </v-row>
      <v-row class="videos">
        <div class="nombre-categoria-padre">
          <h1>Entertainment</h1>
          <h4>In the spotlight</h4>
        </div>
        <div class="videos-mostrados" />
      </v-row>
      <v-row class="videos">
        <div class="nombre-categoria-padre">
          <h1>
            Music
          </h1>
          <h4>Top music</h4>
        </div>
        <div class="videos-mostrados">
          <v-container>
            <v-row v-if="videom && videom.length > 0" dense>
              <v-col v-for="i in 4" :key="i" cols="12">
                <v-card @click="playVid(videom[i].id)">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-avatar class="ma-3" size="400" tile>
                      <v-img :src="videom[i].image" />
                    </v-avatar>
                    <div>
                      <v-card-title class="text-h5">
                        {{ videom[i].title }}
                      </v-card-title>
                      <div>
                        <v-avatar size="10">
                          <v-img :src="videom[i].channel_img" />
                        </v-avatar>
                        <v-card-subtitle> {{ videom[i].chanel_name }} </v-card-subtitle>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      videom: []
    }
  },
  mounted () {
    this.loadVideoMusic()
  },
  methods: {
    ...mapMutations(['setVideoId']),
    async loadVideoMusic () {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }
      const Categ = {
        category: 'music'
      }
      await this.$axios.post(process.env.APP + '/category', Categ, config).then(async (res) => {
        // eslint-disable-next-line no-console
        console.log('music', await (res))
        if (res.data.alert === 'Success') {
          this.videom = res.data.data
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
      })
    },
    playVid (videoId) {
      this.setVideoId(videoId)
      this.$router.push('home/player')
    }
  }
}
</script>

<style scoped>

.videos-mostrados{
  width: 100%;
  height: auto;
}

.nombre-categoria-padre{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.principal{
  width: 100vw;
  height: auto;
  margin: 0;
  background-color: #212529;
}

.videos{
  width: 100%;
  height: auto;
  margin: 0;
}

.div-row-categorias{
  width: 100vw;
  height: 100%;
  display: flex;
  margin: 0;
  justify-content: center;
  background-color: #2E333A;
}

.categoria{
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.row-categorias{
  width: 100vw;
  height: 7vh;
  margin: 0;
  display: flex;
  background-color: #212529;
}
.row-contenido{
  width: 70%;
  height: auto;
  margin: 0;
  /* justify-content: center;
  align-content: center; */
  padding-left: 5%;
}

</style>
