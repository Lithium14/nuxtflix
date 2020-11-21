<template>
  <v-app>
    <v-content>
      <nuxt/>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Footer from '@/components/visitor/footer'
export default {
  components: { Footer }
}
</script>

<style>

</style>
