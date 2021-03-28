<template>
  <section class="about" id="about">
    <div class="about_guy">
      <div class="about_guy_image"></div>
      <div class="about_guy_text">
        <h1>Who's that guy</h1>
        <p>
          Since I discovered coding a few years ago I finally found something I
          wanted to master. Before I was a so-called "Jack of all trades, master
          of none". I started a lot of things but never ended them. But one
          moment changed that, entirely. I don't know why but making a website
          from scratch that works out in the end, it's like a magic show for
          grown-ups. Besides this, I play the guitar as well, and not even that
          bad. Singing and playing music is something I've been doing since I
          was little, and I never stopped. It's been my way to be creative since
          '00, baby.
        </p>
        <h2>Languages he knows.</h2>
        <div class="lang">
          <font-awesome class="icon" :icon="['fab', 'github']" />
          <font-awesome class="icon" :icon="['fab', 'sass']" />
          <font-awesome class="icon" :icon="['fab', 'js']" />
          <font-awesome class="icon" :icon="['fab', 'vuejs']" />
          <font-awesome class="icon" :icon="['fab', 'css3']" />
          <font-awesome class="icon" :icon="['fab', 'html5']" />
          <font-awesome class="icon" :icon="['fab', 'bootstrap']" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutThisGuy",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/media.scss";
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  &_guy {
    @include center;
    flex-wrap: wrap-reverse;

    width: 100%;
    height: 100%;
    justify-content: space-between;

    &_image {
      flex: 1 1 400px;

      height: 500px;

      max-width: 400px;
      background-image: url("../assets/images/1180577.jpg");
      background-size: cover;
      background-position: bottom;
      background-repeat: no-repeat;
      box-shadow: 3px -4px white, 7px -8px rgba(3, 89, 166, 0.5),
        8px -11px white, 12px -14px rgba(254, 225, 1, 0.5), 14px -18px white,
        18px -22px rgba(252, 0, 0, 0.5), 21px -25px white;
      margin-left: 1rem;
      margin: auto;
    }
    &_text {
      margin: auto;
      height: 70%;
      @include center;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: left;

      max-width: 60ch;
      // flex: 1;
      // margin: auto auto auto 5rem ;
      @include for-phone-only {
        max-width: 45ch;
      }
    }
  }
  h1 {
    margin-right: auto;
    @include for-phone-only {
      margin-right: unset;
    }
  }
  h2 {
    margin-right: auto;
  }
  .lang {
    margin: 4rem auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
 
    .icon {
      font-size: 3rem;
      @include for-phone-only {
        font-size: 2.5rem;
        margin: 0.3rem 0.5rem;
      }
      &:nth-child(1) {
        color: black;
      }
      &:nth-child(2) {
        color: rgba(255, 3, 3, 0.397);
      }
      &:nth-child(3) {
        color: yellow;
      }
      &:nth-child(4) {
        color: rgb(54, 168, 54);
      }
      &:nth-child(5) {
        color: blue;
      }
      &:nth-child(6) {
        color: orangered;
      }
      &:nth-child(7) {
        color: rgb(90, 51, 90);
      }
    }
  }
}
</style>
