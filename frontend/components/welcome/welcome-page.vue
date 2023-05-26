<template>
  <v-row class="principal">
    <v-row class="bar">
      <div class="bar-col-1">
        <div style="color: white">
          <v-card-title>
            Daiilymotion
          </v-card-title>
        </div>
      </div>
      <div class="bar-col-2">
        <div class="btn-1">
          <v-btn class="buttons" @click="loginRed">
            Login
          </v-btn>
        </div>
        <div class="btn-2">
          <v-btn class="buttons" @click="subscribeRed">
            Subscribe
          </v-btn>
        </div>
      </div>
    </v-row>
    <v-row class="content">
      <v-row style="width:100%; height: 75%; margin: 0; align-items: center; justify-content: center;">
        <img src="@/assets/images/ahorra.avif" class="content-v-img">
      </v-row>
      <v-row class="but">
        <v-row style="width: 100%; height: 100%; display: flex; justify-content: center;">
          <v-btn class="bot" style="background-color: #7B2ABF!important;" @click="subscribeRed">
            Subscribe now
          </v-btn>
        </v-row>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
export default {
  methods: {
    loginRed () {
      this.$router.push('/login')
    },
    subscribeRed () {
      this.$router.push('/subscribe')
    }
  }
}
</script></script>

<style scoped>
.principal{
  width: 100%;
  height: 100%;
  margin: 0;
  /* background-color: white; */
  background-color: #02021C;
}

.bar-col-1{
  width: 70%;
  height: 100%;
}

.content-v-img{
width: 50%;
}

.bar-col-2{
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  flex-direction: row;
}

.btn-1{
  margin-top: 4%;
}

.btn-2{
  margin-top: 4%;
  margin-left: 5%;
  margin-right: 5%
}
.bar{
  margin: 0%!important;
  width: 100%;
  height: 10%;
}

.bot{
  background-color: #7B24D7;
}

.but{
  margin: 0;
  width: 100%;
  height: 25%;
  display: flex;
  align-content: center;
  justify-content: center;
}

.content{
  width: 100%;
  height: 90%;
  background-image: url('~@/assets/images/background.gif');
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
}

.buttons{
background-color: #A354A2!important;
}

</style>
