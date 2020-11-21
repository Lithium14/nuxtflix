<template lang="pug">
  v-container.container(fluid)
    v-row(justify="center")
      v-form(ref='form' v-model="valid" lazy-validation)
        v-card(width="400px" color="rgb(0, 0, 0, 0.9)")
          v-col
            v-card-title Sign In
          v-col
            v-text-field(
              v-model="emailOrPhone"
              :rules="emailOrPhoneRules"
              label="Email or phone Number"
              filled
            )
          v-col
            v-text-field(
              v-model="pwd"
              :rules="pwdRules"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              label="Password"
              filled
            )
          v-col(align="center")
            v-btn(color="red" @click="loginUser") Sign In

          v-col.d-flex.justify-space-between(justify="center")
            v-checkbox(v-model="checkbox" label="Remember me")
            span
              a.link(href="#") Need help ?

          v-col
            span New to Nuxtflix ?
            a.link(@click="$router.push('/')")  Sign up now.

          v-col
            span This page is protected by Google reCAPTCHA to ensure you're not a bot.
              a.link(@click="showCaptcha") Learn more.<br>
            span(v-if="isLearn") The information collected by Google reCAPTCHA
                              | is subject to the Google Privacy Policy and Terms of Service, and is used for providing,
                              | maintaining, and improving the reCAPTCHA service and for general security purposes
                              | (it is not used for personalized advertising by Google).

</template>

<script>

export default {
  layout: 'visitor',
  data() {
    return {
      isLearn: false,
      emailOrPhone: '',
      emailOrPhoneRules: [
          v => !!v || "Please enter a valid email or phone number.",
          v => /.+@.+\..+/.test(v) || "Please enter a valid email."
      ],
      pwd: '',
      pwdRules: [v => v.length >=4 || 'Your password must contain between 4 and 60 characters.'],
      show: false
    }
  },
  methods: {
    showCaptcha() {
      this.isLearn = true
    },
    loginUser() {
      console.log('login page')
    }
  },
}
</script>
<style scoped>
.container{
  background: url("/visitorLogin.jpg") no-repeat center
}
.link {
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
.v-application a {
  color: #757575;
}

</style>

