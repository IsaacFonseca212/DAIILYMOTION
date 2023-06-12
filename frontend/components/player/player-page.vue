<template>
  <v-row class="principal" style="margin: 0">
    <v-row class="row-player" style="margin: 0">
      <v-row class="reproductor" style="margin: 0">
        <v-card v-if="video" class="mx-auto" min-width="770" max-width="770" style="margin: 0px; margin-top: 15px;">
          <div style="height: 400px; width: 100%; min-height: 400px">
            <iframe
              class="responsive-iframe"
              width="100%"
              height="100%"
              :src="video.url"
              :title="video.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowfullscreen
              sharing-enabled="false"
            />
          </div>
          <v-card-title>
            {{ video.title }}
          </v-card-title>
          <div
            display:
            style="display: flex;
                   align-items: center;
                   margin-left: 25px;
                   position: relative;
                   top: -20px;"
          >
            <v-avatar style="height: 30px; width: 30px; min-width: 30px;">
              <v-img :src="video.channel_img" />
            </v-avatar>
            <v-card-subtitle> {{ video.chanel_name }} </v-card-subtitle>
          </div>
          <v-card-actions>
            <v-btn text @click="show = !show">
              More details
            </v-btn>
            <v-spacer />
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider />
              <v-card-text>
                {{ video.details }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
    </v-row>
    <v-row v-if="videoSug && videoSug.length > 0" class="sugeridos">
      <v-col v-for="i in 19" :key="i" cols="12">
        <v-card @click="playVid(videoSug[i].id)">
          <div class="d-flex flex-no-wrap">
            <div class="ma-3" style="object-fit: cover; height: auto; width: 30%;">
              <v-img
                :src="videoSug[i].image"
                style="height: 100%; width: 100%; object-fit: cover;"
              />
              <h5 class="duration">
                {{ videoSug[i].duration }}
              </h5>
            </div>
            <div>
              <v-card-title>
                <span>
                  {{ videoSug[i].title }}
                </span>
              </v-card-title>
              <div class="d-flex align-content-center" style="margin-left: 25px;">
                <v-avatar size="25">
                  <v-img :src="videoSug[i].channel_img" />
                </v-avatar>
                <v-card-subtitle> {{ videoSug[i].chanel_name }} </v-card-subtitle>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      videoId: '',
      video: [],
      show: false,
      videoSug: [],
      videoList: [],
      randIndex: ''
    }
  },
  computed: {
    ...mapGetters(['getVideoID'])
  },
  mounted () {
    this.loadData()
    this.loadList()
  },
  methods: {
    ...mapMutations(['setVideoId']),
    async loadData () {
      this.videoId = await this.getVideoID
      console.log('video:', this.videoId)
      await this.loadVideo()
    },
    async loadVideo () {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }
      const videoRef = {
        id: this.videoId
      }
      await this.$axios.post(process.env.APP + '/info', videoRef, config).then(async (res) => {
        console.log('load video', await (res))
        if (res.data.alert === 'Success') {
          this.video = res.data.data
        }
      }).catch((err) => {
        console.error(err)
      })
    },
    async loadList () {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }
      await this.$axios.get(process.env.APP + '/videos', config).then(async (res) => {
        console.log('Full video list:', await (res))
        if (res.data.alert === 'Success') {
          this.videoList = res.data.data
          this.randomIndex()
        }
      }).catch((err) => {
        console.error(err)
      })
    },
    randomIndex () {
      for (let i = 0; i < 20; i++) {
        this.randIndex = Math.floor(Math.random() * this.videoList.length)
        this.videoSug.push(this.videoList[this.randIndex])
      }
      console.log('videoSug list:', this.videoSug)
    },
    playVid (videoId) {
      this.setVideoId(videoId)
      this.$router.push('/home/player/video')
    }
  }
}
</script>

<style scoped>
.principal{
  width: 100%;
  height: 100%;
  margin: 0;
}

.row-player{
  width: 50%;
  height: 100%;
  margin-left: 10vh!important;
}
.reproductor{
  width: 100%;
  height: 75%;
  margin-top: 10px!important;
}

.sugeridos{
  width:30%;
  height: 100%;
  margin-right: 15vh;
  margin-left: 5px;
}

* {
  word-break: normal
}

.duration{
  padding: 0.18rem;
  border-radius: 5px;
  position: relative;
  bottom: 97%;
  left: 5%;
  background-color: black;
  width: 35%;
  display: flex;
  justify-content: center;
}
</style>
