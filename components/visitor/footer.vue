<template lang="pug">
  v-container
      v-row
        v-col.col-12
          span.span Questions? Call-06.61.17.16.96
      v-row
        v-col.col-3
          v-row
            v-col.col-12
              a.link(href="#") FAQ<br>
              a.link(v-if="isPathLogin" href="/") Investor Relations<br>
              a.link(v-if="isPathLogin" href="#") Ways to Watch<br>
              a.link(v-if="isPathLogin" href="#") Corporate Information<br>
              a.link(v-if="isPathLogin" href="#") Nuxtflix Originals
              a.link(v-else) Cookie Preference
        v-col.col-3
          v-row
            v-col.col-12
              a.link Help Center<br>
              a.link(v-if="isPathLogin") Jobs<br>
              a.link(v-if="isPathLogin") Terms of Use<br>
              a.link(v-if="isPathLogin") Contact Us<br>
              a.link(v-else) Corporate Information
        v-col
          v-row
            v-col
              a.link(v-if="isPathLogin") Account<br>
              a.link(v-if="isPathLogin") Redeem Gift Cards<br>
              a.link(v-if="isPathLogin") Privacy<br>
              a.link(v-if="isPathLogin") Speed Test<br>
              a.link(v-else) Terms of Use
        v-col
          v-row
            v-col
              a.link(v-if="isPathLogin") Media Center<br>
              a.link(v-if="isPathLogin") Buy Gift Cards<br>
              a.link(v-if="isPathLogin") Cookie preferences<br>
              a.link(v-if="isPathLogin") Legal Notices<br>
              a.link(v-else) Privacy
        v-col.col-12
          v-row
            v-col.col-2
              v-select(
                v-model="select"
                :items="items"
                outlined
                prepend-inner-icon ="mdi-earth"
              )
              span Nuxtflix France





</template>

<script>
export default {
  layouts: 'visitor',
  data() {
    return {
      items: [ 'English', 'French'],
      select: 'English'
    }
  },
  computed: {
    isPathLogin() {
      return this.$route.path !== '/login'
    },
  },

}
</script>

<style scoped>
.link {
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
.v-application a {
  color: #757575;
}

span {
  color: #757575
}
</style>
