<template>
  <Layout>
    <main>
      <header>
        <header id="header">
          <div class="inner">
            <div class="logo"><a href="#banner">logo</a></div>
            <nav class="nav_screen">
              <a href="#laatste_plaatsen">Laatste plaatsen</a>
              <a href="#top_locaties">Onze top locaties</a>
              <a href="#spotlight">In the spotlight</a>
            </nav>

            <nav class="nav_mobile ">
              <a class="no_border" href="#laatste_plaatsen">Laatste plaatsen</a>
              <a href="#top_locaties">Onze top locaties</a>
              <a href="#spotlight">In the spotlight</a>
            </nav>
            <a>
              <i class="fa fa-bars"></i>
            </a>
          </div>
        </header>
        <div class="banner content">
          <div class="gradientColor"></div>
          <div class="background"></div>
          <div class="hero">
            <div class="hero_content">
              <img src="..\assets\images\img\world.png" alt="" />
              <div class="hero_text">
                <h1>Digitravels</h1>
                <p>
                  reizen voor nerdlanders
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="laatste_plaatsen">
        <h1>Laatste plaatsen</h1>
        <div class="spot-card">
          <div class="last-spots">
            <img src="@/assets/images/img/lochawe-scotland.jpg" alt="" />
            <p>Lochawe, Scotland</p>
          </div>
          <div class="last-spots">
            <img src="@/assets/images/img/porto.jpg" alt="" />
            <p>Porto, Portugal</p>
          </div>
          <div class="last-spots">
            <img src="@/assets/images/img/aljezur-portugal.jpg" alt="" />
            <p>Aljezur, Portugal</p>
          </div>
        </div>
      </div>
      <div id="top_locaties">
        <h1>Onze top locaties</h1>

        <div class="location_container">
          <div class="location-item">
            <div class="top-locations">
              <div class="img Athene"></div>
              <p>Athene, Griekenland</p>
            </div>
            <div class="top-locations">
              <div class="img Bali"></div>
              <p>Bali, indonesia</p>
            </div>
          </div>
          <div class="location-item">
            <div class="top-locations">
              <div class="img Barcelona"></div>
              <p>Barcelona, Spanje</p>
            </div>
            <div class="top-locations">
              <div class="img Budapest"></div>
              <p>Budapest, Hongarije</p>
            </div>
          </div>
          <div class="location-item">
            <div class="top-locations">
              <div class="img Dublin"></div>
              <p>Dublin, Ierland</p>
            </div>
            <div class=" top-locations">
              <div class="img Dubrovnik"></div>
              <p>Dubrovnik, Croatie</p>
            </div>
          </div>

          <div class="location-item">
            <div class="top-locations">
              <div class="img Edinbrugh"></div>
              <p>Edinbrugh, Schotland</p>
            </div>
            <div class="top-locations">
              <div class="img Garda"></div>
              <p>Garda, Italie</p>
            </div>
          </div>
          <div class="location-item">
            <div class="top-locations">
              <div class="img Manarola"></div>
              <p>Manarola, Italie</p>
            </div>

            <div class="top-locations">
              <div class="img Parijs"></div>
              <p>Parijs, Frankrijk</p>
            </div>
          </div>

          <div class="location-item">
            <div class="top-locations">
              <div class="img Fransisco"></div>
              <p>San Fransisco, California</p>
            </div>
          </div>
        </div>
        <h2>Onze top locaties</h2>
        <div class="location_container_mobile">
          <div class="location-item_mobile">
            <div class="top-locations_mobile">
              <div class="img Athene"></div>
              <p>Athene, Griekenland</p>
            </div>
            <div class="top-locations_mobile">
              <div class="img Bali"></div>
              <p>Bali, indonesia</p>
            </div>
          </div>
          <div class="location-item_mobile">
            <div class="top-locations_mobile barcelona">
              <div class="img Barcelona"></div>
              <p>Barcelona, Spanje</p>
            </div>
            <div class="top-locations_mobile other_mobile">
              <div class="img other">
                <p>bekijk andere locaties</p>
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="spotlight">
        <h1>In de spotlight</h1>
        <div class="title">
          <div class="background_spotlight"></div>
          <div class="buda"></div>
        </div>
        <div class="places ">
          <div class="bathouseVisit">
            <h1>Relax..</h1>
            <div class="bathHouse">
              <div class="bathHouseText">
                <h2>Visit the warm bathouses</h2>
                <p>
                  For thousands of years, locals have enjoyed the steaming,
                  mineral-rich thermal water simmering beneath Budapest's
                  surface. For example, the remains of the Roman-era public
                  baths, Thermae Maiores, are still visible in today's northern
                  Budapest.
                  <br />
                  <br />
                  Science has yet to verify the healing effects of
                  balneotherapy, the treatment of pain in thermal water; it’s
                  possible that mineral-rich water is a useful supplement to
                  standard treatments, but there's insufficient evidence to
                  prove it. So what’s all the fuss about thermal bathing then?
                  Well, healing isn’t the only reason to soak in hot water
                  inside grand old buildings — bathing is also a great way to
                  relax, reflect, or socialize.
                </p>
              </div>
            </div>
          </div>
          <div class="visiting">
            <div class="tourism">
              <div class="tourismText">
                <h2>The beautiful little world called Budapest</h2>
                <p>
                  Budapest, the capital of Hungary and considered by many to be
                  the "Paris of the East," is one of the most culturally
                  important metropolises in Eastern Europe, and is home to
                  numerous UNESCO World Heritage Sites. Although humans have
                  lived here since the Stone Age, this beautiful city only
                  formally came into being in 1872 with the amalgamation of
                  three previously independent towns—Old Buda (Óbuda), Buda, and
                  Pest—to become the administrative, commercial, and industrial
                  center of Hungary.
                  <br />

                  Straddling the River Danube, Budapest is famous for its
                  thermal springs, some of which have been used for therapeutic
                  purposes since prehistory. In fact, Budapest has so many
                  things to do that you'll want to spend at least a few days
                  exploring this dynamic city. Popular attractions range from
                  impressive architecture and poignant reminders of 20th-century
                  history to its vibrant cultural and entertainment scene, with
                  everything from street buskers to classical concerts in
                  beautiful churches.
                </p>
              </div>
            </div>
            <h1>Dare to find the adventure</h1>
          </div>
          <div class="bottomImg"></div>

          <div class="gallery">
            <h1>Gallery</h1>

            <div class="gridContainer">
              <div class="image top"></div>
              <div class="image right"></div>
              <div class="image bottomLeft"></div>
              <div class="image bottomRight"></div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer>
         <p>Rune Devuyst </p>
        <p> Examen Front-end development avondonderwijs</p>

        <p>2020-2021</p>

       

        
         <p> HTML & CSS Advanced</p>
    </footer>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="scss" scoped>
