<template>
  <div class="sacramento">
    <!-- <dot
              v-for="(dot, index) in dots"
              :key="index"
              :size="dot.size"
              :top="dot.top"
              :left="dot.left"
              :dot-id="index"
    />-->
    <navbar></navbar>
    <section id="behind-polaroid" class="pv4">
      <container class="relative z-1">
        <div class="polaroid-frame">
          <div id="header-picture" class="cover bg-left bg-center-l z-2">
            <img src="~assets/header.jpg">
          </div>
          <div id="title-box" class="tc">
            <h1 class="polaroid-title f1 mv0">Bill & Kelly are Getting Married!</h1>
          </div>
        </div>
        <div id="button-div" class="flex justify-center georgia">
          <a class="hvr-grow" href="https://www.zola.com/wedding/pickingupthebill" target="_blank">
            <button class="pa2 border-showcase shadow-hover">
              <div class="bg-white navy pa2 border-showcase">
                <i class="far fa-laugh-beam"></i>
                &nbsp;How We Met!
              </div>
            </button>
          </a>

          <a class="hvr-grow" href="https://www.zola.com/wedding/pickingupthebill" target="_blank">
            <button class="pa2 border-showcase shadow-hover">
              <div class="bg-white navy pa2 border-showcase">
                <i class="far fa-grin-hearts"></i>
                &nbsp;The Proposal!
              </div>
            </button>
          </a>
        </div>
      </container>
    </section>
    <section id="purpleBorder" class="tc section2 borderBottom">
      <container>
        <div class="pv3">
          <h1 class="f2 sectionTitle1">
            <i class="fas fa-clipboard-list sectionIcon1"></i>
            &nbsp;&nbsp;Schedule&nbsp;&nbsp;
            <i
              class="fas fa-clipboard-list sectionIcon1"
            ></i>
          </h1>
          <div class="seashell pv2 border-shadow">
            <div class="polaroid-frame">
              <img class="churchPic" src="../assets/church.jpg">
              <h2 class="f2 pb2">Ceremony</h2>

              <h2 class="pt2 pb2 f2">Our Lady of the Pillar</h2>
              <h4 class="georgia pb3">
                401 South Lindbergh Blvd.
                <br>St. Louis, MO 63131
                <br>(314) 993-2280
              </h4>
              <a href="https://www.olpillar.com/" target="_blank">
                <button class="shadow-hover pt2 pb1 w-80 bg-navy white hvr-grow">Take Me to Church!</button>
              </a>
            </div>
            <div class="flex justify-around items-center">
              <i class="pt4 f1 fas fa-heart mid-fa-heart"></i>
              <i class="pt4 f3 fas fa-heart purple"></i>
              <i class="pt4 f1 fas fa-heart"></i>
              <i class="pt4 f3 fas fa-heart purple"></i>
              <i class="pt4 f1 fas fa-heart mid-fa-heart"></i>
            </div>
            <div>
              <div class="polaroid-frame">
                <img class="receptionPic" src="../assets/reception.jpg">
                <h2 class="pt2 pb3 f2">Reception</h2>

                <h2 class="pb2 f2">Moolah Shrine Center</h2>
                <h4 class="georgia pb3">
                  12545 Fee Fee Road
                  <br>St. Louis, MO 63146
                  <br>(314) 878-6301
                </h4>
                <a href="https://www.moolah.org/" target="_blank">
                  <button class="shadow-hover hvr-grow bg-navy white pt2 pb1 w-80">More Info!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </container>
    </section>
    <section class="section1 tc pv3 borderBottom">
      <container>
        <h1 class="f2 sectionTitle2">
          <i class="fas fa-users sectionIcon2"></i>
          &nbsp; &nbsp; Wedding Party &nbsp;&nbsp;
          <i class="fas fa-users sectionIcon2"></i>
        </h1>
        <div class="border-shadow">
          <div class="flex justify-around wedding-party pv5 ph4 navy bg-white">
            <div class="pa3 z-2 border-shadow wedding-party-box">
              <i class="fas fa-female person pb3"></i>
              <h2 class="f2">Maid of Honor</h2>
              <h3 class="georgia">Maureen 'Mo' Milford</h3>
              <div class="pt4">
                <i class="fas fa-female person"></i>
                <i class="fas fa-female person"></i>
                <i class="fas fa-female person"></i>
              </div>
              <h2 class="pt3 f2">Bridesmaids</h2>
              <h3 class="georgia">Busy Philipps</h3>
              <h3 class="georgia">Angelique Cabral</h3>
              <h3 class="georgia">Zoey DeChanel</h3>
            </div>
            <div class="pa3 z-2 border-shadow wedding-party-box">
              <i class="fas fa-male person pb3"></i>
              <h2 class="f2">Best Man</h2>
              <h3 class="georgia">Charlie Harris Jr.</h3>
              <div class="pt4">
                <i class="fas fa-male person"></i>
                <i class="fas fa-male person"></i>
                <i class="fas fa-male person"></i>
              </div>
              <h2 class="pt3 f2">Groomsmen</h2>
              <h3 class="georgia">Mark Silverstein</h3>
              <h3 class="georgia">Oliver Hudson</h3>
              <h3 class="georgia">Christian Siriano</h3>
            </div>
          </div>
        </div>
      </container>
    </section>

    <section class="section2 pv3 tc borderBottom">
      <container>
        <h1 class="f2 sectionTitle1">
          <i class="fas fa-hotel sectionIcon1"></i>
          &nbsp;&nbsp;&nbsp;Travel & Accomodations&nbsp;&nbsp;&nbsp;
          <i
            class="fas fa-hotel sectionIcon1"
          ></i>
        </h1>
        <div class="seashell pv2 border-shadow">
          <div class="polaroid-frame">
            <img id="hotel" src="../assets/hotel.jpg" class="border-showcase">
            <h1>Hotel St. Louis</h1>

            <h3 class="georgia pt0 pb4">
              12345 Not Sure Lane
              <br>St. Louis, MO 63110
              <br>(314) 555-2255
            </h3>
            <a href="https://www.hotels.com" target="_blank">
              <button class="bg-navy white hvr-grow shadow-hover pv2 w-90">Book Your Room!</button>
            </a>
          </div>
        </div>
      </container>
    </section>
    <section class="section1 tc pv3 borderBottom">
      <container>
        <h1 class="f2 sectionTitle2">
          <i class="fas fa-gift sectionIcon2"></i>
          &nbsp;Registry&nbsp;
          <i class="fas fa-gift sectionIcon2"></i>
        </h1>
        <div class="flex justify-around seashell pv2 border-shadow flex-wrap">
          <a class="registry-frame hvr-grow" href="https://www.macys.com" target="_blank">
            <img class="logos" src="../assets/macys.jpg">
          </a>
          <a
            class="registry-frame hvr-grow"
            href="https://www.bedbathandbeyond.com/"
            target="_blank"
          >
            <img class="logos" src="../assets/bbb.jpg">
          </a>
          <a class="registry-frame hvr-grow" href="https://www.crateandbarrel.com/" target="_blank">
            <img class="logos" src="../assets/crateandbarrel.jpg">
          </a>
        </div>
      </container>
    </section>
    <section class="section2 pv3 tc borderBottom">
      <container>
        <h1 class="f2 sectionTitle1">
          <i class="far fa-images sectionIcon1"></i>
          &nbsp;&nbsp;Photos&nbsp;&nbsp;
          <i class="far fa-images sectionIcon1"></i>
        </h1>
        <div class="flex justify-around seashell pv4 ph3 flex-column border-shadow">
          <div class="polaroid-frame hvr-grow">
            <img class="photos" src="../assets/photo1.jpg">
            <h2 class="caption">Being cute at some fun event!</h2>
          </div>
          <div class="polaroid-frame hvr-grow">
            <img class="photos" src="../assets/photo2.jpg">
            <h2 class="caption">Being cute at the Blues Festival!</h2>
          </div>
          <div class="polaroid-frame hvr-grow">
            <img class="photos" src="../assets/photo3.jpg">
            <h2 class="caption">Being cute in the cold!</h2>
          </div>
          <div class="polaroid-frame hvr-grow">
            <img class="photos" src="../assets/photo4.jpg">
            <h2 class="caption">Being cute in nature!</h2>
          </div>
        </div>
      </container>
    </section>
    <section class="section1 pv5 tc borderBottom justify-around">
      <container>
        <div>
          <h1 class="f2 sectionTitle2">
            <i class="far fa-calendar-check sectionIcon2"></i>
            &nbsp;&nbsp;&nbsp; What to Do in The Lou&nbsp;&nbsp;&nbsp;
            <i
              class="far fa-calendar-check sectionIcon2"
            ></i>
          </h1>
          <div class="flex justify-around seashell navy flex-nowrap georgia border-shadow">
            <div>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/zoo.jpg">
                <h2 class="pt2 pb2">Wild Lights at The St. Louis Zoo</h2>
                <h3 class="pb4 pt2">
                  Government Drive
                  <br>St. Louis, MO 63110
                  <br>(314) 781-0900
                </h3>
                <a href="https://www.stlzoo.org/events/calendarofevents" target="_blank">
                  <button class="w-90 bg-navy white shadow-hover hvr-grow">More Info!</button>
                </a>
              </div>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/steinberg.jpg">
                <h2 class="pt4 pb2">Steinberg Skating Rink</h2>
                <h3 class="pb4 pt2">
                  400 Jefferson Drive
                  <br>St. Louis, MO 63110
                  <br>(314) 367-7465
                </h3>
                <a href="http://www.steinbergskatingrink.com/iceskating/" target="_blank">
                  <button class="w-90 bg-navy white shadow-hover hvr-grow">More info!</button>
                </a>
              </div>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/slam.jpg">
                <h2 class="pt4 pb2">St. Louis Art Museum</h2>

                <h3 class="pb4 pt2">
                  1 Fine Arts Drive
                  <br>St. Louis, MO 63110
                  <br>(314) 721-0072
                </h3>
                <a href="https://www.slam.org/" target="_blank">
                  <button class="w-90 bg-navy white shadow-hover hvr-grow">More Info!</button>
                </a>
              </div>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/city.jpg">
                <!-- <div> -->
                <h2 class="pt4 pb2">City Museum St. Louis</h2>
                <h3 class="pb4 pt2">
                  750 North 16th
                  <br>St. Louis, MO 63103
                  <br>(314) 231-2489
                </h3>
                <a href="https://www.citymuseum.org/" target="_blank">
                  <button class="w-90 bg-navy white shadow-hover hvr-grow">More Info!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </container>
    </section>
    <footer class="flex items-center">
      <container>
        <div class="footer">
          <div class="f3">
            Made with
            <i class="fas fa-heart f2 heart"></i>
            by
            <a
              class="hvr-grow"
              href="https://sahmtothedom.com"
              target="_blank"
            >&nbsp;NJH Designs&nbsp;</a>
          </div>
        </div>
      </container>
    </footer>
  </div>
