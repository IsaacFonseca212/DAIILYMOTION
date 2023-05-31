<template>
  <v-row class="principal" style="margin: 0">
    <v-row class="row-player" style="margin: 0">
      <v-row class="reproductor" style="margin: 0">
        <v-card v-if="video && video.length > 0" class="mx-auto" max-width="100%">
          <iframe
            width="100%"
            height="75%"
            :src="video.url"
            :title="video.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            allowfullscreen
            sharing-enabled="false"
            type="text/html"
          />
          <v-card-title>
            {{ video.title }}
          </v-card-title>
          <div display: style="display: flex; align-items: center; margin-left: 25px;">
            <v-avatar size="10">
              <v-img :src="video.channel_img" />
            </v-avatar>
            <v-card-subtitle> {{ video.chanel_name }} </v-card-subtitle>
          </div>
          <v-card-actions>
            <v-btn text>
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
    <v-row class="sugeridos" style="margin: 0">
      <h1>Aqui van los videos sugeridos</h1>
    </v-row>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      videoId: '',
      video: []
    }
  },
  computed: {
    ...mapGetters(['getVideoID'])
  },
  mounted () {
    this.loadData()
  },
  methods: {
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
        console.log('load Video', await (res))
        if (res.data.alert === 'Success') {
          this.video = res.data.data
        }
      }).catch((err) => {
        console.error(err)
      })
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
  background-color:rgb(165, 126, 42);
}

.sugeridos{
  width:30%;
  height: 100%;
  background-color: darkgreen;
}

</style>
