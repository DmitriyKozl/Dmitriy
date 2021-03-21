<template>
  <section class="about" id="about">
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
        <font-awesome class="icon" :icon="['fab', 'github']"/>
        <font-awesome class="icon" :icon="['fab', 'sass']"/>
        <font-awesome class="icon" :icon="['fab', 'js']"/>
        <font-awesome class="icon" :icon="['fab', 'vuejs']"/>
        <font-awesome class="icon" :icon="['fab', 'css3']"/>
        <font-awesome class="icon" :icon="['fab', 'html5']"/>
        <font-awesome class="icon" :icon="['fab', 'bootstrap']"/>

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
  flex-wrap: wrap;
  &_guy {
    @include center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    &_image {
      height: 600px;
      width: 500px;
      background-image: url("../assets/images/1180577.jpg");
      background-size: cover;
      background-position: bottom;
      background-repeat: no-repeat;
      box-shadow: 3px -4px white, 7px -8px rgba(3, 89, 166, 0.5),
        8px -11px white, 12px -14px rgba(254, 225, 1, 0.5), 14px -18px white,
        18px -22px rgba(252, 0, 0, 0.5), 21px -25px white;
      // margin-right: auto;
    }
    &_text {
      // margin: auto;
      height: 70%;
      @include center;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: left;
      max-width: 70ch;
      // flex: 1;
      // margin: auto auto auto 5rem ;
      h1 {
        margin-right: auto;
      }
      h2 {
        margin-right: auto;
      }
      .lang {
        margin:  auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        .icon {
        font-size: 3rem;
          // margin: 2rem 1rem;
          &:nth-child(1){
            color: black;
          }
              &:nth-child(2){
          color: rgba(255, 3, 3, 0.397);
          }
              &:nth-child(3){
            color: yellow;
          }
              &:nth-child(4){
            color: rgb(54, 168, 54);
          }
              &:nth-child(5){
            color: blue;
          }
              &:nth-child(6){
            color: orangered;
          }
              &:nth-child(7){
            color: rgb(90, 51, 90);
          }

        }
      }
    }
  }
}
</style>
