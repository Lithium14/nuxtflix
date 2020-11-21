<template lang="pug">
  v-container
      v-row
        v-col.col-12
          span Questions? Call-06.61.17.16.96
      v-row
        v-col.col-3
          v-row
            v-col.col-12
              a FAQ<br>
              a Investor Relations<br>
              a Ways to Watch<br>
              a Corporate Information<br>
              a Netflix Originals
        v-col.col-3
          v-row
            v-col.col-12
              a Help Center<br>
              a Jobs<br>
              a Terms of Use<br>
              a Contact Us<br>
        v-col
          v-row
            v-col
              a Account<br>
              a Redeem Gift Cards<br>
              a Privacy<br>
              a Speed Test<br>
        v-col
          v-row
            v-col
              a Media Center<br>
              a Buy Gift Cards<br>
              a Cookie preferences<br>
              a Legal Notices<br>
      v-col.col-2
        v-select(
          v-model="items[0]"
          :items="items"
          outlined
          prepend-inner-icon ="mdi-earth"
        )
        span Netflix France





</template>

<script>
export default {
  layouts: 'visitor',
  data() {
    return {
      items: [ 'English', 'French']
    }
  },

}
</script>

<style scoped>

.row {
  border:1px solid yellow
}
.col {
  border: 1px solid red
}
</style>
