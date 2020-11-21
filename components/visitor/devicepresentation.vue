<template lang="pug">
  v-container
    div(v-for="(device,index) in descriptionDevice" :key="index")
      Device(:device="device" :reverseStyle="reverseStyleImage(index)")
</template>

<script>
import Device from '@/components/visitor/cardDevice'
export default {
  components: { Device },
  data() {
    return {
      descriptionDevice: [
        {
          title:'Enjoy on your TV',
          content:'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
          image:'/tv.png'
        },
        {
          title:'Download your shows to watch offline.',
          content:'Save your favorites easily and always have something to watch.',
          image:'/mobile-0819.jpg'
        },
        {
          title:'Watch everywhere.',
          content:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
          image:'/device-pile.png'
        }
      ]
    }
  },
  methods: {
    reverseStyleImage(id) {
      let row
      if (id % 2) {
        row = 'row-reverse'
      } else {
        row = 'row'
      }
      return {
        'flex-direction': `${row}`
      }
    }
  },
}
</script>

<style scoped>

</style>
