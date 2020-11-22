<template lang="pug">
  v-container.container(align="center" justify="center")
    div(align="center" justify="center")
      v-row
        v-col.col-12(justify="center" align="center")
          h1 Unlimited movies, TV<br> shows, and more.
          p Watch anywhere. Cancel anytime

          span Ready to watch? Enter your email to create or restart your membership.

        v-col.col-12(align="center" justify="center")
          v-text-field.col-6(
                  v-model="email"
                  :rules="emailRules"
                  label="Email address"
                  filled
          )
          v-btn() GET STARTED


</template>

<script>

export default {
  data() {
    return {
      email: '',
      emailRules: [
          v => !!v || "Email is required!",
          v => /.+@.+\..+/.test(v) || "Please enter a valid email address"
      ],

    }
  },
}
</script>

<style scoped>
.container{
  background: url("/visitorLogin.jpg") no-repeat center;
  height:700px
}

/* .col {
  border: 1px solid red
}

.row {
  border: 1px solid green
} */
</style>
