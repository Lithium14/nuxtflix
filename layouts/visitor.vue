<template lang="pug">
  v-app
    v-main
      navBar
      nuxt
    Footer
</template>

<script>
import navBar from '@/components/visitor/navBar'
import Footer from '@/components/visitor/footer'
export default {
  components: { Footer, navBar }
}
</script>

<style>

</style>
