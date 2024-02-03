<template>
  <div>
    <GlobalHeader />
    <section class="hero-5-bg position-relative">
      <router-view />
    </section>
    <GlobalFooter />
  </div>

</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'

export default {
  name: 'BasicLayout',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>