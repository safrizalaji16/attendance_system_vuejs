<script>
// import { mapActions, mapState } from 'pinia';
// import { useLoginStore } from '../stores/login';

import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user';


export default {
  name: "LoginForm",
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, ["login"]),
    handleLogin() {
      this.login(this.loginData)
      if (localStorage.email) {
        this.$router.push(`/`);
      }
    },
  }
}
</script>

<template>
  <div style="margin-top: 10px;"
    class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
    <p class="lead fw-normal mb-0 me-3">Sign In</p>
  </div>

  <form style="margin: 10px;" @submit.prevent="handleLogin">
    <!-- Email input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="form3Example3">Email</label>
      <input v-model="loginData.email" type="email" id="form3Example3" class="form-control form-control-lg"
        placeholder="Enter a valid email address" />
    </div>

    <!-- Password input -->
    <div class="form-outline mb-3">
      <label class="form-label" for="form3Example4">Password</label>
      <input v-model="loginData.password" type="password" id="form3Example4" class="form-control form-control-lg"
        placeholder="Enter password" />
    </div>

    <div class="text-center text-lg-start mt-4 pt-2">
      <button type="submit" class="btn btn-primary btn-lg"
        style="padding-left: 2.5rem; padding-right: 2.5rem; background-color: #5F66E1;">Login</button>
    </div>

  </form>
</template>