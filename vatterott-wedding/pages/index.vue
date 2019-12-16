<template>
<div>
  <header class="georgia">
    <div class="container">
      <div id="nav" class="pb6-m pb7-l">
        <nav id="nav-text" class="dt w-100 mw8">
          <div class="dtc w2 v-mid f1 tl">
            December 27, 2019
            <a class="f6 fw4 no-underline dn dib-ns pv2 ph3" href="/"></a>
          </div>
          <div class="dtc v-mid center pa3">
            <a
              class="f6 fw4 hover-white no-underline dib ml2 pv2 ph3 menu-text"
              href="/"
            >Wedding Party</a>
            <a class="f6 fw4 hover-white no-underline dn dib-ns pv2 ph3 menu-text" href="/">Schedule</a>
            <a class="f6 fw4 hover-white no-underline dn dib-l pv2 ph3 menu-text" href="/">Travel</a>
            <a class="f6 fw4 hover-white no-underline dn dib-l pv2 ph3 menu-text" href="/">Registry</a>
            <a class="f6 fw4 hover-white no-underline dib ml2 pv2 ph3 menu-text" href="/">Photos</a>
            <a
              class="f6 fw4 hover-white no-underline dib ml2 pv2 ph3 menu-text"
              href="/"
            >Things To DO</a>
            <!-- <a class="f6 fw4 hover-white no-underline dib ml2 pv2 ph3 menu-text" href="/">FAQs</a> -->
          </div>
          <div class="dtc w2 v-mid f1 tl">
            #PickingUpTheBill
            <a class="tl f6 fw4 no-underline dn dib-ns pv2 ph3" href="/"></a>
          </div>
        </nav>
      </div>
      <div class="flex">
        <div id="headline" class="relative z-1 pb0-ns h5">
          <div id="headerBackground" class="cover bg-left bg-center-l z-2"></div>
          <h1 class="f2 f1-l fw6 mb0 lh-title">Bill & Kelly are Getting Married!</h1>
        </div>
      </div>
    </div>
  </header>

  <body>
    <section>
      <div>
        <h1>Wedding Party</h1>
      </div>
    </section>

    <section>
      <div>
        <h1>Schedule</h1>
      </div>
    </section>

    <section>
      <div>
        <h1>Travel</h1>
      </div>
    </section>

    <section>
      <div>
        <h1>Registry</h1>
      </div>
    </section>

    <section>
      <div>
        <h1>Photos</h1>
      </div>
    </section>

    <section>
      <div>
        <h1>Things To Do</h1>
      </div>
    </section>
  </body>
</div>
</template>

<style>
h1 {
  height: 90px;
  /* -webkit-text-stroke: 1.5px #432650; */
}
.container {
  background-color: #950500;
}

#nav {
  background-color: #432650;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 3px solid #f6edd7;
}

#nav-text {
  color: #f6edd7;
  font-size: 24px;
}

.menu-text {
  color: #f6edd7;
}

#headerBackground {
  background-image: url(~assets/header.jpg);
  padding-top: 1px;
  height: 650px;
  border-bottom: 4px solid #ead39c;
}
.border-box {
  box-sizing: border-box;
}

.cover {
  background-size: cover !important;
}

.bg-left {
  background-repeat: no-repeat;
  background-position: center left;
}

.ba {
  border-style: solid;
  border-width: 1px;
}

.b--white {
  border-color: #fff;
}

.b--white-90 {
  border-color: rgba(255, 255, 255, 0.9);
}

.b--blue {
  border-color: #357edd;
}

.dn {
  display: none;
}

.dib {
  display: inline-block;
}

.dt {
  display: table;
}

.dtc {
  display: table-cell;
}

.sans-serif {
  font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
    "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
    sans-serif;
}

.fw1 {
  font-weight: 100;
}

.fw2 {
  font-weight: 200;
}

.fw4 {
  font-weight: 400;
}

.h2 {
  height: 2rem;
}

.lh-title {
  line-height: 0.5;
  color: #ead39c;
  text-align: center;
  font-style: oblique;
}

.link {
  text-decoration: none;
  transition: color 0.15s ease-in;
}

.link:link,
.link:visited {
  transition: color 0.15s ease-in;
}

.link:hover {
  transition: color 0.15s ease-in;
}

.link:active {
  transition: color 0.15s ease-in;
}

.link:focus {
  transition: color 0.15s ease-in;
  outline: 1px dotted currentColor;
}

.mw8 {
  max-width: 64rem;
}

.w2 {
  width: 12rem;
}

.w-100 {
  width: 100%;
}

.white-90 {
  color: rgba(255, 255, 255, 0.9);
}

.white-80 {
  color: rgba(255, 255, 255, 0.8);
}

.white {
  color: #fff;
}

.bg-black-80 {
  background-color: rgba(0, 0, 0, 0.5);
}

.bg-blue {
  background-color: #357edd;
}

.hover-white:hover {
  color: #fff;
}

.hover-white:focus {
  color: #fff;
}

.pa1 {
  padding: 0.25rem;
}

.pa3 {
  padding: 1rem;
}

.pb5 {
  padding-bottom: 4rem;
}

.pv2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.ph3 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.ml2 {
  margin-left: 0.5rem;
}

.mb0 {
  margin-bottom: 0;
}

.mb3 {
  margin-bottom: 1rem;
}

/* .mb4 {
  margin-bottom: 2rem;
} */

.mt3 {
  margin-top: 1rem;
}

.mt4 {
  margin-top: 2rem;
}

.no-underline {
  text-decoration: none;
}

.tr {
  text-align: right;
}

.f2 {
  font-size: 2.25rem;
}

.f3 {
  font-size: 1.5rem;
}

.f6 {
  font-size: 0.875rem;
}

.center {
  margin-left: auto;
}

.v-mid {
  vertical-align: inherit;
}

.grow {
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
}

.grow:hover,
.grow:focus {
  transform: scale(1.05);
}

.grow:active {
  transform: scale(0.9);
}

.grow-large {
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-in-out;
}

.grow-large:hover,
.grow-large:focus {
  transform: scale(1.2);
}

.grow-large:active {
  transform: scale(0.95);
}

@media screen and (min-width: 30em) {
  .dib-ns {
    display: inline-block;
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  .pb6-m {
    padding-bottom: 8rem;
  }

  .mt5-m {
    margin-top: 4rem;
  }
}

@media screen and (min-width: 60em) {
  .bg-center-l {
    background-repeat: no-repeat;
    background-position: center center;
  }

  .dib-l {
    display: inline-block;
  }

  .mt6-l {
    margin-top: 8rem;
  }

  .tc-l {
    text-align: center;
  }

  .f1-l {
    font-size: 4rem;
  }
}
</style>
