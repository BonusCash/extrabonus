import { createRouter, createWebHistory } from "vue-router";
import webViewComponent from "../bonus-center/pages/home/web-view.component.vue";
import homeViewComponent from "../bonus-center/pages/home/home-view.component.vue";
import profileViewComponent from "../bonus-center/pages/profile/profile-view.component.vue";
import bonusViewComponent from "../bonus-center/pages/rooms/bonus-view.component.vue";
import notificationViewComponent from "../bonus-center/pages/notification/notification-view.component.vue";
import createBonusComponent from "../bonus-center/pages/create-rooms/create-bonus.component.vue";
import signIn from "../security/sign-in.component.vue";
import signUp from "../security/sign-in.component.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "sign-in",
      component: signIn,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: signUp,
    },
    { path: "/web", redirect: { name: "home" } },
    {
      path: "/web",
      name: "web",
      component: webViewComponent,
      children: [
        { path: "/home", name: "home", component: homeViewComponent },
        { path: "/profile", name: "profile", component: profileViewComponent },
        { path: "/bonus", name: "bonus", component: bonusViewComponent },
        {
          path: "/notification",
          name: "notification",
          component: notificationViewComponent,
        },
        {
          path: "/create-bonus",
          name: "create-bonus",
          component: createBonusComponent,
        },
      ],
    },
  ],
});

export default router;
