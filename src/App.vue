<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {

  },
  watch: {
    $route() {
      // this.$router.go()
    }
  }
}
</script>

<style lang="less">
</style>