$box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  0 2px 4px -1px rgba(0, 0, 0, 0.06);
$text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
$color-grey-ish: hsl(31, 50%, 95%);
$border-radius: 15px;
$color-purple: hsl(261, 61.2%, 14.3%);

@mixin borderRadius {
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  border-bottom-left-radius: none;
  border-bottom-right-radius: none;
}

@mixin flexCenter($direction) {
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: $direction;
}

@mixin for-phone-only {
  @media (max-width: 799px) {
    @content;
  }
}

@mixin for-tablet-portrait-up {
  @media (max-width: 800px) {
    @content;
  }
}

@mixin for-tablet-landscape-up {
  @media (max-width: 900px) {
    @content;
  }
}

@mixin for-desktop-up {
  @media (max-width: 1099px) {
    @content;
  }
}

@mixin for-big-desktop-up {
  @media (max-width: 1200px) {
    @content;
  }
}

body {
  font-family: "Montserrat";
}

header {
  position: relative;
}

#header {
  @include flexCenter(row);
  margin: auto;
  top: 0;
  z-index: 0;
  width: 100%;
  background-color: white;
  height: 100px;
  border-bottom: white 1px solid;

  .inner {
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;

    .logo {
      flex: 1;
      text-align: left;
      /* margin-right:auto ; */
      a {
        text-decoration: none;
        color: black;
        font-size: 2em;
        padding: 1.5em 1em;
      }
    }

    .nav_mobile {
      display: none;

      a {
        text-decoration: none;
        color: black;
        padding: 1.5em 1em;
        font-size: 0.5em;
        font-weight: bold;
        width: 100%;
        border-top: 1px solid;
      }

      .no_border {
        border: none;
      }

      @include for-phone-only {
        @include flexCenter(column);
        overflow: hidden;
        background-color: white;
        position: absolute;
        border-bottom-right-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
        right: 50px;
        top: 70px;
        z-index: 999999999;
      }
    }

    .nav_screen {
      @include flexCenter(row);

      a {
        text-decoration: none;
        color: black;
        padding: 1.5em 1em;
        font-size: 1em;
        font-weight: bold;
      }

      @include for-phone-only {
        display: none;
      }
    }
  }
}

