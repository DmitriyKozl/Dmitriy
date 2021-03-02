<template>
  <div class="Mailcontainer">
    <div class="Contact_text">
      <h4>Contact</h4>
      <p>
        Liked what you see or just want to have a good talk over a great cup of
        coffee? Please don’t hesitate to contact me.
      </p>
      <div class="lang">
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
      </div>
    </div>
    <form class="form" @submit.prevent="submit">
      <div class="form-content">
        <div class="form-content-name">
          <label class="label" for="name">Naam</label>
          <input type="text" name="name" id="name" required="" v-model="name" />
        </div>
        <div class="form-content-surname">
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
      <div class="form-email">
        <label class="label" for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required=""
          v-model="email.value"
        />
      </div>
      <div class="form-text">
        <label class="label" for="textarea">Bericht</label>
        <textarea
          class="message"
          name="textarea"
          id="textarea"
          required=""
          v-model="message.text"
          :maxlength="message.maxlength"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Mail",
  data: function() {
    return {
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
};
</script>

<style lang="scss">
@mixin flexCenter() {
  display: flex;
  justify-content: center;
}
.Mailcontainer {
  padding: 4rem;
  @include flexCenter();

  .Contact_text {
    text-align: left;
    max-width: 50ch;
    @include flexCenter();
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
  }

  .lang {
    margin-right: auto;
    display: flex;
    justify-content: baseline;
    align-items: center;
    text-align: left;
    margin: 2rem auto 0 0;
    .icon {
      width: 30px;
      height: 30px;
      background: rgba(0, 0, 0, 0.397);
      margin-right: 4rem;
    }
  }
}

.form {
  @include flexCenter();
  flex-direction: column;
  width: 50%;

  &-content {
    @include flexCenter();
    justify-content: space-between;
    color: black;
    width: 70%;
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
    width: 70%;
    margin: 1rem auto;
  }
  &-text {
    @include flexCenter();
    flex-direction: column;
    text-align: left;
    color: black;
    width: 70%;
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
</style>
