<template>
  <div class="head">
    <button text style="margin: 0;" @click="$router.push('/home')">
      DAIILYMOTION
    </button>
    <v-text-field
      v-model="searchval"
      class="bar"
      hide-details
      prepend-icon="mdi-magnify"
      single-line
      placeholder="Search by name"
      label="Search"
      clearable
      @keyup.enter="search"
    />
    <v-menu
      bottom
      min-width="200px"
      rounded
      offset-y
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          x-large
          v-bind="attrs"
          v-on="on"
        >
          <v-avatar
            color="#212529"
            size="40"
          >
            <v-img :src="require('@/assets/images/avatar.png')" />
          </v-avatar>
        </v-btn>
      </template>
      <v-card class="card">
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar
              color="#2E333A"
              style="margin-bottom: 10px;"
            >
              <img src="@/assets/images/avatar.png">
            </v-avatar>
            <h3>{{ fullname }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3" />
            <v-btn
              depressed
              rounded
              text
              @click="$router.push('/edit-profile')"
            >
              Edit Account
            </v-btn>
            <v-divider class="my-3" />
            <v-btn
              depressed
              rounded
              text
              @click="$router.push('/')"
            >
              Log Out
            </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      fullname: '',
      searchval: '',
      user: ''
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    ...mapGetters(['getSearchValue'])
  },
  mounted () {
    this.loadUser()
    this.searchval = this.getSearchValue
  },
  methods: {
    ...mapMutations(['setSearchValue']),
    search () {
      // eslint-disable-next-line no-console
      // console.log(this.searchval)
      this.setSearchValue(this.searchval)
      this.$router.push('/search')
    },
    async loadUser () {
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
          // console.log('user', this.user)
        } else if (res.data.alert === 'Error') {
          // eslint-disable-next-line no-console
          console.error(await (res.data.message))
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
  .head{
    width: 100%;
    height: 10vh;
    background-color:#171A21;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 25px;
    margin-top: 12px;
    padding: 0 10px 0 25px;
  }
  .card{
    background-color: #212529;
  }
  .bar{
    flex: none;
    width: 50%;
  }
</style>
