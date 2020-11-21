<template lang="pug">
  v-row
    v-app-bar(
      fixed
      height="60px"
      color='transparent'
      elevation="0"
    )
      v-btn(color="rgb(0,0,0,0)" @click="$router.push('/')" x-large) NUXTFLIX
      v-spacer
      v-btn(color='red' @click="$router.push('/login')" v-if="isPathLogin") Sign in
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  },
  computed: {
    isPathLogin() {
       return this.$route.path !== '/login'
    }
  },
}
</script>

<style scoped>

</style>
