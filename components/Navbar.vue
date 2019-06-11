<template>
  <header
    class="sticky-header"
    :class="{'header-show-border': showBorder}"
    :style="{backgroundColor: showBackground?'seashell':'transparent'}"
  >
    <container>
      <div id="desktop-menu" class="flex justify-around items-center pt1 georgia">
        <nuxt-link class="nav-link hvr-grow-nav avenir" :to="{path: '/', hash: 'schedule'}">Schedule</nuxt-link>
        <nuxt-link
          class="nav-link hvr-grow-nav avenir"
          :to="{path: '/', hash: 'wedding-party'}"
        >Wedding Party</nuxt-link>
        <nuxt-link class="nav-link hvr-grow-nav avenir" :to="{path: '/', hash: 'hotels'}">Hotels</nuxt-link>
        <!-- <div class="nav-title">December 27, 2019</div> -->
        <!-- <div>
          <i class="fas fa-heart f2 heart hvr-grow"></i>
        </div>-->
        <nuxt-link
          class="flex-grow-1 tc nav-title hvr-grow"
          :to="{path: '/', hash: 'behind-polaroid'}"
        >#PickingUpTheBill</nuxt-link>
        <nuxt-link class="nav-link hvr-grow-nav avenir" :to="{path: '/', hash: 'registry'}">Registry</nuxt-link>
        <nuxt-link class="nav-link hvr-grow-nav avenir" :to="{path: '/', hash: 'photos'}">Photos</nuxt-link>
        <nuxt-link
          class="nav-link hvr-grow-nav avenir"
          :to="{path: '/', hash: 'things-to-do'}"
        >Things to Do</nuxt-link>
      </div>
    </container>
    <div class="dropdown w-100">
      <div id="mobile-nav" class="flex pv2 f3">
        <button class="bar-btn">
          <i class="fas fa-bars pl3 pointer"></i>
        </button>
        <div
          class="flex-grow-1 tr pr3 i georgia"
          :to="{path: '/', hash: 'behind-polaroid'}"
        >#PickingUpTheBill</div>
      </div>
      <div class="dropdown-content">
        <nuxt-link class="link white f3 nowrap dib" :to="{path: '/', hash: 'schedule'}">
          <i class="fas fa-place-of-worship menu-icons"/> Schedule
        </nuxt-link>
        <nuxt-link class="link white f3 nowrap dib" :to="{path: '/', hash: 'wedding-party'}">
          <i class="fas fa-users menu-icons"/> Wedding Party
        </nuxt-link>
        <nuxt-link class="link white f3 nowrap dib" :to="{path: '/', hash: 'hotels'}">
          <i class="fas fa-hotel menu-icons"/> Hotels
        </nuxt-link>
        <nuxt-link class="link white f3 nowrap dib" :to="{path: '/', hash: 'registry'}">
          <i class="fas fa-gift menu-icons"/> Registry
        </nuxt-link>
        <nuxt-link class="link white f3 nowrap dib" :to="{path: '/', hash: 'photos'}">
          <i class="fas fa-images menu-icons"/> Photos
        </nuxt-link>
        <nuxt-link class="link white f3 nowrap dib" :to="{path: '/', hash: 'things-to-do'}">
          <i class="fas fa-calendar-check menu-icons"/> Things To Do
        </nuxt-link>
      </div>
    </div>
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
        this.showBorder = false
      } else {
        //Navbar is not at the top & user has scrolled
        this.showBackground = true
        this.showBorder = true
      }
    }
  },
  data: function() {
    return {
      showBackground: false,
      showBorder: false
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/styles/variables';
.sticky-header {
  position: sticky;
  top: 0px;
  z-index: 2;
}

.bar-btn {
  background-color: transparent;
  border: 0;
}

#mobile-nav {
  background-color: $seashell;
  position: relative;
  z-index: 1;
  padding-left: 0;
  padding-right: 0;
  border-bottom: 5px solid $midnight;
  @media (min-width: 1000px) {
    display: none;
  }
}

#desktop-menu {
  display: none;
  @media (min-width: 1000px) {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    display: flex;
  }
}

.nav-link {
  color: $dark-red-violet;
  padding: 0 8px;
}

.nav-title {
  font-style: italic;
  font-weight: bold;
  font-size: 1.5rem;
  color: $midnight;
}
// .mobile-title {
//   display: flex;
//   align-content: right;
// }
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
  // display: none;
  @media (min-width: 1000px) {
    background-color: transparent;
    // padding: 0.75rem 0;
    position: sticky;
    top: 0px;
    z-index: 2;
    transition: background-color 0.5s ease-in-out;
  }
}
.seashell {
  background-color: $seashell;
}
.lightest-red-violet {
  background-color: $lightest-red-violet;
}
.header-show-border {
  border-bottom: 5px solid $midnight;
}
.dropdown-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: $seashell;
  min-width: 90px;
  min-height: 30px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
}
.dropdown {
  position: relative;
  display: inline-block;
}
/* Links inside the dropdown */
.dropdown-content a {
  color: $midnight;
  padding: 12px 16px;
  text-decoration: bold;
  display: block;
  z-index: 2;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: $lightest-red-violet;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: $seashell;
}
.menu-icons {
  color: $light-red-violet;
}
</style>