<template>
  <div>
    <login-modal v-if="!loggedIn"></login-modal>
    <div v-if="loggedIn" class="sacramento">
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
              <img src="~assets/header1.jpg">
            </div>
            <div id="title-box" class="tc">
              <h1 class="polaroid-title f1 mv0 header-pol-font">Bill & Kelly are Getting Married!</h1>
            </div>
          </div>
        </container>
      </section>
      <section class="bg-navy overflow-auto white">
        <container>
          <h1 class="f2 white tc pt3">
            <i class="fas fa-book-open light-red-violet"></i>&nbsp;&nbsp;&nbsp;Our Story&nbsp;&nbsp;
            <i class="fas fa-book-open light-red-violet"></i>
          </h1>
          <div class="tab-container">
            <div class="avenir pb3 tabs flex justify-around measure-wide-l center">
              <div class="tab shadow-hover" @click="tabToggle(0)">
                <i class="far fa-laugh-beam"></i>
                &nbsp;How We Met
              </div>
              <div class="tab shadow-hover" @click="tabToggle(1)">
                <i class="far fa-grin-hearts"></i>
                &nbsp;The Proposal
              </div>
            </div>
            <div class="story">
              <p
                class="avenir pb5 measure-wide-l lh-copy ph0-ns ph4 center"
              >{{ stories[activeTab] }}</p>
            </div>
          </div>
        </container>
      </section>
      <section class="tc section2 borderBottom">
        <container>
          <div id="schedule" class="pv3">
            <div class="seashell pv1 border-shadow">
              <h1 class="f2 sectionTitle1">
                <!-- <i class="fas fa-clipboard-list sectionIcon1"></i> -->
                <i class="fas fa-place-of-worship sectionIcon1"></i>
                &nbsp;&nbsp;Schedule&nbsp;&nbsp;
                <!-- <i
                class="fas fa-clipboard-list sectionIcon1"
                ></i>-->
                <i class="fas fa-place-of-worship sectionIcon1"></i>
              </h1>
              <h2 class="georgia f3 pt3">
                Wedding Mass
                <br>Friday, December 27, 2019
                <br>at 6:30 PM
              </h2>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/pillar.jpg">
                <!-- <h2 class="f2">Ceremony</h2> -->

                <h2 class="pt1 pb2 f2">Our Lady of the Pillar</h2>
                <h5 class="georgia pb1">
                  401 S. Lindbergh Blvd. | St. Louis, MO 63131
                  <br>(314) 993-2280
                </h5>
              </div>
              <div>
                <a href="https://www.olpillar.com/" target="_blank">
                  <button class="shadow-hover pv2 bg-navy white hvr-grow button">Take Me to Church</button>
                </a>
              </div>
              <div class="flex justify-center items-center pb3">
                <i class="pt4 f3 fas fa-heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f1 fas fa-heart heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f3 fas fa-heart"></i>
              </div>
              <div>
                <h2 class="georgia t2 pt3 pb1 f3">
                  Wine & Dessert
                  Reception
                  <br>at 8pm
                </h2>
                <div class="polaroid-frame">
                  <img class="photos" src="../assets/reception.jpg">

                  <h2 class="pt1 f2">Moolah Shrine Center</h2>
                  <h5 class="georgia pb1">
                    12545 Fee Fee Road | St. Louis, MO 63146
                    <br>(314) 878-6301
                  </h5>
                </div>
                <div>
                  <a href="https://www.moolah.org/" target="_blank">
                    <button
                      class="shadow-hover hvr-grow bg-navy white pt2 pb2 button"
                    >More Information</button>
                  </a>
                </div>
                <div class="flex justify-center items-center pt3 pb3">
                  <i class="pt4 f3 fas fa-heart"></i>
                  <i class="pt4 f2 fas fa-heart bossanova"></i>
                  <i class="pt4 f1 fas fa-heart heart"></i>
                  <i class="pt4 f2 fas fa-heart bossanova"></i>
                  <i class="pt4 f3 fas fa-heart"></i>
                </div>
                <div class="center w-50-l pt0">
                  <h3
                    class="bg-navy white pt3 pb1 f2 pr3 sacramento ttc"
                  >&nbsp;&nbsp;&nbsp;Suggest a song!</h3>
                  <div class="bg-navy white pa3">
                    <i class="fas fa-music music-icons f3"></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      v-model="suggestedSong"
                      class="helvetica"
                      type="text"
                    >&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-music music-icons f3"></i>
                    <div>
                      <button class="hvr-grow pointer bg-white pv1 mt3" @click="onSuggest">Submit</button>
                      <div v-if="submissionSuccess">Thank you for suggesting a song!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </container>
      </section>
      <section id="wedding-party" class="section1 tc pv3 borderBottom">
        <container>
          <div class="border-shadow wedding-party pt2">
            <h1 class="f2 sectionTitle2">
              <i class="fas fa-users sectionIcon2"></i>
              &nbsp; Wedding Party &nbsp;
              <i class="fas fa-users sectionIcon2"></i>
            </h1>
            <div class="flex justify-around wedding-party pv3 ph4 navy bg-white wedding-party-text">
              <div>
                <div>
                  <i class="fas fa-female person pb3"></i>
                  <h2 class="f2">Maid of Honor</h2>
                  <h3 class="georgia pt2">Mo Milford</h3>
                  <h4 class="georgia">Sister of the Bride</h4>
                </div>
                <div class="pt4">
                  <i class="fas fa-female person"></i>
                  <i class="fas fa-female person"></i>
                  <i class="fas fa-female person"></i>
                </div>
                <div>
                  <h2 class="pt3 f2">Bridesmaids</h2>
                  <h3 class="georgia">Julie Milford</h3>
                  <h4 class="georgia pb3">Sister-In-Law of the Bride</h4>
                  <h3 class="georgia">Mary Kate Milford</h3>
                  <h4 class="georgia pb3">Sister of the Bride</h4>
                  <h3 class="georgia">Eileen Milford</h3>
                  <h4 class="georgia">Sister of the Bride</h4>
                </div>
                <div class="flex justify-center items-center pb3">
                  <i class="pt4 f3 fas fa-heart"></i>
                  <i class="pt4 f2 fas fa-heart bossanova"></i>
                  <i class="pt4 f1 fas fa-heart heart"></i>
                  <i class="pt4 f2 fas fa-heart bossanova"></i>
                  <i class="pt4 f3 fas fa-heart"></i>
                </div>
              </div>

              <div>
                <div>
                  <i class="fas fa-male person pb3 wedding-pt"></i>
                  <h2 class="f2">Best Man</h2>
                  <h3 class="georgia pt2">Charlie Harris Jr.</h3>
                  <h4 class="georgia">Cousin of the Groom</h4>
                </div>
                <div class="pt4">
                  <i class="fas fa-male person"></i>
                  <i class="fas fa-male person"></i>
                  <i class="fas fa-male person"></i>
                </div>
                <div>
                  <h2 class="pt3 f2">Groomsmen</h2>
                  <h3 class="georgia">Franko Vatterott</h3>
                  <h4 class="georgia pb3">Brother of the Groom</h4>
                  <h3 class="georgia">David Michael Jackson</h3>
                  <h4 class="georgia pb3">Brother-In-Law of the Groom</h4>
                  <h3 class="georgia">Eric Crnkovich</h3>
                  <h4 class="georgia">Brother-In-Law of the Groom</h4>
                </div>
                <div class="flex justify-center items-center pb3">
                  <i class="pt4 f3 fas fa-heart"></i>
                  <i class="pt4 f2 fas fa-heart bossanova"></i>
                  <i class="pt4 f1 fas fa-heart heart"></i>
                  <i class="pt4 f2 fas fa-heart bossanova"></i>
                  <i class="pt4 f3 fas fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </container>
      </section>

      <section id="hotels" class="section2 pv3 tc borderBottom">
        <container>
          <div class="seashell pv2 border-shadow">
            <h1 class="f2 sectionTitle1">
              <i class="fas fa-hotel sectionIcon1"></i>
              &nbsp;&nbsp;&nbsp;Hotel&nbsp;&nbsp;&nbsp;
              <i
                class="fas fa-hotel sectionIcon1"
              ></i>
            </h1>
            <div class="polaroid-frame">
              <img id="hotel" src="../assets/hotel.jpg" class="photos">
              <h1 class="pv0 mv2">Drury Inn & Suites</h1>

              <h5 class="georgia pb1">
                11980 Olive Blvd | Creve Coeur, MO 63141
                <br>(314) 989-1100
              </h5>
            </div>
            <div>
              <a
                href="https://www.druryhotels.com/bookandstay/newreservation/?groupno=2382251"
                target="_blank"
              >
                <button class="bg-navy white hvr-grow shadow-hover pv2 mb1 button">Book Your Room</button>
              </a>
            </div>
            <div class="flex justify-center items-center pb3">
              <i class="pt4 f3 fas fa-heart"></i>
              <i class="pt4 f2 fas fa-heart bossanova"></i>
              <i class="pt4 f1 fas fa-heart heart"></i>
              <i class="pt4 f2 fas fa-heart bossanova"></i>
              <i class="pt4 f3 fas fa-heart"></i>
            </div>
          </div>
        </container>
      </section>
      <section id="registry" class="section1 tc pv3 borderBottom">
        <container>
          <div class="seashell pv2 border-shadow flex-wrap">
            <h1 class="f2 sectionTitle2">
              <i class="fas fa-gift sectionIcon2"></i>
              &nbsp;&nbsp;&nbsp;Registry&nbsp;&nbsp;&nbsp;
              <i
                class="fas fa-gift sectionIcon2"
              ></i>
            </h1>
            <a
              class="flex justify-around registry-frame hvr-grow"
              href="https://www.zola.com/registry/pickingupthebill"
              target="_blank"
            >
              <img class="logos" src="../assets/registry.jpg">
            </a>
            <div class="navy flex justify-center items-center pt1 pb3">
              <i class="pt4 f3 fas fa-heart"></i>
              <i class="pt4 f2 fas fa-heart bossanova"></i>
              <i class="pt4 f1 fas fa-heart heart"></i>
              <i class="pt4 f2 fas fa-heart bossanova"></i>
              <i class="pt4 f3 fas fa-heart"></i>
            </div>
          </div>
        </container>
      </section>
      <section id="photos" class="section2 pv3 tc borderBottom">
        <container>
          <div class="flex justify-around seashell pv4 ph3 flex-column border-shadow">
            <h1 class="f2 sectionTitle1 mt2">
              <i class="far fa-images sectionIcon1"></i>
              &nbsp;&nbsp;&nbsp;Photos&nbsp;&nbsp;&nbsp;
              <i
                class="far fa-images sectionIcon1"
              ></i>
            </h1>

            <div v-for="(picture, i) in pictures" :key="i" class="polaroid-frame">
              <img class="photos" :src="require(`~/assets/${picture.photo}.jpg`)">
              <h2 class="caption">{{ picture.caption }}</h2>
            </div>
            <!-- <div class="polaroid-frame hvr-grow shadow-hover">
              <img class="photos" src="../assets/photo2.jpg">
              <h2 class="caption"></h2>
            </div>
            <div class="polaroid-frame hvr-grow shadow-hover">
              <img class="photos" src="../assets/photo3.jpg">
              <h2 class="caption"></h2>
            </div>
            <div class="polaroid-frame hvr-grow shadow-hover">
              <img class="photos" src="../assets/photo4.jpg">
              <h2 class="caption"></h2>
            </div>
            <div class="polaroid-frame hvr-grow shadow-hover">
              <img class="photos" src="../assets/photo5.jpg">
              <h2 class="caption"></h2>
            </div>
            <div class="polaroid-frame hvr-grow shadow-hover">
              <img class="photos" src="../assets/photo6.jpg">
              <h2 class="caption">Being cute !</h2>
            </div>
            <div class="polaroid-frame hvr-grow shadow-hover">
              <img class="photos" src="../assets/photo7.jpg">
              <h2 class="caption">Being cute !</h2>
            </div>
            <div class="polaroid-frame hvr-grow shadow-hover">
              <img class="photos" src="../assets/photo8Edited.jpg">
              <h2 class="caption">x</h2>
            </div>-->
          </div>
        </container>
      </section>
      <section id="things-to-do" class="section1 pv3 tc borderBottom justify-around">
        <container>
          <div>
            <div class="flex justify-around seashell navy flex-column georgia border-shadow">
              <h1 class="f2 sectionTitle2 sacramento">
                <i class="far fa-calendar-check sectionIcon2"></i>
                &nbsp;&nbsp;&nbsp;Things to Do&nbsp;&nbsp;&nbsp;
                <i
                  class="far fa-calendar-check sectionIcon2"
                ></i>
              </h1>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/zoo.jpg">
                <h2 class="pt2 pb2 sacramento f2 td-fs">Wild Lights at The Zoo</h2>
                <h5>
                  Government Drive | St. Louis, MO 63110
                  <br>(314) 781-0900
                </h5>
              </div>
              <div>
                <a href="https://www.stlzoo.org/events/calendarofevents" target="_blank">
                  <button
                    class="bg-navy white shadow-hover hvr-grow pv1 mb4 button"
                  >More Information</button>
                </a>
              </div>
              <div class="flex justify-center items-center pb3">
                <i class="pt4 f3 fas fa-heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f1 fas fa-heart heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f3 fas fa-heart"></i>
              </div>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/steinberg.jpg">
                <h2 class="pt2 pb2 sacramento f2 td-fs">Steinberg Skating Rink</h2>
                <h5>
                  400 Jefferson Drive | St. Louis, MO 63110
                  <br>(314) 367-7465
                </h5>
              </div>
              <div>
                <a href="http://www.steinbergskatingrink.com/iceskating/" target="_blank">
                  <button
                    class="bg-navy white shadow-hover hvr-grow pv1 mb4 button"
                  >More Information</button>
                </a>
              </div>
              <div class="flex justify-center items-center pb3">
                <i class="pt4 f3 fas fa-heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f1 fas fa-heart heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f3 fas fa-heart"></i>
              </div>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/slam.jpg">
                <h2 class="pt2 sacramento f2 td-fs">St. Louis Art Museum</h2>

                <h5>
                  1 Fine Arts Drive | St. Louis, MO 63110
                  <br>(314) 721-0072
                </h5>
              </div>
              <div>
                <a href="https://www.slam.org/" target="_blank">
                  <button
                    class="bg-navy white shadow-hover hvr-grow pv1 mb4 button"
                  >More Information</button>
                </a>
              </div>
              <div class="flex justify-center items-center pb3">
                <i class="pt4 f3 fas fa-heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f1 fas fa-heart heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f3 fas fa-heart"></i>
              </div>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/city.jpg">
                <!-- <div> -->
                <h2 class="pt2 pb1 sacramento f2 td-fs">City Museum St. Louis</h2>
                <h5>
                  750 North 16th Street | St. Louis, MO 63103
                  <br>(314) 231-2489
                </h5>
              </div>
              <div>
                <a href="https://www.citymuseum.org/" target="_blank">
                  <button
                    class="bg-navy white shadow-hover hvr-grow pv2 mb5 button"
                  >More Information</button>
                </a>
              </div>
              <div class="flex justify-center items-center pb3">
                <i class="pt4 f3 fas fa-heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f1 fas fa-heart heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f3 fas fa-heart"></i>
              </div>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/arch.jpg">
                <!-- <div> -->
                <h2 class="pt2 pb1 sacramento f2 td-fs">The Gateway Arch</h2>
                <h5>
                  11 N 4th St | St. Louis, MO 63102
                  <br>(314) 655-1600
                </h5>
              </div>
              <div>
                <a href="https://www.gatewayarch.com/" target="_blank">
                  <button
                    class="bg-navy white shadow-hover hvr-grow pv2 mb5 button"
                  >More Information</button>
                </a>
              </div>
              <div class="flex justify-center items-center pb3">
                <i class="pt4 f3 fas fa-heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f1 fas fa-heart heart"></i>
                <i class="pt4 f2 fas fa-heart bossanova"></i>
                <i class="pt4 f3 fas fa-heart"></i>
              </div>
              <div class="polaroid-frame">
                <img class="photos" src="../assets/activity.jpg">
                <!-- <div> -->
                <h2 class="pt2 pb1 sacramento f2 td-fs">101 Things To Do</h2>
                <h5>
                  Guide to St. Louis' Most Memorable Experiences
                  <br>from St. Louis Magazine
                </h5>
              </div>
              <div>
                <a
                  href="http://projects.stlmag.com/101-things-every-st-louisan-must-do"
                  target="_blank"
                >
                  <button class="bg-navy white shadow-hover hvr-grow pv2 mb5 button">Read Article</button>
                </a>
              </div>
            </div>
          </div>
        </container>
      </section>
      <footer class="flex items-center">
        <container>
          <div class="footer">
            <div class="f3 flex items-center">
              Made with &nbsp;
              <i class="fas fa-heart f2 heart"></i>
              &nbsp;&nbsp;by&nbsp;
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
  </div>
