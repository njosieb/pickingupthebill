<template>
  <header>
    <container>
      <div class="flex justify-around items-center white pt1 georgia">
        <nuxt-link class="nav-link" :to="{path: '/', hash: 'schedule'}">Schedule</nuxt-link>
        <nuxt-link class="nav-link" :to="{path: '/', hash: 'wedding-party'}">Wedding Party</nuxt-link>
        <nuxt-link class="nav-link" :to="{path: '/', hash: 'hotels'}">Hotels</nuxt-link>
        <!-- <div class="nav-title">December 27, 2019</div> -->
        <!-- <div>
          <i class="fas fa-heart f2 heart hvr-grow"></i>
        </div>-->
        <div class="flex-grow-1 tc nav-title">#PickingUpTheBill</div>
        <nuxt-link class="nav-link" :to="{path: '/', hash: 'registry'}">Registry</nuxt-link>
        <nuxt-link class="nav-link" :to="{path: '/', hash: 'photos'}">Photos</nuxt-link>
        <nuxt-link class="nav-link" :to="{path: '/', hash: 'things-to-do'}">Things to Do</nuxt-link>
      </div>
    </container>
  </header>
</template>

<script>
import Container from '../components/Container'

export default {
  components: {
    Container
  }
  // data: function() {
  //   return {

  //   }
  //   }
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
  color: $putty;
}
header {
  background-color: transparent;
  padding: 0.75rem 0;
  position: sticky;
  top: 0px;
  z-index: 2;
}
</style>