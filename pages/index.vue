<template>
  <div class="sacramento">
    <header>
      <div class="container">
        <div id="nav">
          <nav id="nav-text" class="dt mw8">
            <div class="flex pb3">
              <div class="dtc w2-d v-mid f2 tc pr3">
                <strong>
                  <em>December 27, 2019</em>
                </strong>
              </div>
              <div>
                <i class="fas fa-heart f2 heart"></i>
              </div>
              <div class="dtc w2-d v-mid tc pl3 f2">
                <strong>
                  <em>#PickingUpTheBill</em>
                </strong>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div class="relative z-1">
            <div id="headerBackground" class="cover bg-left bg-center-l z-2"></div>
            <div id="title" class="tc bg-navy pt3 pb3">
              <div>
                <dot
                  v-for="(dot, index) in dots"
                  :key="index"
                  :size="dot.size"
                  :top="dot.top"
                  :left="dot.left"
                  :dot-id="index"
                />
                <h1 class="titleMargin f1">
                  <em>Bill & Kelly are Getting Married!</em>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="tc">
      <div id="purpleBorder" class="section2 pv3 borderBottom">
        <h1 class="f2 sectionTitle">
          <em>Schedule</em>
        </h1>
        <div class="flex justify-around bg-white pv4">
          <div>
            <h2 class="pb3">
              <em>Ceremony</em>
            </h2>
            <img class="churchPic" src="../assets/church.jpg">
            <h2 class="pt4 pb2">Our Lady of the Pillar</h2>
            <h4>
              401 South Lindbergh Blvd.
              <br>St. Louis, MO 63131
            </h4>
          </div>
          <div>
            <h2 class="pb3">
              <em>Reception</em>
            </h2>
            <img class="receptionPic" src="../assets/reception.jpg">
            <h2 class="pt4 pb2">Moolah Shrine Center</h2>
            <h4>
              12545 Fee Fee Road
              <br>St. Louis, MO 63146
            </h4>
          </div>
        </div>
      </div>
      <div class="section1 pv3 borderBottom">
        <h1 class="f2 sectionTitle">
          <em>Wedding Party</em>
        </h1>
        <div class="flex justify-around bg-white pv5 ph4 navy">
          <div class="pb2">
            <i class="fas fa-female person"></i>
            <h2 class="georgia">Maid of Honor</h2>
            <h3>Maureen 'Mo' Milford</h3>
            <div class="pt3">
              <i class="fas fa-female person"></i>
              <i class="fas fa-female person"></i>
              <i class="fas fa-female person"></i>
            </div>
            <h2 class="pt3 georgia">Bridesmaids</h2>
            <h3>Busy Philipps</h3>
            <h3>Angelique Cabral</h3>
            <h3>Zoey DeChanel</h3>
          </div>
          <div class="pb2">
            <i class="fas fa-male person"></i>
            <h2 class="georgia">Best Man</h2>
            <h3>Charlie Harris Jr.</h3>
            <div class="pt3">
              <i class="fas fa-male person"></i>
              <i class="fas fa-male person"></i>
              <i class="fas fa-male person"></i>
            </div>
            <h2 class="pt3 georgia">Groomsmen</h2>
            <h3>Mark Silverstein</h3>
            <h3>Oliver Hudson</h3>
            <h3>Christian Siriano</h3>
          </div>
        </div>
      </div>

      <div class="section2 pv3 borderBottom">
        <h1 class="f2 sectionTitle">
          <em>Travel & Accomodations</em>
        </h1>
        <div class="flex justify-around bg-white pv4">
          <div>
            <img id="hotel" src="../assets/hotel.jpg">
          </div>
        </div>
      </div>
      <div class="section1 pv3 borderBottom">
        <h1 class="f2 sectionTitle">
          <em>Registry</em>
        </h1>
        <div class="flex justify-around bg-white pv2">
          <div>
            <img class="logos" src="../assets/bbb.jpg">
          </div>
          <div>
            <img class="logos" src="../assets/macys.jpg">
          </div>
          <div>
            <img class="logos" src="../assets/crateandbarrel.jpg">
          </div>
        </div>
      </div>
      <div class="section2 pv3 borderBottom">
        <h1 class="f2 sectionTitle">
          <em>Photos</em>
        </h1>
        <div class="flex justify-around bg-white pv4 ph4">
          <div>
            <img class="photos" src="../assets/photo1.jpg">
          </div>
          <div>
            <img class="photos" src="../assets/photo2.jpg">
          </div>
          <div>
            <img class="photos" src="../assets/photo3.jpg">
          </div>
          <div>
            <img class="photos" src="../assets/photo4.jpg">
          </div>
        </div>
      </div>
      <div class="section1 pv1 borderBottom justify-around">
        <div>
          <div>
            <h1 class="f2 sectionTitle">
              <em>What to Do in The Lou</em>
            </h1>
            <div class="flex justify-around bg-white navy pv4 ph4">
              <div>
                <h3 class="pt3 pb2">Wild Lights at the Zoo</h3>
                <a href="https://www.stlzoo.org/events/calendarofevents">
                  <img class="photos" src="../assets/zoo.jpg">
                </a>
              </div>
              <div>
                <h3 class="pt3 pb2">Ice Skating at Steinberg Skating Rink</h3>
                <a href="http://www.steinbergskatingrink.com/iceskating/">
                  <img class="photos" src="../assets/steinberg.jpg">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dot from '../components/Dot.vue'
