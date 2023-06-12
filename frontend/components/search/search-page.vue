<template>
  <v-container style="margin-left: 5%" class="content">
    <v-row v-if="videoRes && videoRes.length > 0" dense>
      <v-col v-for="(video, index) in videoRes" :key="index" cols="12">
        <v-card @click="playVid(video.id)">
          <div class="d-flex flex-no-wrap">
            <v-avatar class="ma-3" style="height: auto; min-width: 400px;width: 400px;" tile>
              <v-img :src="video.image" />
              <h5 class="header">
                {{ video.duration }}
              </h5>
            </v-avatar>
            <div>
              <v-card-title class="text-h5">
                {{ video.title }}
              </v-card-title>
              <div style="display: flex; align-items: center; margin-left: 25px;">
                <v-avatar size="35">
                  <v-img :src="video.channel_img" />
                </v-avatar>
                <v-card-subtitle> {{ video.chanel_name }} </v-card-subtitle>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      videoRes: [],
      videoList: [],
      searchVal: ''
    }
  },
  computed: {
    ...mapGetters(['getSearchValue'])
  },
  mounted () {
    this.searchVal = this.getSearchValue
    this.loadList()
  },
  methods: {
    ...mapMutations(['setVideoId']),
    async loadList () {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }
      await this.$axios.get(process.env.APP + '/videos', config).then((res) => {
        // console.log('Full video list:', await (res))
        if (res.data.alert === 'Success') {
          this.videoList = res.data.data
          // console.log('Full video list:', this.videoList)
          this.videoRes = this.videoList.filter(video => video.title.toLowerCase().includes(this.searchVal.toLowerCase()))
        }
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
    },
    playVid (videoId) {
      this.setVideoId(videoId)
      this.$router.push('/home/player/video')
    }
  }
}
</script>

<style scoped>
.content{
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
}
.header{
    position: relative;
    top: -40%;
    left: -94%;
    background-color: black;
    padding: 0.18rem;
    border-radius: 5px;
}
* {
  word-break: normal
}
</style>