</template>

<script>
import Dot from '../components/Dot.vue'
import dots from '../assets/data/dots.json'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Footer from '../components/Footer'
import LoginModal from '../components/LoginModal'
import { mapState } from 'vuex'
import VueSwing from 'vue-swing'
import { fireDb } from '~/plugins/firebase'
import { setTimeout } from 'timers'
export default {
  components: {
    Dot,
    Navbar,
    Container,
    Footer,
    LoginModal,
    VueSwing
  },
  data: function() {
    return {
      dots,
      activeTab: 0,
      stories: [
        `We were set up by our mutual friends, Todd and Carolyn Guidry, who realized quickly that 'firecracker' (Todd's words, not mine) Kelly needed someone equally dynamic, who could keep up with her quick wit and fiesty personality.  Enter Bill, pun-master and impromptu adventurer.  

Although Kelly only granted Bill the honor of a pre-date first, to see if he lived up to the Guidrys' glowing description, less than a week later, they had their first official date, at Broadway Oyster Bar.  After a long hike and an event at the History Museum, they decided to make it official and Bill took Kelly to the top of Art Hill and asked her to be his girlfriend.  (He claims this was because I was leaving for Vienna the following morning and wanted to "lock it down."  I still think he's just a good, old-fashioned romantic.)`,
        `Bill enlisted the help of many people, but primarily Kelly's sister and maid-of-honor, Maureen (Mo) and her partner, Jason, to give Kelly the surprise of a lifetime.  While Kelly was busy entertaining (and navigating a huge snowstorm!) the out-of-towners, Bill was supposed to be away at a silent retreat.  Instead, he stowed away at his parents' house until the pièce de résistance, when he sneakily appeared behind Kelly at Art Hill and got down on one knee to pop the question.`
      ],
      pictures: [
        { photo: 'photo1', caption: 'Being cute at the I-55 Raceway!' },
        { photo: 'photo2', caption: 'Being cute at the Blues Festival!' },
        { photo: 'photo3', caption: 'Being cute in the cold!' },
        { photo: 'photo4', caption: 'Being cute at Crater Lake!' },
        { photo: 'photo5', caption: 'Being cute at Mount Hood!' },
        { photo: 'photo6', caption: 'Being cute!' },
        { photo: 'photo7', caption: 'Being cute in shades!' },
        { photo: 'photo8Edited', caption: 'Being cute & holding hands!' }
      ],
      suggestedSong: '',
      submissionSuccess: false
    }
  },
  computed: {
    ...mapState(['loggedIn'])
  },
  methods: {
    tabToggle(tabClicked) {
      this.activeTab = tabClicked
    },
    async onSuggest() {
      const suggestedSong = { entry: this.suggestedSong }
      await fireDb.collection('suggestedSongs').add(suggestedSong)
      this.submissionSuccess = true
      this.suggestedSong = ''
      setTimeout(() => {
        this.submissionSuccess = false
      }, 5000)
    }
  }
}
</script>