import dots from '../assets/data/dots.json'
export default {
  components: {
    Dot
  },
  data: function() {
    return {
      dots
    }
  }
}
</script>


<style>
.sectionTitle {
  font-size: 2.75rem;
}
.sacramento {
  font-family: 'Sacramento';
}
#hotel {
  max-width: 40%;
}
.arrow {
  font-size: 15px;
}
.person {
  font-size: 50px;
}
.heart {
  color: #d6158a;
}
.w2-d {
  width: 30rem;
}
#nav {
  background-color: #432650;
  display: flex;
  justify-content: center;
  border-top: 8px solid #001b44;
  border-bottom: 3px solid #ead39c;
  padding-top: 15px;
}
#nav-text {
  color: #ead39c;
  font-size: 24px;
}
.menu-text {
  color: #ead39c;
}
#headerBackground {
  background-image: url(~assets/crop.jpg);
  padding-top: 1px;
  height: 672px;
  border-bottom: 4px solid #ead39c;
}
.border-box {
  box-sizing: border-box;
}
.cover {
  background-size: cover !important;
}
#title {
  color: #ead39c;
}
.titleMargin {
  margin: 31px;
}
.section1 {
  background-color: #432650;
  color: #ead39c;
}
.section2 {
  background-color: #ead39c;
  color: #001b44;
}
.borderBottom {
  border-bottom: 5px solid #001b44;
}
#purpleBorder {
  border-top: 6px solid #432650;
}
.churchPic {
  height: 220px;
  width: 260px;
  border: 2px solid #001b44;
}
.receptionPic {
  height: 220px;
  width: 325px;
  border: 2px solid #001b44;
}
.photos {
  height: 340px;
  width: 350px;
  border: 2px solid #001b44;
  /* padding-left: 30px;
  padding-right: 30px; */
}
.logos {
  height: 240px;
  width: 330px;
  /* border: 2px solid #001b44; */
  /* margin-bottom: 3rem; */
  /* padding-left: 30px;
  padding-right: 30px; */
}
.pv3 {
  padding-top: 1rem;
  padding-bottom: 3rem;
}

/* #circle1 {
  top: 94%;
  left: 3%;
  height: 35px;
  width: 35px;
  @media (min-width: 900px) {
    top: 60%;
    left: -7%;
    height: 35px;
    width: 35px;
  }
}
#circle2 {
  top: 92%;
  left: 92%;
  height: 40px;
  width: 40px;
}
#circle3 {
  top: 87%;
  left: 14%;
  height: 45px;
  width: 45px;
  @media (min-width: 900px) {
    top: 2%;
    left: 50%;
    height: 50px;
    width: 50px;
  }
}
#circle4 {
  top: 87%;
  left: 77%;
  height: 30px;
  width: 30px;
  @media (min-width: 900px) {
    top: 16%;
    left: 115%;
    height: 60px;
    width: 60px;
  }
} */
</style>
