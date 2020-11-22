<template lang="pug">
  div
    v-app-bar(
      style="cursor:pointer"
      absolute
      height="60px"
      color='transparent'
      flat
    )
      h1(@click="$router.push('/')" ).red--text NUXTFLIX
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