<style lang="scss">
@import '~assets/styles/variables';

.light-red-violet {
  color: $light-red-violet;
}

.bossanova {
  color: $bossanova;
}
// .btn-font {
//   font-weight: 400;
// }
.music-icons {
  color: $light-red-violet;
}
.photo-border {
  border: 2px solid $bossanova;
}
.arrow {
  color: $light-red-violet;
  font-size: 45px;
}

.caption {
  font-weight: 500;
  padding-top: 1rem;
  @media (min-width: 1000px) {
    color: $midnight;
    // padding: 0 auto;
    font-size: 34px;
    padding-top: 1rem;
  }
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
  width: 333px;
  background-color: white;
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
  padding: 22px;
  margin-top: 1.75rem;
  margin: 3rem auto;

  @media (min-width: 1000px) {
    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
      0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
    padding: 22px;
    width: 450px;
    margin: 3rem auto;
    background-color: white;
    margin-top: 1.75rem;
  }
}

.registry-frame {
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
  padding: 22px;
  width: 280px;
  height: 245px;
  margin: 3rem auto;
  background-color: white;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
#behind-polaroid {
  position: relative;
  margin-top: -53px;
  padding-top: 53px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(~assets/lights1.jpg);
    background-size: cover;
    filter: blur(2px);
  }
}
.wedding-party {
  background-color: $seashell;
}
.wedding-party-text {
  @media (max-width: 570px) {
    flex-wrap: wrap;
  }
}
.wedding-pt {
  @media (max-width: 570px) {
    padding-top: 1rem;
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
.button {
  width: 40%;
  font-size: x-large;
  font-family: helvetica;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: initial;
  background-color: $midnight;
  color: white;
  @media (min-width: 375px) {
    width: 70%;
  }
  @media (min-width: 1000px) {
    // background-color: $putty;
    background-color: $midnight;
    color: white;
    font-size: x-large;
    font-family: helvetica;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: initial;
    padding: 1rem;
    letter-spacing: 0.5px;
    width: 40%;
  }
}

#button-div {
  justify-content: space-between;
}
.hdr-btn {
  background-color: $seashell;
  border: 0;
  font-weight: 450;
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
  font-size: 2rem;
  color: $light-red-violet;
  @media (min-width: 1000px) {
    font-size: 3rem;
    color: $light-red-violet;
    margin-bottom: 0;
  }
}
.sectionTitle2 {
  font-size: 2rem;
  color: $midnight;
  @media (min-width: 1000px) {
    font-size: 3rem;
    color: $midnight;
    margin-bottom: 0px;
  }
}
.sectionIcon1 {
  font-size: 2.75rem;
  color: $midnight;
}
.sectionIcon2 {
  font-size: 2.75rem;
  color: $light-red-violet;
}
.sacramento {
  font-family: 'Sacramento';
}
.seashell {
  background-color: $seashell;
}
// #hotel {
//   max-width: 70%;
// }
.border-showcase {
  border: 1px solid $midnight;
}

.person {
  font-size: 50px;
}
.heart {
  color: $light-red-violet;
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
    height: 120%;
  }
}
.border-box {
  box-sizing: border-box;
}
.cover {
  background-size: cover !important;
}
#title-box {
  font-size: 22px;
  font-weight: 500;
  padding-top: 22px;
  @media (min-width: 1000px) {
    font-size: 28px;
    line-height: 1.5;
    padding-top: 22px;
    color: $midnight;
    margin: 0 auto;
  }
}
.polaroid-title {
  font-size: 28px;
  line-height: 1.5;
}
.section1 {
  background-color: $testing1;
  color: $putty;
}
.section2 {
  background-color: $light-putty;
  color: $midnight;
}
.borderBottom {
  border-bottom: 5px solid $midnight;
}

.td-fs {
  @media (max-width: 1000px) {
    font-size: 31px;
  }
}
// #schedule {
//   border-top: 6px solid $bossanova;
// }
// .churchPic {
//   height: 330px;
//   width: 325px;
//   border: 2px solid $midnight;
// }
// .receptionPic {
//   height: 275px;
//   width: 380px;
//   border: 2px solid $midnight;
// }
.photos {
  height: 400px;
  width: 400px;
  // padding-top: 15px;
  // padding-bottom: 10px;
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
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
