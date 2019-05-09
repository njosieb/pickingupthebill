<template>
  <div>
    <h1>Hello World!</h1>
    <input type="text" v-model="openSesame">
    <button type="submit" @click="tryToLogin">Submit</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      openSesame: ''
    }
  },
  methods: {
    ...mapMutations(['setLoggedIn']),
    tryToLogin() {
      if (this.openSesame === 'BillAndKellyAreAwesome') {
        // TODO: log the user in
        console.log('You logged in!')
        this.setLoggedIn(true)
      } else {
        // TODO: display an error message
        console.log('Intruder Alert!')
      }
    }
  }
}
</script>
