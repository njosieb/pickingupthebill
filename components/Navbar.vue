<template>
  <header :style="{backgroundColor: showBackground?'white':'transparent'}">
    <container>
      <div class="flex justify-around items-center white pt1 georgia">
        <nuxt-link
          class="nav-link hvr-grow"
          :to="{path: '/', hash: 'schedule'}"
        >&nbsp;&nbsp;Schedule&nbsp;&nbsp;</nuxt-link>
        <nuxt-link
          class="nav-link hvr-grow"
          :to="{path: '/', hash: 'wedding-party'}"
        >&nbsp;&nbsp;Wedding Party&nbsp;&nbsp;</nuxt-link>
        <nuxt-link
          class="nav-link hvr-grow"
          :to="{path: '/', hash: 'hotels'}"
        >&nbsp;&nbsp;Hotels&nbsp;&nbsp;</nuxt-link>
        <!-- <div class="nav-title">December 27, 2019</div> -->
        <!-- <div>
          <i class="fas fa-heart f2 heart hvr-grow"></i>
        </div>-->
        <nuxt-link
          class="flex-grow-1 tc nav-title hvr-grow"
          :to="{path: '/', hash: 'behind-polaroid'}"
        >&nbsp;&nbsp;#PickingUpTheBill&nbsp;&nbsp;</nuxt-link>
        <nuxt-link
          class="nav-link hvr-grow"
          :to="{path: '/', hash: 'registry'}"
        >&nbsp;&nbsp;Registry&nbsp;&nbsp;</nuxt-link>
        <nuxt-link
          class="nav-link hvr-grow"
          :to="{path: '/', hash: 'photos'}"
        >&nbsp;&nbsp;Photos&nbsp;&nbsp;</nuxt-link>
        <nuxt-link
          class="nav-link hvr-grow"
          :to="{path: '/', hash: 'things-to-do'}"
        >&nbsp;&nbsp;Things to Do&nbsp;&nbsp;</nuxt-link>
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
header {
  background-color: transparent;
  padding: 0.75rem 0;
  position: sticky;
  top: 0px;
  z-index: 2;
  transition: background-color 0.5s ease-in-out;
}
</style>