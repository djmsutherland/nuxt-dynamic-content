<template>
  <section class="container">
    <div v-if="content">
      <h1>{{ content.text }}</h1>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import consola from 'consola'

export default {
  computed: {
    content() {
      return this.$store.state.content.index
    },
    selected() {
      return this.$store.state.tag.selected
    }
  },

  watch: {
    selected(next, previous) {
      if (next !== previous) {
        axios
          .get(`/api/contents/${this.selected}`)
          .then(({ data }) => this.$store.commit('content/index', data))
          .catch(error => consola.error(error))
      }
    }
  },

  created() {
    if (!this.$route.params.id) this.$router.push('/')

    axios
      .get(`/api/contents/${this.$route.params.id}`)
      .then(({ data }) => this.$store.commit('content/index', data))
      .catch(error => consola.error(error))
  }
}
</script>
