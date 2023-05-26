<template>
  <div class="content">
    <v-col style="display: contents;">
      <v-banner
        width="700"
        style="margin-bottom: 30px; background-color: #160C30"
      >
        Standardㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ$179.00/m
      </v-banner>
      <span>
        STEP 2 OF 3
      </span>
      <h1>
        Create your account
      </h1>
      <span>
        Access a library of great entertainment, wherever you are.
      </span>
      <v-card
        class="card"
        :elevation="0"
        width="700"
      >
        <v-card-text>
          <v-form ref="frmLogin">
            <v-row>
              <v-col cols="4">
                <v-text-field
                  v-model="name"
                  label="Name"
                  placeholder="Enter your name"
                  required
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="lastname"
                  label="Lastname"
                  placeholder="Enter your lastname"
                  required
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="age"
                  label="Age"
                  placeholder="Enter your age"
                  type="number"
                  required
                />
              </v-col>
            </v-row>
            <v-text-field
              v-model="email"
              label="Email"
              placeholder="Enter your email address"
              :rules="validateEmail"
              required
            />
            <v-text-field
              v-model="confEmail"
              label="Confirm email"
              placeholder="Confirm your email address"
              :rules="validateEmail"
              required
            />
            <v-text-field
              v-model="password"
              label="Password"
              placeholder="password"
              :rules="validatePassword"
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
            @click="register"
          >
            Create account
          </v-btn>
        </v-card-actions>
      </v-card>
      <span v-if="mensaje" class="mensaje">
        <v-icon dense color="error">
          mdi-alert-circle-outline
        </v-icon>
        {{ mensaje }}
      </span>
      <span style="margin-top: 20px;">
        Already have an account?
        <router-link to="/">
          Login
        </router-link>
      </span>
    </v-col>
    <br>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      name: '',
      lastname: '',
      age: '',
      email: '',
      confEmail: '',
      password: '',
      validateEmail: [
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
      ],
      validatePassword: [
        v => !v || v.length >= 8 || 'Password must have min 8 chars'
      ],
      mensaje: ''
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    ...mapMutations(['setUser']),
    async register () {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }
      if (this.email !== this.confEmail) {
        this.mensaje = 'The email addresses do not match'
        // console.log('user:', this.getUser.email)
      } else {
        const userData = {
          name: this.name,
          lastname: this.lastname,
          age: this.age,
          email: this.email,
          password: this.password
        }
        await this.$axios.post('/insert',
          userData,
          config
        ).then(async (res) => {
        // eslint-disable-next-line no-console
          console.log(await (res))
          if (res.data.alert === 'Success') {
            this.setUser(userData)
            this.mensaje = ''
            this.$router.push('/subscribe/payment')
          } else if (res.data.alert === 'Missing data') {
            this.mensaje = 'Please enter your data'
          } else if (res.data.alert === 'Missing email') {
            this.mensaje = 'Please enter a valid email'
          } else if (res.data.alert === 'Password must be at least 8 characters') {
            this.mensaje = 'Password must be at least 8 characters'
          } else if (res.data.alert === 'User already exists') {
            this.mensaje = 'This user already exists'
          }
        }).catch((error) => {
        // eslint-disable-next-line no-console
          console.error(error)
        })
      }
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
    flex-direction: column;
    justify-content: center;
    background-image: url('~@/assets/images/purple-gradient.jpg');
    background-attachment: fixed;
    margin-top: 20px;
  }
  .card{
    background-color: transparent;
  }
  .mensaje{
    color: orangered !important;
    margin-top: 20px;
  }
</style>