.banner.content {
  max-width: 100%;

  .gradientColor {
    background: linear-gradient(
      hsla(45, 100%, 50%, 0.8),
      hsla(31, 99.8%, 42.8%, 0.8),
      hsla(348, 99.8%, 47.1%, 0.8)
    );

    width: 100%;
    position: absolute;
    height: 85vh;
  }

  .hero {
    @include flexCenter(row);

    z-index: 99999;
    display: block;
    background-image: url("../assets/images//img/hero.jpg");

    width: 100%;
    height: 85vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .hero_content {
      @include flexCenter(column);
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -150px 0 0 -150px;
      font-family: "carter one";

      img {
        width: 300px;
      }

      .hero_text {
        text-align: center;
        text-shadow: $text-shadow;

        h1 {
          color: white;
          font-size: 3em;
          font-weight: bold;
          margin: 0.5em 0;
        }

        p {
          color: white;
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.5em 0;
        }
      }
    }
  }
}

#laatste_plaatsen {
  // @include flexCenter(column);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  background: $color-grey-ish;
  padding-top: 6em;
  padding-bottom: 6em;

  h1 {
    font-size: 3em;
    font-weight: bold;
    margin: 0 auto;
    padding: 0.5em;

    @include for-tablet-landscape-up {
      font-size: 1.5em;
    }
  }

  .spot-card {
    @include flexCenter(row);
    // flex-wrap: wrap;
    margin-bottom: 1em;
    padding: 2em;

    @include for-phone-only {
      padding: 0;
      max-width: 375px;
    }

    @include for-desktop-up {
      @include flexCenter(row);
      flex-wrap: wrap;
    }

    .last-spots {
      margin: 0.5em;
      background-color: white;
      border-radius: $border-radius;
      width: 400px;
      box-shadow: $box-shadow;

      img {
        @include borderRadius;
        max-width: 400px;

        @include for-tablet-landscape-up {
          max-width: 400px;
        }

        @include for-phone-only {
          max-width: 375px;
        }
      }

      p {
        padding: 1em;
        font-weight: bold;
      }

      @include for-tablet-landscape-up {
        width: 400px;
        margin: 1em;
      }

      @include for-phone-only {
        width: 400px;
      }
    }
  }
}

