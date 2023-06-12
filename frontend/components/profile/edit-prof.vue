<template>
  <div class="content">
    <v-row class="row">
      <v-card
        width="300"
        height="fit-content"
        :elevation="5"
      >
        <v-card-text class="card">
          <v-avatar
            color="#2E333A"
            size="220"
            style="margin-bottom: 15px;"
          >
            <v-img :src="require('@/assets/images/avatar.png')" />
          </v-avatar>
          <h1 style="font-size: x-large;">
            {{ fullname }}
          </h1>
        </v-card-text>
        <v-card-actions style="justify-content: center;">
          <v-btn
            rounded
            large
            width="200"
            style="background-color: #3D4450!important;"
            @click="$router.push('/')"
          >
            LOG OUT
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        class="card"
        :elevation="5"
        width="700"
        height="fit-content"
      >
        <v-card-title>
          Edit Profile
        </v-card-title>
        <v-card-text>
          <v-form ref="frmLogin">
            <v-text-field
              v-model="name"
              label="Name"
              placeholder="Enter your name"
              required
            />
            <v-text-field
              v-model="lastname"
              label="Lastname"
              placeholder="Enter your lastname"
              required
            />
            <v-text-field
              v-model="age"
              label="Age"
              placeholder="Enter your age"
              type="number"
              required
            />
          </v-form>
        </v-card-text>
        <span v-if="mensaje" class="mensaje">
          <v-icon dense color="success">
            mdi-alert-circle-outline
          </v-icon>
          {{ mensaje }}
        </span>
        <v-card-actions style="justify-content: center;">
          <v-btn
            rounded
            large
            width="400"
            style="background-color: #3D4450!important;"
            @click="saveUser"
          >
            SAVE
          </v-btn>
        </v-card-actions>
        <br><br>
        <v-card-actions style="width: 100%">
          <v-btn
            large
            width="160"
            style="background-color: darkred !important;"
            @click="dialog=true"
          >
            DELETE ACCOUNT
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-dialog
      v-model="dialog"
      max-width="430"
      persistent
    >
      <v-card style="background-color:#171A21;">
        <v-card-title>
          Delete account
        </v-card-title>
        <v-card-text>
          Are you sure you want to delete your account permanently? You can't undo this action
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="dialog=false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red darken-4"
            text
            @click="deleteUser()"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      user: '',
      fullname: '',
      name: '',
      lastname: '',
      age: '',
      email: '',
      mensaje: '',
      dialog: false
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  mounted () {
    this.loadUserData()
  },
  methods: {
    ...mapMutations(['setUser']),
    async loadUserData () {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }
      const userEmail = {
        email: this.getUser.email
      }
      await this.$axios.post('/user',
        userEmail,
        config
      ).then(async (res) => {
        // eslint-disable-next-line no-console
        console.log('load', await (res))
        if (res.data.alert === 'Success') {
          this.user = res.data.data
          this.fullname = this.user.name + ' ' + this.user.lastname
          this.name = this.user.name
          this.lastname = this.user.lastname
          this.age = this.user.age
          this.email = this.user.email
        } else if (res.data.alert === 'Error') {
          // eslint-disable-next-line no-console
          console.error(await (res.data.message))
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
      })
    },
    async saveUser () {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }
      const userData = {
        name: this.name,
        email: this.email,
        lastname: this.lastname,
        age: this.age
      }
      await this.$axios.post('/update',
        userData,
        config
      ).then(async (res) => {
        // eslint-disable-next-line no-console
        console.log('update', await (res))
        if (res.data.alert === 'Success') {
          this.mensaje = 'User saved succesfully'
          this.loadUserData()
          setTimeout(() => {
            this.mensaje = ''
          }, 4000)
        } else if (res.data.alert === 'Error') {
          this.mensaje = 'User not found'
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
      })
    },
    async deleteUser () {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }
      const userEmail = {
        email: this.email
      }
      const emailClear = {
        email: ''
      }
      await this.$axios.post('/delete',
        userEmail,
        config
      ).then(async (res) => {
        // eslint-disable-next-line no-console
        console.log('delete', await (res))
        if (res.data.alert === 'User deleted') {
          this.setUser(emailClear)
          this.$router.push('/')
        } else if (res.data.alert === 'Error') {
          this.mensaje = 'User not found'
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
    flex-direction: row;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    background-color: #212529;
  }
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .row{
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    background-color: #212529;
  }
  .mensaje{
    color: springgreen !important;
    margin-bottom: 20px;
  }
</style>
