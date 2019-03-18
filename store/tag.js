export const state = () => ({
  index: [],
  selected: ''
})

export const mutations = {
  index(state, payload) {
    state.index = payload
  },
  selected(state, payload) {
    state.selected = payload
  }
}

export default {
  state,
  mutations
}
