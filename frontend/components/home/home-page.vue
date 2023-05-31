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
            <v-row v-if="videoM && videoM.length > 0" dense>
              <v-col v-for="i in 4" :key="i" cols="12">
                <v-card @click="playVid(videoM[i].id)">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-avatar class="ma-3" size="400" tile>
                      <v-img :src="videoM[i].image" />
                    </v-avatar>
                    <div>
                      <v-card-title class="text-h5">
                        {{ videoM[i].title }}
                      </v-card-title>
                      <div>
                        <v-avatar size="10">
                          <v-img :src="videoM[i].channel_img" />
                        </v-avatar>
                        <v-card-subtitle> {{ videoM[i].chanel_name }} </v-card-subtitle>
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
      videoM: [],
      videoFt: [],
      videoNew: [],
      videoSp: [],
      videoEnt: [],
      category: ''
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    ...mapMutations(['setVideoId']),
    async loadData () {
      await this.loadvideoMusic()
      await this.loadVideoFeat()
      await this.loadVideoNews()
      await this.loadVideoSports()
      await this.loadVideoEntert()
    },
    async loadvideoMusic () {
      this.category = 'music'
      await this.loadVideos()
      console.log('videosm:', this.videoM)
    },
    async loadVideoFeat () {
      this.category = 'featured'
      await this.loadVideos()
      console.log('videosft:', this.videoFt)
    },
    async loadVideoNews () {
      this.category = 'news'
      await this.loadVideos()
      console.log('videosNews:', this.videoNew)
    },
    async loadVideoSports () {
      this.category = 'sports'
      await this.loadVideos()
      console.log('videosSp:', this.videoSp)
    },
    async loadVideoEntert () {
      this.category = 'entertainment'
      await this.loadVideos()
      console.log('videosEnt:', this.videoEnt)
    },
    async loadVideos () {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }
      const Categ = {
        category: this.category
      }
      await this.$axios.post(process.env.APP + '/category', Categ, config).then(async (res) => {
        // eslint-disable-next-line no-console
        console.log(this.category, await (res))
        if (res.data.alert === 'Success') {
          if (this.category === 'music') {
            this.videoM = res.data.data
          } else if (this.category === 'featured') {
            this.videoFt = res.data.data
          } else if (this.category === 'news') {
            this.videoNew = res.data.data
          } else if (this.category === 'sports') {
            this.videoSp = res.data.data
          } else if (this.category === 'entertainment') {
            this.videoEnt = res.data.data
          }
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
