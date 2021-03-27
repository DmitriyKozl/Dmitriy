<template>
  <section class="Mailcontainer" id="contact">
    <div class="Contact_text">
      <h4>Contact</h4>
      <p>
        Liked what you saw? or just want to have a good talk over a great cup of
        coffee? Please don’t hesitate to contact me.
      </p>
      <div class="lang">
        <a class="icon" href="https://www.instagram.com/putumtssss/"
          ><font-awesome
            aria-hidden="true"
            class="icon"
            :icon="['fab', 'instagram']"
        /></a>
        <a
          class="icon"
          href="https://www.linkedin.com/in/dmitriy-kozlov-316959194/"
          ><font-awesome :icon="['fab', 'linkedin']"
        /></a>  <a
          class="icon"
          href="https://github.com/DmitriyKozl"
          ><font-awesome :icon="['fab', 'github']"
        /></a>
      </div>
    </div>
    <form class="mainForm" @submit.prevent="sendEmail">
      <div class="mainForm-content">
        <div class="mainForm-content-name">
          <label class="label" for="name">Naam</label>
          <input type="text" name="name" id="name" required="" v-model="name" />
        </div>
        <div class="mainForm-content-surname">
          <label class="label" for="surname">Voornaam</label>
          <input
            type="text"
            name="name"
            id="surname"
            required=""
            v-model="surname"
          />
        </div>
      </div>
      <div class="mainForm-email">
        <label class="label" for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required=""
          v-model="email.value"
        />
      </div>
      <div class="mainForm-text">
        <label class="label" for="textarea">Bericht</label>
        <textarea
          class="message"
          name="message"
          id="textarea"
          required=""
          v-model="message.text"
        ></textarea>
      </div>
      <button
        @click="activate"
        :class="{ active: isActive }"
        class="plane-send"
        type="submit"
      >
        <g-image
          class="material-icons"
          data-content="send"
          src="~/assets/images/telegram.png"
          alt=""
        >
        </g-image>
      </button>
    </form>
  </section>
</template>

<script>
import emailjs from "emailjs-com";


export default {
  name: "Mail",

  data: function() {
    return {
      isActive: false,

      name: "",
      surname: "",

      email: {
        value: "",
        valid: true,
      },

      message: {
        text: ``,
        maxlength: 255,
      },
      submitted: false,
    };
  },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_45w2qep",
          "template_wgome6m",
          e.target,
          "user_nIRFuPFAc6aBya9B7x7iN"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      e.target.reset();
    },
    activate() {
      return (this.isActive = true);
    },
  },
};
</script>

<style lang="scss">
@mixin flexCenter() {
  display: flex;
  justify-content: space-between;
}

.Mailcontainer {
  padding: 8rem 0;
  @include flexCenter();
  flex-wrap: wrap;
  height: unset;

  .Contact_text {
    text-align: left;
    max-width: 45ch;
    @include flexCenter();
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    margin: 0 auto 4rem;
  }

  .lang {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: left;

    .icon {
      font-size: 3rem;
      margin-right: auto;
      &:nth-child(1) {
        color: #d6249f;
      }

      &:nth-child(2) {
        color: #0077b5;
      }
    }
  }
  button {
    margin: auto;
  }
}

.mainForm {
  @include flexCenter();
  flex-direction: column;
  flex: 1 1 500px;
  margin: auto;
  background: none;
  &-content {
    @include flexCenter();
    justify-content: space-between;
    color: black;
    width: 90%;
    margin: 1rem auto;
    &-name,
    &-surname {
      @include flexCenter();
      flex-direction: column;
      text-align: left;
      width: 40%;
      color: black;
    }
  }
  &-email {
    @include flexCenter();
    flex-direction: column;
    text-align: left;
    color: black;
    width: 90%;
    margin: 1rem auto;
  }
  &-text {
    @include flexCenter();
    flex-direction: column;
    text-align: left;
    color: black;
    width: 90%;
    margin: 2rem auto;
    background: transparent;
  }
  .message {
    height: 100px;
    outline: none;
    border: none;
    border-bottom: 1px solid #6ba9b2ce;
    background: transparent;
  }
}
input {
  color: black;
  height: 30px;
  border: none;
  border-bottom: 1px solid #6ba9b2ce;
  outline: none;
  background: transparent;
}
@mixin center() {
  display: flex;
  justify-content: center;
}

@keyframes rotate-the-funk {
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes shadow {
  0% {
    transform: scale(1) translate(-20%, -10%);
  }
  25% {
    transform: scale(0.5) translate(-20%, -10%);
  }
  50% {
    transform: scale(1) translate(-20%, -10%);
  }
  75% {
    transform: scale(0.5) translate(-20%, -10%);
  }
  100% {
    transform: scale(1) translate(-20%, -10%);
  }
}

button {
  width: 75px;
  height: 75px;
  display: grid;
  place-items: center;
  font-size: 2.85rem;
  background-color: transparent;
  border: 5px solid #0073b6;
  border-radius: 100px;

  margin: auto;
  overflow: hidden;
  transition: 1s border, 0.75s transform;
  outline: none;
  cursor: pointer;
  .material-icons {
    transform: rotate(360deg);

    transform-origin: top center;
    width: 75%;
    height: 75%;

    object-fit: contain;
    object-position: center;
    object-fit: scale-down;
    @include center();

    &:before {
      content: attr(data-content);
      color: #0073b6;
      left: 50%;
      bottom: 0;
      // transform: scale(1) translate(-20%, -10%);
      z-index: -1;
      transform-origin: bottom center;
    }
  }
}
.active {
  transform: translate(0, calc(0 + 2px));

  .material-icons {
    animation: rotate-the-funk 2.25s forwards;
    &:before {
      animation: shadow 2.25s forwards;
    }
  }
}
</style>
