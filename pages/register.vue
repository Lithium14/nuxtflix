<template lang="pug">
  v-container.container(fluid)
    v-row(justify="center")
      v-form(ref='form' v-model="valid" lazy-validation)
        v-card(width="400px" color="rgb(0, 0, 0, 0.9)")
          v-col
            v-card-title Sign up

          v-col
            v-text-field(
              v-model="firstName"
              :rules="firstNameRules"
              label="Firstname"
              filled
            )

          v-col
            v-text-field(
              v-model="lastName"
              :rules="lastNameRules"
              label="Lastname"
              filled
            )

          v-col
            v-text-field(
              v-model="email"
              :rules="emailRules"
              label="Email"
              filled
            )

          v-col
            v-text-field(
              v-model="phone"
              :rules="phoneRules"
              label="Phone Number"
              filled
            )
          v-col
            v-text-field(
              v-model="pwd"
              :rules="pwdRules"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? '$mdi-eye' : '$mdi-eye-off'"
              @click:append="show = !show"
              label="Password"
              filled
            )
          v-col(align="center")
            v-btn(color="red" @click="submitForm") Submit

</template>

<script>

export default {
  layout: 'visitor',
  data() {
    return {
      valid: null,
      firstName: '',
      firstNameRules:[
        v => !!v || 'Firstname is required'
      ],
      lastName: '',
      lastNameRules:[
        v => !!v || 'Lastname is required'
      ],
      email: '',
      emailRules: [
          v => !!v || "Please enter a valid email or phone number.",
          v => /.+@.+\..+/.test(v) || "Please enter a valid email."
      ],
      phone: '',
      phoneRules: [
        v => !v  || "Phone Number is required",
        v => /^(0|\+33)[1-9]([-.: ]?[0-9]{2}){4}$/.test(v) ||"Please enter a valid phone number"
      ],
      pwd: '',
      pwdRules: [
        v => !v || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v)
        ||
        'At least 8 characters, one uppercase letter, one lowercase letter, one number and one special character (@, $,!,%, *,?, &)'
      ],
      show: false
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate();
      console.log('submitForm')
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

