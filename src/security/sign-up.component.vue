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

            <label for="name1" class="block text-900 text-xl font-medium mb-2"
            >Name</label
            >
            <pv-input-text
              id="name1"
              v-model="user.name"
              type="text"
              class="w-full mb-3"
              placeholder="Name"
              style="padding: 1rem"
            />


            <label for="email1" class="block text-900 text-xl font-medium mb-2"
            >Email</label
            >
            <pv-input-text
              id="email1"
              v-model="email"
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
              v-model="password"
              placeholder="Password"
              :toggleMask="true"
              class="w-full mb-3"
              inputClass="w-full"
              inputStyle="padding:1rem"
            ></pv-password>
            <pv-button label="Sign Up" class="w-full p-3 text-xl"></pv-button>
            <div class="flex align-items-center justify-content-between mb-5">
              <router-link to="/">
                <a
                  class="font-medium no-underline ml-2 text-right cursor-pointer"
                  style="color: var(--primary-color)"
                >back to sign in</a
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
export default {
  name: "sign-up.component",
  data() {
    return {
      user: {},
      userApiService: null,
    };
  },
  methods: {
    logIn() {},
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
