export const state = () => ({
  loggedIn: false
})

export const mutations = {
  setLoggedIn: (state, val) => {
    state.loggedIn = val
  }
}

export const actions = {
  async enteredCorrectPassword({ commit }) {
    await this.$firebase.auth().signInAnonymously()
    commit('setLoggedIn', true)
  }
}
