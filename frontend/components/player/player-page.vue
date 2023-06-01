<template>
  <v-row class="principal" style="margin: 0">
    <v-row class="row-player" style="margin: 0">
      <v-row class="reproductor" style="margin: 0">
        <v-card v-if="video" class="mx-auto" style="margin: 0px; margin-top: 15px; width: 95%!important;">
          <iframe
            width="100%"
            height="95%"
            :src="video.url"
            :title="video.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            allowfullscreen
            sharing-enabled="false"
          />
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
    <v-row v-if="videoSug && videoSug.length > 0" class="sugeridos" style="margin: 0">
      <v-col v-for="i in 19" :key="i" cols="12">
        <v-card @click="playVid(videoSug[i].id)">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="100" tile>
              <v-img :src="videoSug[i].image" />
              <h5
                style="
                      position: relative;
                      top: -40%;
                      left: -80%;
                      background-color: black;"
              >
                {{ videoSug[i].duration }}
              </h5>
            </v-avatar>
            <div>
              <v-card-title class="text-h5">
                {{ videoSug[i].title }}
              </v-card-title>
              <div display: style="display: flex; align-items: center; margin-left: 25px;">
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
}

.row-player{
  width: 70%;
  height: 100%;
}
.reproductor{
  width: 100%;
  height: 75%;
  margin-top: 15px;
}

.sugeridos{
  width:30%;
  height: 100%;
}

* {
  word-break: normal
}
</style>