</template>

<script>
import Dot from '../components/Dot.vue'
import dots from '../assets/data/dots.json'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Footer from '../components/Footer'
export default {
  components: {
    Dot,
    Navbar,
    Container,
    Footer
  },
  data: function() {
    return {
      dots
    }
  }
}
</script>


<style lang="scss">
@import '~assets/styles/variables';
.caption {
  color: $midnight;
  padding: 0 auto;
  font-size: 30px;
}

.mid-fa-heart {
  color: $red-violet;
}
a {
  text-decoration: none;
  color: $midnight;
}
/* Grow */
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.1);
}
footer {
  height: 80px;
  background-color: $putty;
  text-align: left;
}

.border-shadow {
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
}
.polaroid-frame {
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
  padding: 22px;
  width: 450px;
  margin: 4rem auto;
  background-color: white;
}
.registry-frame {
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
  padding: 22px;
  width: 280px;
  height: 215px;
  margin: 4rem auto;
  background-color: white;
}
#behind-polaroid {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(~assets/lights.jpg);
    background-size: cover;
    filter: blur(2px);
  }
}
.wedding-party {
  background-color: $seashell;
}
.wedding-party-box {
  width: 30%;
  background-color: white;
}
.activity {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(~assets/bricks.jpg);
    background-size: cover;
    filter: blur(2px);
  }
}
hr {
  width: 80%;
  margin: 0 auto;
}
button {
  // background-color: $putty;
  color: $midnight;
  background-color: $seashell;
  font-size: x-large;
}
#button-div {
  justify-content: space-between;
}
img {
  max-width: 100%;
  height: auto;
}
.container {
  max-width: 34rem;
  margin: 0 auto;
}
.sectionTitle1 {
  font-size: 3rem;
  color: $bossanova;
}
.sectionTitle2 {
  font-size: 3rem;
  color: $putty;
}
.sectionIcon1 {
  font-size: 2.75rem;
  color: $midnight;
}
.sectionIcon2 {
  font-size: 2.75rem;
  color: $red-violet;
}
.sacramento {
  font-family: 'Sacramento';
}
.seashell {
  background-color: $seashell;
}
#hotel {
  max-width: 70%;
}
.border-showcase {
  border: 2px solid $midnight;
}
.arrow {
  font-size: 15px;
}
.person {
  font-size: 50px;
}
.heart {
  color: $red-violet;
}
.w2-d {
  width: 30rem;
}
#nav {
  display: flex;
  justify-content: center;
  border-top: 8px solid $midnight;
  border-bottom: 3px solid $putty;
  padding-top: 15px;
}
#nav-text {
  color: $putty;
  font-size: 24px;
}
.menu-text {
  color: $putty;
}
#header-picture {
  height: 400px;
  overflow: hidden;
  margin: 0 auto;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.border-box {
  box-sizing: border-box;
}
.cover {
  background-size: cover !important;
}
#title-box {
  color: $midnight;
  margin: 0 auto;
  padding-top: 22px;
  font-size: 28px;
  line-height: 1.5;
}
.polaroid-title {
  font-size: 28px;
  line-height: 1.5;
}
.section1 {
  background-color: $bossanova;
  color: $putty;
}
.section2 {
  background-color: $putty;
  color: $midnight;
}
.borderBottom {
  border-bottom: 5px solid $midnight;
}
#purpleBorder {
  border-top: 6px solid $bossanova;
}
.churchPic {
  height: 330px;
  width: 325px;
  border: 2px solid $midnight;
}
.receptionPic {
  height: 275px;
  width: 380px;
  border: 2px solid $midnight;
}
.photos {
  height: 400px;
  width: 400px;
  padding-top: 15px;
  padding-bottom: 10px;
  object-fit: cover;
  /* padding-left: 30px;
  padding-right: 30px; */
}
.logos {
  height: 180px;
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
