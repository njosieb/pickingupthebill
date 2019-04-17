<template>
  <header>
    <container>
      <div class="flex justify-around items-center white pt1 georgia">
        <div class="nav-title">December 27, 2019</div>
        <div>
          <i class="fas fa-heart f2 heart hvr-grow"></i>
        </div>
        <div class="nav-title">#PickingUpTheBill</div>
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

.nav-title {
  font-style: italic;
  font-weight: bold;
  font-size: 1.5rem;
  color: $putty;
}
header {
  background-color: $bossanova;
  padding: 0.75rem 0;
}
</style>