#top_locaties {
  @include flexCenter(column);
  flex-wrap: wrap;
  width: 100%;
  padding-top: 6em;
  padding-bottom: 6em;

  h1 {
    font-size: 3em;
    font-weight: bold;
    margin: 0 auto;
    padding: 0.5em;
  }

  .location_container {
    @include flexCenter(row);
    flex-wrap: wrap;

    @include for-phone-only {
      display: none;
    }

    .location-item {
      @include flexCenter(row);
      padding: 1em;
      flex-wrap: wrap;
      height: 500px;

      .top-locations {
        padding-bottom: 2em;
        margin: 1em;
        border-radius: $border-radius;
        width: 300px;
        box-shadow: $box-shadow;

        p {
          padding: 0.2em;
          font-weight: bold;
          margin: 0;
        }

        .img {
          @include flexCenter(row);
          @include borderRadius;
          height: 100%;
          max-width: 400px;
        }

        .Athene {
          background-image: url("../assets/images/img/athene.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
      }

      .Bali {
        background-image: url("../assets/images/img/bali-1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .Barcelona {
        background-image: url("../assets/images/img/barcelona.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .Budapest {
        background-image: url("../assets/images/img/budapest.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .Dublin {
        background-image: url("../assets/images/img/dublin.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .Dubrovnik {
        background-image: url("../assets/images/img/dubrovnik.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .Edinbrugh {
        background-image: url("../assets/images/img/edinburgh.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .Garda {
        background-image: url("../assets/images/img/garda-italia.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .Manarola {
        background-image: url("../assets/images/img/manarola-italie.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .Parijs {
        background-image: url("../assets/images/img/parijs.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .Fransisco {
        background-image: url("../assets/images/img/san-francisco.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      .top-locations.other {
        padding: 0;
      }
    }
  }

  h2 {
    display: none;

    @include for-phone-only() {
      font-size: 3em;
      font-weight: bold;
      margin: 0 auto;
      padding: 0.5em;
    }
  }

  .location_container_mobile {
    display: none;

    @include for-phone-only() {
      @include flexCenter(row);
      flex-wrap: wrap;
      padding: 4em;

      .location-item_mobile {
        @include flexCenter(row);
        flex-wrap: wrap;
        height: 600px;

        .top-locations_mobile.barcelona {
          margin: 2;
        }

        .top-locations_mobile {
          margin: 1em;
          border-radius: $border-radius;
          width: 300px;
          box-shadow: $box-shadow;

          padding-bottom: 2em;

          p {
            padding: 0.5em 0;
            font-weight: bold;
          }

          .img {
            @include flexCenter(row);
            @include borderRadius;
            height: 100%;
            max-width: 400px;
          }

          .Athene {
            background-image: url("../assets/images/img/athene.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }

          .Bali {
            background-image: url("../assets/images/img/bali-2.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }

          .Barcelona {
            background-image: url("../assets/images/img/barcelona.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
        }
        .top-locations_mobile.other_mobile {
          padding: 0;
        }
        .img.other {
          border-radius: $border-radius;
          @include flexCenter(column);
          background: linear-gradient(
            135deg,
            hsla(45, 100%, 50%, 0.8),
            hsla(31, 99.8%, 42.8%, 0.8),
            hsla(348, 99.8%, 47.1%, 0.8)
          );

          .fa-arrow-right {
            text-align: right;
            color: white;
            font-size: 3em;
            padding: 0.5em;
          }

          p {
            flex: 1;
            font-size: 2em;
            font-weight: bold;
            padding: 0.5em;
          }
        }
      }
    }
  }
}

$gradient-bottom-right: linear-gradient(
  135deg,
  #013a63ff,
  #01497cff,
  #014f86ff,
  #2a6f97ff,
  #2c7da0ff,
  #468fafff,
  #61a5c2ff
);

#spotlight {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: $color-grey-ish;
  padding-top: 6em;
  padding-bottom: 6em;

  h1 {
    font-size: 4em;
    font-weight: bold;
    margin: 0 auto;
    // padding: 0.5em;
  }

  .title {
    @include flexCenter(row);
    width: 100%;
    position: relative;
    height: 650px;

    @include for-tablet-landscape-up {
      height: 500px;
    }

    .background_spotlight {
      background: $gradient-bottom-right;
      position: absolute;
      width: 100%;
      z-index: 0;
      height: 70px;
      bottom: 42%;

      @include for-tablet-landscape-up {
        display: none;
      }
    }

    .buda {
      width: 100%;
      z-index: 2;
      position: absolute;
      height: 100%;
      background-image: url("../assets/images/budapest/IMG_20160614_115536.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      @include for-tablet-landscape-up {
        height: 400px;
        z-index: 2;
        position: static;
        background-size: 440px;
        bottom: 50%;
      }

      @include for-phone-only {
        background-size: 320px;
      }
    }
  }

  .places {
    width: 100%;

    .bottomImg {
      background-image: url("../assets/images/budapest/top.jpg");
      background-position: top center;
      background-size: cover;
      width: 100%;
      height: 300px;
      background-attachment: fixed;

      @include for-tablet-landscape-up {
        background-attachment: none;
      }
    }

    .bathouseVisit {
      @include flexCenter(row);

      @include for-big-desktop-up {
        flex-direction: column;
      }

      @include for-tablet-landscape-up {
        position: relative;
        margin: auto;
      }

      h1 {
        font-size: 2em;
        width: 200px;
        margin: auto;

        @include for-tablet-landscape-up {
          left: 0;
          right: 0;
          height: 400px;
          width: 300px;
          opacity: 0;
          -webkit-transition: 1s ease;
          transition: 1s ease;
          background-color: white;
          color: black;
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          border-radius: 15px;
          font-size: 5em;
          padding: 0 2rem;
        }
      }
    }

    .bathHouse {
      width: 70%;
      height: 500px;
      background-image: url("../assets/images/budapest/IMG_20160203_154743.jpg");
      background-position: left;
      background-size: 600px;
      background-repeat: no-repeat;
      margin: 2em;
      border-radius: $border-radius;
      background-color: white;
      padding: 0.5em;

      @include for-big-desktop-up {
        @include flexCenter(row);

        width: 95%;
        background-size: 400px;
        height: 400px;
        padding: 0;
      }

      @include for-tablet-landscape-up {
        @include flexCenter(row);
        max-width: 400px;
        background-color: unset;
        border-radius: $border-radius;
      }

      .bathHouseText {
        width: 50ch;
        margin: 0 4rem 0 auto;
        p {
          font-size: 1em;
        }

        @include for-big-desktop-up {
          width: 57%;
          margin-left: auto;

          @include for-tablet-landscape-up {
            display: none;
          }
        }

        h2 {
          font-size: 2em;
          font-weight: bold;
          padding: 0.5em 1em;
          text-align: center;
        }

        p {
          line-height: 1.3;
        }
      }
    }

    .bathouseVisit:hover h1 {
      opacity: 0.5;
    }
  }

  .visiting {
    @include flexCenter(row);

    @include for-big-desktop-up {
      flex-direction: column;
    }

    @include for-tablet-landscape-up {
      position: relative;
      margin: auto;
      // position: relative;
      // width: 50%;
    }

    h1 {
      font-size: 2em;
      width: 200px;
      margin: auto;

      @include for-tablet-landscape-up {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 400px;
        width: 300px;
        opacity: 0;
        -webkit-transition: 1s ease;
        transition: 1s ease;
        background-color: white;
        color: black;
        font-size: 3em;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 0 1.5rem;
      }
    }

    .tourism {
      width: 70%;
      height: 550px;
      background-image: url("../assets/images/budapest/TINYPLANET_PANO_20160202_161622.png");
      background-position: right;
      background-size: 600px;
      background-repeat: no-repeat;
      margin: 2em;
      padding: 0.5em;

      border-radius: $border-radius;
      background-color: white;

      @include for-big-desktop-up {
        @include flexCenter(row);

        width: 95%;
        background-size: 400px;
        height: 400px;
        padding: 0;
      }

      @include for-tablet-landscape-up {
        @include flexCenter(row);
        max-width: 400px;
        background-color: unset;
        border-radius: $border-radius;
      }

      .tourismText {
        width: 43%;
        margin: 0 auto 0 0;

        @include for-big-desktop-up {
          width: 57%;
        }

        @include for-tablet-landscape-up {
          display: none;
        }

        h2 {
          font-size: 2em;
          font-weight: bold;
          padding: 0.5em 1em;
          text-align: center;
        }

        p {
          font-size: 1em;
          line-height: 1.3;
          padding: 0.5em;
        }
      }
    }
  }

  .visiting:hover h1 {
    opacity: 0.5;
  }

  .gallery {
    @include flexCenter(column);
    padding-top: 6em;
    padding-bottom: 6em;

    h1 {
      margin: auto;
      margin-bottom: 1em;
    }

    .gridContainer {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 400px 400px 400px;
      height: 650px;
      margin: auto;

      @include for-big-desktop-up {
        @include flexCenter(column);
        width: 90%;
      }

      .image {
        color: #fff;
        border-radius: 5px;
        padding: 20px;

        @include for-big-desktop-up {
          @include flexCenter(column);
          width: 100%;
          height: 90%;
        }
      }

      .top {
        grid-column: 1 / span 2;
        background-image: url("../assets/images/budapest/pexels-pixabay-53377.jpg");
        background-size: cover;
        background-position: center;
      }

      .right {
        grid-column: 3;
        grid-row: 1 / span 2;
        background-image: url("../assets/images/budapest/pexels-lexi-lauwers-2984322.jpg");
        background-size: cover;
        background-position: center;
      }

      .bottomLeft {
        grid-column: 1;
        grid-row: 2;
        background-image: url("../assets/images/budapest/pexels-nikolett-emmert-4589325.jpg");
        background-size: cover;
        background-position: center;
      }

      .bottomRight {
        grid-column: 2;
        grid-row: 2;
        background-image: url("../assets/images/budapest/pexels-nora-1750352.jpg");
        background-size: cover;
        background-position: center;
      }
    }
  }
}

footer {
  background-color: $color-purple;
  padding: 1em;
  columns: 100px 4;
  column-rule: white 1px dotted;


   
      p {
     color: white;
     font-size: 0.6em;
     margin: 0;

      }
    
  
}
</style>
