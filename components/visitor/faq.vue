<template lang="pug">
  v-container
    div
      h1 Frequently Asked Questions
      v-expansion-panels(accordion width="450px")
        v-expansion-panel(v-for="(faq,i) in faqs" :key="i")
          v-expansion-panel-header {{ faq.title }}
            template(v-slot:actions)
              v-icon mdi-plus
          v-expansion-panel-content {{ faq.content }}
      p Ready to watch? Enter your email to create or restart your membership
      v-col
        v-text-field(
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
      title: 'Login',
      meta: [
        { hid: 'description', name: 'description', content: 'Login Page ' },
        { hid: 'keywords', name: 'keywords', content: 'login' }
      ],
      faqs: [
        {
          title: 'What is Nuxtflix ?',
          content: "Nuxtflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
          title:  'How much does Nuxtflix cost ?',
          content: "Watch Nuxtflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR15.99 a month. No extra costs, no contracts."
        },
        {
          title: 'Where can I watch ?',
          content: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Nuxtflix account to watch instantly on the web at Nuxtflix.com from your personal computer or on any internet-connected device that offers the Nuxtflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Nuxtflix with you anywhere.",

        },
        {
          title: 'How do I cancel ?',
          content: "Nuxtflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        },
        {
          title: 'What can I watch on Nuxtflix ?',
         content: "Nuxtflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Nuxtflix originals, and more. Watch as much as you want, anytime you want."
        }
      ],
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

</style>
