/**
 * TODO:
 * 1. Display a login modal instead of the main page
 * 2. On entering the correct password, reveal the main page
 * 3. If the user has recently entered the password, don't show login modal
 */
export const state = () => ({
  loggedIn: false
})

export const mutations = {
  setLoggedIn: (state, val) => {
    state.loggedIn = val
  }
}
