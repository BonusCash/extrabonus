<template>
  <div
    class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"
  >
    <div class="grid justify-content-center p-2 lg:p-0" style="min-width: 80%">
      <div class="col-12 mt-5 xl:mt-0 text-center"></div>
      <div
        class="col-12 xl:col-6"
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(
            180deg,
            var(--primary-color),
            rgba(33, 150, 243, 0) 30%
          );
          background-color: beige;
        "
      >
        <div
          class="h-full w-full m-0 py-7 px-4"
          style="
            border-radius: 53px;
            background: linear-gradient(
              180deg,
              var(--surface-50) 38.9%,
              var(--surface-0)
            );
          "
        >
          <div class="text-center mb-5">
            <div class="text-900 text-3xl font-medium mb-3">
              Bienvenido a QSE
            </div>
            <span class="text-600 font-medium">Sign in to continue</span>
          </div>

          <div class="w-full md:w-10 mx-auto">
            <label for="email1" class="block text-900 text-xl font-medium mb-2"
              >Email</label
            >
            <pv-input-text
              id="email1"
              v-model="user.email"
              type="text"
              class="w-full mb-3"
              placeholder="Email"
              style="padding: 1rem"
            />

            <label
              for="password1"
              class="block text-900 font-medium text-xl mb-2"
              >Password</label
            >
            <pv-password
              id="password1"
              v-model="user.password"
              placeholder="Password"
              :toggleMask="true"
              class="w-full mb-3"
              inputClass="w-full"
              inputStyle="padding:1rem"
            ></pv-password>
            <pv-button
              label="Sign In"
              class="w-full p-3 text-xl"
              @click="signIn"
            ></pv-button>
            <div class="flex align-items-center justify-content-between mb-5">
              <router-link to="/sign-up">
                <a
                  class="font-medium no-underline ml-2 text-right cursor-pointer"
                  style="color: var(--primary-color)"
                  >do you want to create an account?</a
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserApiService } from "../bonus-center/services/user-api.service";
import { StorageService } from "../core/services/local-storage.service";

export default {
  name: "sign-in.component",
  data() {
    return {
      email: null,
      password: null,
      user: {},
      userApiService: null,
      validated: false,
      localStorage: null,
    };
  },
  methods: {
    signIn() {
      this.userApiService = new UserApiService();
      this.localStorage = new StorageService();
      this.userApiService
        .findByEmailandPassword(this.user.email, this.user.password)
        .then((response) => {
          if (response.data.length!=0) {
            console.log(response);
            this.validated = true;
            this.localStorage.setUser("userid", response.data[0].id);
            this.$router.push("/web");
            alert("inicio de sesion exitoso");
          } else {
            alert("usuario y contraseña erroneó");
            console.log(response);
          }
        });
    },
    signUp() {},
  },
};
</script>

<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}
.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>
