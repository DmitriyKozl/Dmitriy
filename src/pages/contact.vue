<template>
  <Layout>
    <div class="contact">
      <div class="contact-img">
        <img src="@/assets/images/tent.jpg" alt="" />
      </div>
      <ContactForm />
    </div>

    <footer>
      <div class="custom-shape-divider-top-1614761612">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="footerContent">
        <div class="footerText">
          <h2>Of kom eens langs!</h2>
        </div>
        <ContactMap />
        <div class="contactInfo">
          <div class="left">
            <h4>vzw Woudloper</h4>
            <ul>
              <li>0472/204899</li>
              <li>Houte 27, 9860 Balegem</li>
              <li>info@woudloper.be</li>
            </ul>
          </div>
          <div class="right">
            <h4>Scoutsgroep Woudloper</h4>

            <ul>
              <li>0479/795956</li>
              <li>Gijzelstraat 12, 9031 Drongen</li>
              <li>eenheidsleiding@woudloper.be</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </Layout>
</template>

<script>
import ContactMap from "@/components/ContactMap.vue";
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "Contact",
  components: {
    ContactForm,
    ContactMap,
  },
  methods: {
    activate() {
      this.mailFormIsActive = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin flexCenter() {
  display: flex;
  justify-content: center;
}

.contact {
  background-color: #264653;
  height: 100vh;
  @include flexCenter();
  &-img {
    width: 40%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    width: 70%;
    color: white;
    margin: 2rem auto;
  }
}
footer {
  @include flexCenter();
  flex-direction: column;
  position: relative;
  .custom-shape-divider-top-1614761612 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1614761612 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 116px;
  }

  .custom-shape-divider-top-1614761612 .shape-fill {
    fill: #264653;
  }

  .footerContent {
    flex: 1;
    .footerText {
      height: 400px;
      @include flexCenter();

      background: white;

      color: #264653;
      h2 {
        margin: auto;
        font-size: 3rem;

        &::after {
          display: block;
          content: " ";
          width: 100px;
          height: 5px;
          background-color: white;
          margin: 1rem auto;
        }
      }
    }
  }
}
.contactInfo {
  @include flexCenter();

  .left,
  .right {
    // background-color: #264653;
    background: white;

    color: #264653;
    padding: 2rem;
    @include flexCenter();
    flex-direction: column;
    width: 50%;
    h4 {
      font-size: 2rem;
      width: 100%;
      margin: 0;
      color: #264653;

      &::after {
        display: block;
        content: " ";
        width: 50px;
        height: 5px;
        background-color: #264653;
        margin: 1rem auto;
      }
    }
  }
  ul {
    @include flexCenter();
    flex-direction: column;

    padding: 2rem 3rem 0;

    list-style: none;
    li {
      width: 100%;
      margin-bottom: 1rem;
      color: white;
      background: white;
      font-weight: 600;
      color: #264653;
    }
  }
}
</style>
