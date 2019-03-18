<template>
  <section class="container">
    <el-select v-model="selected" placeholder="Select">
      <el-option
        v-for="tag in tags"
        :key="tag._id"
        :label="tag.name"
        :value="tag._id"
      />
    </el-select>

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
    selected: {
      get() {
        return this.$store.state.tag.selected
      },
      set(value) {
        this.$store.commit('tag/selected', value)
      }
    },
    tags() {
      return this.$store.state.tag.index
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

  mounted() {
    this.active = this.$route.path
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
