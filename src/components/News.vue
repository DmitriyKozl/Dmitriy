<template>
  <div class="preview_container">
    <section
      v-for="image in bgImages"
      :key="image.id"
      @click="this.$router.push(image.path)"
    >
      <div
        :style="{
          'background-image': 'url(' + require('@/assets/' + image.image) + ')',
        }"
        class="preview_img"
      ></div>
      <div class="titleImage">
        <h2>{{ image.text }}</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      bgImages: [
        {
          id: 1,
          path: '/totem',
          text: 'Brief Herstkamp',
          image: 'images/autumn.jpg',
        },
        {
          id: 2,
          path: '/leden',
          text: 'voorstelling leden',
          image: 'images/scout.jpg',
        },
        {
          id: 3,
          path: '/totem',
          text: 'Inschrijving 2020-2021',
          image: 'images/letter.jpg',
        },
        {
          id: 4,
          path: '/totem',
          text: 'Info begin scoutsjaar',
          image: 'images/desk.jpg',
        },
        {
          id: 5,
          path: '/totem',
          text: 'Totem namen',
          image: 'images/totem.jpg',
        },
      ],
      methods: {
        scrollToTop() {
          window.scrollTo(0, 0);
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin flexCenter($direction){
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: $direction;
}
.preview_container {
  // @include flexCenter(row);
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  padding: 6rem 0;
  height: 100%;

  section {
    @include flexCenter(row);
    padding: 2rem;
    flex: 1 1 300px;
    position: relative;
    height: unset;
    .preview_img {
      height: 400px;
      width: 200px;
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding: 0 6rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
        0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
      // filter: grayscale(100);
    }
    .titleImage {
      /* top: 40%; */
      // opacity: 0;
      position: absolute;
      height: 400px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        width: 60%;
        font-size: 2.3rem;
        padding: 1rem;
        margin: auto;
        color: #caf0f8;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
          0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
          0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
          0 32px 64px rgba(0, 0, 0, 0.07);
        // border: 5px solid white;
      }
    }
  }
  section:hover .titleImage {
    transition: 1s ease;
  }
  section:hover .preview_img {
    transition: 800ms ease;
    // opacity: 0.5;
    filter: grayscale(0);
  }
}
// header

// header {
//   @include flexCenter(row);
//   width: 100%;
//   height: 150px;
//   background-color: #264653;
//   h1 {
//     font-size: 4rem;
//     color: white;
//     margin: 1.5rem auto auto 10rem;
//   }
// }

//sections

.container {
  @include flexCenter(column);
  align-items: unset;
  padding: 4rem 0;
  height: 100%;
  margin: auto;
  background-color: #264653;

  h1 {
    font-size: 3rem;
    text-align: left;
    margin-right: auto;
    margin-left: 5%;
    color: white;
    height: 100%;
    // color: #264653;
  }
  .news {
    @include flexCenter(row);

    .block {
      height: 15rem;
      //   box-shadow: $shadow;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
        0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
      background-color: white;
      border-radius: 15px;
      border-bottom-left-radius: 0;
      flex-shrink: 0;
      scroll-snap-align: start;
      border-bottom: 6px solid #264653;

      @media screen and (max-width: 900px) {
        width: calc(100% / 2);
      }
      &__title {
        // background-color: white;
        // width: 100%;
        border-radius: 15px;
        border-bottom-right-radius: 0;
        border: 10px solid white;
        // border-bottom: 0;
        // max-width: 350px;
        // margin: auto;

        h2 {
          font-size: 1.7rem;
          color: white;
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 1rem 0;
          background-color: #264653;
          border-radius: 13px;
          border-bottom-left-radius: 0;
          border-bottom: 0;
          // box-shadow: $shadow;
        }
      }
      &__item {
        // overflow: scroll;
        // overflow: hidden;
        // flex: 1 1 300px;
        // height: 400px;
        // max-width: 350px;
        // box-shadow: $shadow;
        // border-radius: 15px;
        // border-top-left-radius: 0;
        // border-top-right-radius: 0;

        // text-align: left;
        // margin: auto;
        // background-color: white;
        .fullText {
          display: none;
        }

        &__text {
          margin: 1rem;

          p {
            font-weight: bolder;
            color: #264653;
            line-height: 1.3;
          }
        }
      }
    }
  }
}

.eventList {
  &__item {
    @include flexCenter(row);
    align-items: unset;
    // box-shadow: $shadow;
    border-radius: 16px;
    border: 1px solid white;
    min-height: 150px;
    margin: 2rem auto;
    width: 80%;
    justify-content: space-between;

    &__date {
      border-bottom-left-radius: 15px;
      border-top-left-radius: 15px;

      @include flexCenter(column);
      align-items: unset;
      color: white;
      background-color: #264653;
      padding: 2rem 0;
      min-width: 200px;

      h2 {
        font-size: 3rem;
        text-align: center;
      }
      p {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
      }
    }
    &__text {
      text-align: left;
      padding: 1rem 1rem 1rem;
      background-color: white;
      border-radius: 15px;
      border-bottom-left-radius: 0;

      h3 {
        font-size: 1.7rem;
        margin-right: auto;
        margin-top: 0;
        color: #264653;
        // text-shadow: $shadow;
        width: 80%;
      }
      p {
        font-weight: bolder;
        color: #264653;
        line-height: 1.3;
      }
    }
  }
}
// sidenav

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #264653;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.active {
  width: 250px;
}
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: rgba(255, 255, 255, 0.787);
  display: block;
  transition: 0.3s;
}
.sidenav a:hover {
  color: #f1f1f1;
}
.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  cursor: pointer;
}
.hamburger {
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  left: 3%;
  top: 3rem;
  color: rgba(255, 255, 255, 0.787);
}
.activeLink {
  font-weight: bold;
}

.news-banner {
  background-image: url('../assets/images/news-banner.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
}
</style>
