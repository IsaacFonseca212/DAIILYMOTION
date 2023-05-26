<template>
  <div class="content">
    <v-col style="display: contents;">
      <h1 class="text">
        Log in
      </h1>
      <v-card
        class="cardLog"
        :elevation="0"
        width="450"
      >
        <v-card-text>
          <v-form ref="frmLogin">
            <v-text-field
              v-model="email"
              label="Email"
              placeholder="name@example.com"
              :rules="validateEmail"
              required
            />
            <v-text-field
              v-model="password"
              label="Password"
              placeholder="password"
              type="password"
              required
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="rounded"
            block
            style="background-color: #7B2ABF!important;"
            @click="login"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
      <span v-if="mensaje" class="mensaje">
        <v-icon dense color="error">
          mdi-alert-circle-outline
        </v-icon>
        {{ mensaje }}
      </span>
      <span style="margin-top: 25px;">
        You do not have an account?
        <router-link to="/subscribe/register">
          Register
        </router-link>
      </span>
    </v-col>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      validateEmail: [
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
      ],
      mensaje: ''
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async login () {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }
      const userData = {
        email: this.email,
        password: this.password
      }
      await this.$axios.post('/login',
        userData,
        config
      ).then(async (res) => {
        // eslint-disable-next-line no-console
        console.log(await (res))
        if (res.data.alert === 'Success') {
          this.setUser(userData)
          this.mensaje = ''
          this.$router.push('/home')
        } else if (res.data.alert === 'Please enter your data') {
          this.mensaje = 'Please enter your data'
        } else if (res.data.alert === 'User not found') {
          this.mensaje = 'User not found'
        } else if (res.data.alert === 'Wrong password') {
          this.mensaje = 'Wrong password'
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>
  .content{
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .cardLog {
    background-color: transparent;
  }
  .text{
    font-size: 40px;
    margin-bottom: 2%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }
  .mensaje{
    color: orangered !important;
    margin-top: 20px;
  }
</style>
