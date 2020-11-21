<template lang="pug">
  v-container
    v-row(:style="reverseStyle")
      v-col.col-6
        h1 {{device.title}}
        p {{ device.content }}
      v-col.col-6
        v-img(:src="device.image")
    hr

</template>

<script>
export default {
  props: {
    reverseStyle: {
      type: Object,
      default: () => {}
    },
    device: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style scoped>
.col {
  border: 1px solid red;
}
</style>
