export const state = () => ({
  loggedIn: false
})

export const mutations = {
  setLoggedIn: (state, val) => {
    state.loggedIn = val
  }
}

export const actions = {
  enteredCorrectPassword: ({ commit }) => {
    commit('setLoggedIn', true)
    localStorage.setItem('loggedIn', JSON.stringify(true))
  }
}
