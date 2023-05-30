<template>
  <div class="principal">
    <topBar />
    <editProfile />
  </div>
</template>

<script>
import topBar from '~/components/topbars/navigation-bar.vue'
import editProfile from '~/components/profile/edit-prof.vue'
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    editProfile,
    topBar
  },
  layout: 'profile'
}
</script>

<style scoped>
  .principal{
    width: 100vw;
    height: 100vh;
  }
</style>
