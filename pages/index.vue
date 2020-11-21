<template lang="pug">
  v-container.mt-12
    div
      Home
      transition(name="slide-fade")
        devicePresentation
      FAQ
</template>

<script>
import FAQ from '@/components/visitor/faq'
import Home from '@/components/visitor/home'
import devicePresentation from '@/components/visitor/devicepresentation'

export default {
  layout: 'visitor',
  components: { FAQ, Home, devicePresentation },

}
</script>
