<template>
  <section class="about">
    <div class="about_guy">
      <div class="about_guy_image"></div>
      <div class="about_guy_text">
        <h1>Who's that guy</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cumque deleniti illum sed quidem ex harum asperiores, ullam, nihil
          omnis rerum nam pariatur vitae dolorem. Ab consectetur saepe quia
          suscipit, asperiores, eum repellat temporibus ut vero perferendis
          velit ullam odit?
        </p>
        <h2>Languages he knows.</h2>
        <div class="lang">
          <div class="icon"></div>
          <div class="icon"></div>
          <div class="icon"></div>
          <div class="icon"></div>
          <div class="icon"></div>
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
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  &_guy {
    @include center;
    width: 100%;
    justify-content: space-evenly;
     &_image {
      height: 500px;
      width: 400px;
      background-image: url("../assets/images/1180577.jpg");
      background-size:cover;
      background-position: bottom;
      background-repeat: no-repeat;
      box-shadow: 6px -8px #e5e5e5, 11px -15px rgba(3, 89, 166, 0.5),
        17px -22px #e5e5e5, 23px -29px rgba(254, 225, 1, 0.5),
        29px -36px #e5e5e5, 35px -43px rgba(252, 0, 0, 0.5), 41px -50px #e5e5e5,
        47px -57px rgba(0, 0, 0, 0.514);
      // margin: auto 5rem auto auto ;

    }
    &_text {
      height: 500px;
      @include center;
flex-direction: column;      justify-content: space-evenly;
      text-align: left;
      max-width: 60ch;
      // margin: auto auto auto 5rem ;

      .lang {
        margin-right: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: left;
        .icon {
          width: 30px;
          height: 30px;
          background: rgba(0, 0, 0, 0.397);
          margin-right: 4rem;
        }
      }
    }
  }
}
</style>
