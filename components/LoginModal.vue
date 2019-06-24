<template>
  <div class="min-vh-100 modal modal-background">
    <form class="pa4 container flex justify-center wedding-party">
      <div class="measure-narrow-l flex flex-column">
        <h1 class="tc f2 welcome">
          Welcome to
          <br>Bill & Kelly's Wedding Website!
        </h1>
        <label for="password" class="f4 db mb2 tc pb3">Please Enter Password from the Save the Date!</label>
        <input
          class="input-reset ba b--black-20 pa2 mb2 db w-100 outline-none tc"
          type="text"
          id="password"
          aria-describedby="password-desc"
          v-model="openSesame"
          @keyup.enter="tryToLogin"
          v-bind:class="{ error: isWrong }"
          placeholder="Enter Password Here!"
        >
        <!-- <input type="text" v-model="openSesame"> -->
        <button
          type="submit"
          @click="tryToLogin"
          class="justify-center login-button center shadow-hover"
        >Go to Website!</button>
        <small id="password-desc" class="f3 pt4 lh-copy db mb2 tc">#PickingUpTheBill</small>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      openSesame: '',
      isWrong: false
    }
  },
  methods: {
    ...mapActions(['enteredCorrectPassword']),
    tryToLogin() {
      if (this.openSesame === process.env.openSesame) {
        // TODO: log the user in
        console.log('You logged in!')
        this.enteredCorrectPassword()
      } else {
        // TODO: display an error message
        this.isWrong = true
        // this.hasError = true
        // alert('Looks like you entered the wrong password! Please try again!')
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables';
/* Password styles */
.outline-none {
  outline: none;
}
#password-desc {
  color: $bossanova;
  line-height: 1.5;
}
.ba {
  border-style: solid;
  border-width: 1px;
}

.b--black-20 {
  border-color: rgba(0, 0, 0, 0.2);
}

.db {
  display: block;
}

.b {
  font-weight: bold;
}

.input-reset {
  -webkit-appearance: none;
  -moz-appearance: none;
}

.input-reset::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.lh-copy {
  line-height: 1.5;
}

.w-100 {
  width: 100%;
}

/* .black-80 {
  color: rgba(0, 0, 0, 0.8);
}

.black-60 {
  color: rgba(0, 0, 0, 0.6);
} */

.pa2 {
  padding: 0.5rem;
}

.pa4 {
  padding: 2rem;
}

.mb2 {
  margin-bottom: 0.5rem;
}

.f6 {
  font-size: 0.875rem;
}

.measure-narrow {
  max-width: 20em;
  margin-left: 75px;
}
.login-button {
  background-color: $midnight;
  color: $seashell;
  font-size: x-large;
  font-family: helvetica;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  padding: 1rem;
  letter-spacing: 0.5px;
}
.modal {
  padding-top: 10%;
  padding-bottom: 26%;
  color: $midnight;
  font-family: Arial, Helvetica, sans-serif;
}

.modal-background {
  background-image: url(~assets/lights.jpg);
  background-size: cover;
}
.welcome {
  color: $dark-red-violet;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
}
.error {
  border: 2px solid #b00020;
}
</style>
