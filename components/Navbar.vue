<template>
  <header :style="{backgroundColor: showBackground?'seashell':'transparent'}">
    <container>
      <div class="flex justify-around items-center pt1 georgia">
        <nuxt-link class="nav-link hvr-grow-nav" :to="{path: '/', hash: 'schedule'}">Schedule</nuxt-link>
        <nuxt-link
          class="nav-link hvr-grow-nav"
          :to="{path: '/', hash: 'wedding-party'}"
        >Wedding Party</nuxt-link>
        <nuxt-link class="nav-link hvr-grow-nav" :to="{path: '/', hash: 'hotels'}">Hotels</nuxt-link>
        <!-- <div class="nav-title">December 27, 2019</div> -->
        <!-- <div>
          <i class="fas fa-heart f2 heart hvr-grow"></i>
        </div>-->
        <nuxt-link
          class="flex-grow-1 tc nav-title hvr-grow"
          :to="{path: '/', hash: 'behind-polaroid'}"
        >#PickingUpTheBill</nuxt-link>
        <nuxt-link class="nav-link hvr-grow-nav" :to="{path: '/', hash: 'registry'}">Registry</nuxt-link>
        <nuxt-link class="nav-link hvr-grow-nav" :to="{path: '/', hash: 'photos'}">Photos</nuxt-link>
        <nuxt-link
          class="nav-link hvr-grow-nav"
          :to="{path: '/', hash: 'things-to-do'}"
        >Things to Do</nuxt-link>
      </div>
    </container>
  </header>
</template>

<script>
import Container from '../components/Container'
import throttle from 'lodash/throttle'

export default {
  components: {
    Container
  },
  mounted: function() {
    window.addEventListener('scroll', throttle(this.onWindowScroll, 500))
  },
  methods: {
    onWindowScroll: function() {
      if (this.$el.offsetTop === 0) {
        //Navbar is at the top
        this.showBackground = false
      } else {
        //Navbar is not at the top & user has scrolled
        this.showBackground = true
      }
    }
  },
  data: function() {
    return {
      showBackground: false
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/styles/variables';

.nav-link {
  color: $light-red-violet;
  padding: 0 8px;
}

.nav-title {
  font-style: italic;
  font-weight: bold;
  font-size: 1.5rem;
  color: $dark-putty;
}
/* Grow */
.hvr-grow-nav {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.hvr-grow-nav:hover,
.hvr-grow-nav:focus,
.hvr-grow-nav:active {
  transform: scale(1.1);
  border-bottom: 2px solid $red-violet;
}
header {
  background-color: transparent;
  padding: 0.75rem 0;
  position: sticky;
  top: 0px;
  z-index: 2;
  transition: background-color 0.5s ease-in-out;
  border-bottom: 7px solid $midnight;
}
.seashell {
  background-color: $seashell;
}
.lightest-red-violet {
  background-color: $lightest-red-violet;
}
</style>