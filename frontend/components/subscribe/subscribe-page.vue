<template>
  <v-row class="principal" style="margin:0">
    <v-row style="width: 100%; margin: 0!important; height:5%; display: flex; align-content: center;">
      <v-row style="display: flex; justify-content: center; margin: 0px!important; margin-top: 1%; align-content: center; height: 80%;">
        <span style="display: flex; justify-content: center; align-content: center;">
          STEP 1 OF 3
        </span>
      </v-row>
    </v-row>
    <v-row style="width: 100%; margin:0; height:10%; display: flex; justify-content: center; align-content: center;">
      <v-row style=" width: 100%; height: 100%; display: flex; justify-content: center; margin:0">
        <div>
          <h1 style="display: flex; justify-content: center;">
            Choose your plan
          </h1>
          <span>Access a library of great entertainment, wherever you are.</span>
        </div>
      </v-row>
    </v-row>
    <v-row style="width: 95%; height:80%; display: flex; justify-content: space-around; margin:0; align-content: center;">
      <v-col cols="4" style="height: 85%; width: 30%;">
        <div class="banner">
          <v-card elevation="24" outlinedstyle style="background-color: transparent; height: 100%">
            <div class="v-card-title">
              <v-card-title class="card">
                1  month
              </v-card-title>
            </div>
            <div class="v-card-price">
              <v-card-title style="display: flex; justify-content: center;">
                $179.00 mxn
              </v-card-title>
            </div>
            <div class="v-card-info">
              <ul>
                <li>Unlimited ad-free movies and TV shows</li>
                <li>1 device at a time</li>
                <li>2 profile</li>
                <li>Watch in HD</li>
                <li>Download on 1 supported device at a time</li>
              </ul>
            </div>
            <div class="v-card-btn">
              <v-btn class="button" @click="setPlan1">
                Choose this plan
              </v-btn>
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col cols="4" style="height: 85%; width: 30%;">
        <div class="banner">
          <v-card elevation="24" outlinedstyle style="background-color: transparent; height: 100%">
            <div class="v-card-title">
              <v-card-title class="card">
                3 months
              </v-card-title>
            </div>
            <div class="v-card-price">
              <v-card-title style="display: flex; justify-content: center;">
                $399.00 mxn
              </v-card-title>
            </div>
            <div class="v-card-info">
              <ul>
                <li>Unlimited ad-free movies and TV shows</li>
                <li>3 devices at a time</li>
                <li>4 profiles</li>
                <li>Watch in Full HD</li>
                <li>Download on 3 supported devices at a time</li>
              </ul>
            </div>
            <div class="v-card-btn">
              <v-btn class="button" @click="setPlan2">
                Choose this plan
              </v-btn>
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col cols="4" style="height: 85%; width: 30%;">
        <div class="banner">
          <v-card elevation="24" outlinedstyle style="background-color: transparent; height: 100%">
            <div class="v-card-title">
              <v-card-title class="card">
                12 months
              </v-card-title>
            </div>
            <div class="v-card-price">
              <v-card-title style="display: flex; justify-content: center;">
                $1,249.00 mxn
              </v-card-title>
            </div>
            <div class="v-card-info">
              <ul>
                <li>Unlimited ad-free movies and TV shows</li>
                <li>5 device at a time</li>
                <li>5 profiles</li>
                <li>Watch in Ultra HD</li>
                <li>Download on 5 supported devices at a time</li>
              </ul>
            </div>
            <div class="v-card-btn">
              <v-btn class="button" @click="setPlan3">
                Choose this plan
              </v-btn>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row style="width: 95%; height:5%; display: flex; justify-content: space-around; margin:0; align-content: center;">
      <div style="width: 100%; height: 100%; display: flex; justify-content: center; margin-bottom: 4%;">
        <span>
          Already have an account?
          <router-link to="/login">
            Login
          </router-link>
        </span>
      </div>
    </v-row>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      plan: ''
    }
  },
  methods: {
    ...mapMutations(['setPrice']),
    setPlan1 () {
      this.plan = '$179.00/m'
      this.setPrice(this.plan)
      this.$router.push('/subscribe/register')
    },
    setPlan2 () {
      this.plan = '$399.00/3m'
      this.setPrice(this.plan)
      this.$router.push('/subscribe/register')
    },
    setPlan3 () {
      this.plan = '$1249.00/12m'
      this.setPrice(this.plan)
      this.$router.push('/subscribe/register')
    }
  }
}
</script>

  <style scoped>
  .principal{
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-image: url('~@/assets/images/purple-gradient.jpg');
    background-attachment: fixed;
    margin-top: 20px;
  }
  .button{
    background-color: #7B2ABF!important;
  }

  .v-card-title{
    width: 100%;
    height: 10%;
  }

  .v-card-price{
    width: 100%;
    height: 10%;

  }

  .v-card-info{
    width: 100%;
    height: 60%;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    margin-left: 10%;
  }

  .v-card-btn{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
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
    font-size: 170%;
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

<!-- 3 dispositivos
1 dispositivo a la vez
Max resolution -
3 profiles
tablet & smartphone -->
