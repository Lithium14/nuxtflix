<template>
  <v-container >
    <v-row class="container" align="center">
      <v-form ref='form' v-model="valid" lazy-validation>
        <v-card width="450px">

          <v-col>
            <v-card-title>Sign In</v-card-title>
          </v-col>

          <v-col>
            <v-text-field
            v-model="emailOrPhone"
            :rules="emailOrPhoneRules"
            label="Email or phone Number"
            filled>
            </v-text-field>
          </v-col>

          <v-col>
            <v-text-field
            v-model="pwd"
            :rules="pwdRules"
            label="Password"
            filled>
            </v-text-field>
          </v-col>

          <v-col>
            <v-btn color="red" @click="loginUser">
              Sign in
            </v-btn>
          </v-col>

          <v-col>
            <v-checkbox v-model="checkbox" label="Remember me"></v-checkbox>
            <span><a href=#>Need help ?</a></span>
          </v-col>

          <v-col>
            <span> New to Netflix? <a href=#>Sign up now.</a></span>
          </v-col>

          <v-col>
            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <a href=# @click="showCaptcha">Learn more.</a></span><br>
            <span v-if="isLearn">The information collected by Google reCAPTCHA
                              is subject to the Google Privacy Policy and Terms of Service, and is used for providing,
                              maintaining, and improving the reCAPTCHA service and for general security purposes
                              (it is not used for personalized advertising by Google).
            </span>
          </v-col>

        </v-card>
      </v-form>
    </v-row>
  </v-container>
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
      pwdRules: [v => v.length >=4 || 'Your password must contain between 4 and 60 characters.']
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
</style>

