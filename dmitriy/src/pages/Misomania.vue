<template>
  <Layout>

  <div>
    <header>
      <div class="banner">
        <div class="banner_text"><h1>Misomania</h1></div>
        <div class="banner_paragraph"><p>the highest form of escapism</p></div>
      </div>
    </header>

    <div class="preview_container">
      <section
        v-for="image in bgImages"
        :key="image.id"
      >
        <div
        to="/strasburg"
          :style="{
            'background-image': 'url(' + require('~/assets/' + image.src) + ')',
          }"
          class="preview_img"
        ></div>
        <g-link         to="/strasburg"
 class="titleImage">
          <h2>{{ image.title }}</h2>
        </g-link>
      </section>
    </div>
  </div>
  </Layout>

</template>

<script>
export default {
  name: 'Misomania',
  components: {},
  data() {
    return {
      bgImages: [
        {
          id: 1,
          src: 'misomania/stras.jpg',
          title: 'Untitled Straßburg',
          name: 'Strasburg',
        },
        {
          id: 2,
          src: 'misomania/normandie_banner.jpg',
          title: 'La Normandie',
        },
        { id: 3, src: 'misomania/door.jpg', title: '4 века на 400 километров' },
        {
          id: 4,
          src: 'misomania/жирона-и-беда-синоптики.jpg',
          title: 'Жирона и беда синоптики',
        },
        {
          id: 5,
          src: 'misomania/южнин-и-пунктуальность-вещи-не-совмес.jpg',
          title: 'Южанин и пунктуальность,вещи не совместимые',
        },
        {
          id: 6,
          src: 'misomania/день-первый.jpg',
          title: 'День первый',
        },
        {
          id: 7,
          src: 'misomania/радость-слёзы-и-бюро-находок.jpeg',
          title: 'Радость, слёзы и бюро находок',
        },
        {
          id: 8,
          src: 'misomania/албуфейра-нам-запомнится-на-долго.jpg',
          title: 'Албуфейра нам запомнится на долго!',
        },
        { id: 9, src: 'misomania/внедрёж.jpg', title: 'Внедрёж' },
        {
          id: 10,
          src: 'misomania/по-ту-сторону-африки.jpg',
          title: 'По ту сторону Африки',
        },
        {
          id: 11,
          src: 'misomania/кордова-сковзь-окно-уборных.jpg',
          title: 'Кордова сковзь окна уборных…',
        },
        {
          id: 12,
          src: 'misomania/ронда-белый-городок-андалузии.jpg',
          title: 'Ронда, белый городок Андалузии',
        },
        {
          id: 13,
          src: 'misomania/путешествие-во-времени.jpg',
          title: 'Путешествие во времени',
        },
        { id: 14, src: 'misomania/моря.jpg', title: 'У синего моря…' },
        {
          id: 15,
          src: 'misomania/в-севильской-тени-курица-готова-через-10.jpg',
          title: 'В Севильской тени курица готова через 10 минут',
        },
        {
          id: 16,
          src: 'misomania/wp-1456965754253.jpg',
          title: 'День третий, лучезарный',
        },
        {
          id: 17,
          src: 'misomania/wp-1456767118842.jpg',
          title: 'Будапешт день целёхонько второй',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin flexCenter($direction) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-content: center;
}


header {
  @include flexCenter(column);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  background-position: center;
  width: 100%;
  height: 100vh;

  .banner {
    position: absolute;
    background-attachment: fixed;
    top: 40%;
    font-size: 3rem;
    font-weight: 600;
    color: black;
    width: 100%;
    background-image: url("../assets/misomania/banner.jpeg");
    height: 20%;
    background-size: cover;
    background-repeat: no-repeat;

    background-position: center;

    .banner_text {
      position: absolute;
      bottom: 85%;
      left: 1rem;

      h1 {
        margin: 0;
        font-size: 2em;
      }
    }

    .banner_paragraph {
      position: absolute;
      top: 65%;
      left: 59%;
           p{
             font-size: 1em;

           }   
    }
  }
}

.preview_container {
  // @include flexCenter(row);
  flex-wrap: wrap;
  max-width: 1400px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-content: center;

  section {
    @include flexCenter(row);
    padding: 2rem;
    flex: 1 1 300px;
    position: relative;
    height: unset;
    cursor: pointer;
    .preview_img {
      height: 400px;
      min-width: 200px;
      // max-width: 400px;
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding: 0 6rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
        0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    }
    .titleImage {
      /* top: 40%; */
      opacity: 0;
      position: absolute;
      height: 400px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        width: 90%;
        font-size: 2.3rem;
        margin: auto;
        color: #caf0f8;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
          0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
          0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
          0 32px 64px rgba(0, 0, 0, 0.07);
      }
    }
  }
  section:hover .titleImage {
    transition: 200ms ease;
    opacity: 1;
  }
  section:hover .preview_img {
    transition: 400ms ease;
    // opacity: 0.5;
    filter: blur(5px);
  }
}


::-webkit-scrollbar-track {
  // box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 0.5rem;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #8d8787;
}

</style>