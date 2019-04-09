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
          <a href="https://www.zola.com/wedding/pickingupthebill" target="_blank">
            <button class="pa3 hover-bg-navy hover-white border-showcase">
              <i class="far fa-laugh-beam"></i>
              &nbsp;How We Met!
            </button>
          </a>
          <a href="https://www.zola.com/wedding/pickingupthebill" target="_blank">
            <button class="pa3 hover-bg-navy hover-white border-showcase">
              <i class="far fa-grin-hearts"></i>
              &nbsp;The Proposal!
            </button>
          </a>
        </div>
      </container>
    </section>
    <section id="purpleBorder" class="tc section2 borderBottom">
      <container>
        <div class="pv3">
          <h1 class="f2 sectionTitle1">
            <i class="fas fa-clipboard-list"></i>
            &nbsp;&nbsp;Schedule&nbsp;&nbsp;
            <i class="fas fa-clipboard-list"></i>
          </h1>
          <div class="seashell pv4 border-shadow">
            <div>
              <h2 class="pb3 f2">Ceremony</h2>
              <a href="https://www.olpillar.com/" target="_blank">
                <img class="churchPic" src="../assets/church.jpg">
              </a>
              <h2 class="pt4 pb2 f2">Our Lady of the Pillar</h2>
              <h4 class="georgia pb3">
                401 South Lindbergh Blvd.
                <br>St. Louis, MO 63131
                <br>(314) 993-2280
              </h4>
            </div>
            <div class="flex justify-around items-center">
              <i class="pt4 f1 fas fa-heart"></i>
              <i class="pt4 f3 fas fa-heart purple"></i>
              <i class="pt4 f1 fas fa-heart"></i>
              <i class="pt4 f3 fas fa-heart purple"></i>
              <i class="pt4 f1 fas fa-heart"></i>
            </div>
            <div>
              <h2 class="pt4 pb3 f2">Reception</h2>
              <a href="https://www.moolah.org/" target="_blank">
                <img class="receptionPic" src="../assets/reception.jpg">
              </a>
              <h2 class="pt4 pb2 f2">Moolah Shrine Center</h2>
              <h4 class="georgia">
                12545 Fee Fee Road
                <br>St. Louis, MO 63146
                <br>(314) 878-6301
              </h4>
            </div>
          </div>
        </div>
      </container>
    </section>
    <section class="section1 tc pv3 borderBottom">
      <container>
        <h1 class="f2 sectionTitle2">
          <i class="fas fa-users"></i>
          &nbsp; &nbsp; Wedding Party &nbsp;&nbsp;
          <i class="fas fa-users"></i>
        </h1>
        <div class="border-shadow">
          <div class="flex justify-around wedding-party pv5 ph4 navy">
            <div class="pa3 seashell z-2 border-showcase">
              <i class="fas fa-female person pb3 purple"></i>
              <h2 class="f2">Maid of Honor</h2>
              <h3 class="georgia">Maureen 'Mo' Milford</h3>
              <div class="pt4">
                <i class="fas fa-female person purple"></i>
                <i class="fas fa-female person purple"></i>
                <i class="fas fa-female person purple"></i>
              </div>
              <h2 class="pt3 f2">Bridesmaids</h2>
              <h3 class="georgia">Busy Philipps</h3>
              <h3 class="georgia">Angelique Cabral</h3>
              <h3 class="georgia">Zoey DeChanel</h3>
            </div>
            <div class="pa3 ml1 mr1 seashell z-2 border-showcase">
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
          <i class="fas fa-hotel"></i>
          &nbsp;&nbsp;&nbsp;Travel & Accomodations&nbsp;&nbsp;&nbsp;
          <i
            class="fas fa-hotel"
          ></i>
        </h1>
        <div class="flex justify-around seashell pv4 border-shadow">
          <div>
            <h1>Hotel St. Louis</h1>
            <img id="hotel" src="../assets/hotel.jpg" class="border-showcase">
            <h3 class="georgia pt2">
              12345 Not Sure Lane
              <br>St. Louis, MO 63110
              <br>(314) 555-2255
            </h3>
          </div>
        </div>
      </container>
    </section>
    <section class="section1 tc pv3 borderBottom">
      <container>
        <h1 class="f2 sectionTitle2">
          <i class="fas fa-gift"></i>
          &nbsp;Registry&nbsp;
          <i class="fas fa-gift"></i>
        </h1>
        <div class="flex justify-around seashell pv2 border-shadow">
          <div>
            <a href="https://www.macys.com" target="_blank">
              <img class="logos" src="../assets/macys.jpg">
            </a>
          </div>
          <div>
            <a href="https://www.bedbathandbeyond.com/" target="_blank">
              <img class="logos" src="../assets/bbb.jpg">
            </a>
          </div>
          <div>
            <a href="https://www.crateandbarrel.com/" target="_blank">
              <img class="logos" src="../assets/crateandbarrel.jpg">
            </a>
          </div>
        </div>
      </container>
    </section>
    <section class="section2 pv3 tc borderBottom">
      <container>
        <h1 class="f2 sectionTitle1">
          <i class="far fa-images"></i>
          &nbsp;&nbsp;Photos&nbsp;&nbsp;
          <i class="far fa-images"></i>
        </h1>
        <div class="flex justify-around seashell pv4 ph4 flex-wrap border-shadow">
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
      </container>
    </section>
    <section class="section1 pv1 tc borderBottom justify-around">
      <container>
        <div>
          <h1 class="f2 sectionTitle2">
            <i class="far fa-calendar-check"></i>
            &nbsp;&nbsp;&nbsp; What to Do in The Lou&nbsp;&nbsp;&nbsp;
            <i
              class="far fa-calendar-check"
            ></i>
          </h1>
          <div class="flex justify-around seashell navy container flex-wrap georgia border-shadow">
            <div>
              <div>
                <h2 class="pt4 pb2">Wild Lights at The St. Louis Zoo</h2>
                <a href="https://www.stlzoo.org/events/calendarofevents" target="_blank">
                  <img class="photos" src="../assets/zoo.jpg">
                </a>
                <div>
                  <h3 class="pb4">
                    Government Drive
                    <br>St. Louis, MO 63110
                    <br>(314) 781-0900
                  </h3>
                </div>
              </div>
              <hr>
              <div>
                <h2 class="pt4 pb2">Steinberg Skating Rink</h2>
                <a href="http://www.steinbergskatingrink.com/iceskating/" target="_blank">
                  <img class="photos" src="../assets/steinberg.jpg">
                </a>
                <div>
                  <h3 class="pb4">
                    400 Jefferson Drive
                    <br>St. Louis, MO 63110
                    <br>(314) 367-7465
                  </h3>
                </div>
              </div>
              <hr>
              <div>
                <h2 class="pt4 pb2">St. Louis Art Museum</h2>
                <a href="https://www.slam.org/" target="_blank">
                  <img class="photos" src="../assets/slam.jpg">
                </a>
                <div>
                  <h3 class="pb4">
                    1 Fine Arts Drive
                    <br>St. Louis, MO 63110
                    <br>(314) 721-0072
                  </h3>
                </div>
              </div>
              <hr>
              <div>
                <h2 class="pt4 pb2">City Museum St. Louis</h2>
                <a href="https://www.citymuseum.org/" target="_blank">
                  <img class="photos" src="../assets/city.jpg">
                </a>
                <div>
                  <h3 class="pb4">
                    750 North 16th
                    <br>St. Louis, MO 63103
                    <br>(314) 231-2489
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </container>
    </section>
  </div>
</template>

<script>
import Dot from '../components/Dot.vue'
import dots from '../assets/data/dots.json'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
export default {
  components: {
    Dot,
    Navbar,
    Container
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

.border-shadow {
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
}
.polaroid-frame {
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
  padding: 22px;
  width: 400px;
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
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(~assets/bridesmaids.jpg);
    background-size: cover;
    filter: blur(2px);
  }
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
  font-size: 2.75rem;
  color: $bossanova;
}
.sectionTitle2 {
  font-size: 2.75rem;
  color: $putty;
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
