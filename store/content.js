export const state = () => ({
  index: {}
})

export const mutations = {
  index(state, payload) {
    state.index = payload
  }
}

export default {
  state,
  mutations
}
