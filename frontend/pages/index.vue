<template>
  <welcomePage />
</template>

<script>
import welcomePage from '~/components/welcome/welcome-page.vue'
export default {
  name: 'IndexPage',
  components: {
    welcomePage
  },
  layout: 'welcome'
}
</script>
