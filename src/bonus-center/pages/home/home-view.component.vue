<template>
  <h1>home</h1>
  <a>{{ user.name }}</a>
  <a>{{ user.email }}</a>
</template>

<script>
import { UserApiService } from "../../services/user-api.service";
import { StorageService } from "../../../core/services/local-storage.service";

export default {
  name: "home-view.component",
  data() {
    return {
      user: {},
      userApiService: null,
      localStorage: null,
      userId: 0,
    };
  },
  created() {
    this.userApiService = new UserApiService();
    this.localStorage = new StorageService();
    this.userId = this.localStorage.getUser("userid");
    this.userApiService.getById(this.userId).then((response) => {
      this.user = response.data;
      console.log(response.data);
    });
  },
  beforeCreate() {},
};
</script>

<style scoped></style>
