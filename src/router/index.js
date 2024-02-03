import Vue from "vue";
import Router from "vue-router";
import { BasicLayout } from "@/layouts";

const Home = () => import("../pages/Home.vue");
const maodian = () => import("../pages/maodian.vue");
const researchPapers = () => import("../pages/researchPapers.vue");
const projectOverview = () => import("../pages/projects.vue");
const contact = () => import("../pages/contact.vue");
const aboutus = () => import("../pages/aboutus.vue");
const press = () => import("../pages/press.vue");

Vue.use(Router);

export const mainRouters = [
  {
    path: "/",
    component: Home,
    meta: {
      isBlack: true,
    },
  },
  {
    path: "/maodina",
    component: maodian,
  },
  {
    path: "/researchPapers",
    component: researchPapers,
  },
  {
    path: "/projectOverview",
    component: projectOverview,
  },
  {
    path: "/contact",
    component: contact,
  },
  {
    path: "/aboutus",
    component: aboutus,
  },
  {
    path: "/press",
    component: press,
  },
]

export default new Router({
  // mode: "history",
  base:'/caselab/',
  routes: [
    {
      path: "/",
      component: BasicLayout,
      redirect: "/",
      meta: {
        isBlack: true,
      },
      children: mainRouters
    },
    {
      path: "/maodian",
      component: maodian,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
      console.log(savedPosition)
      if(savedPosition) {
          return savedPosition
      } else {
          return {
              x: 0,
              y: 0
          }
      }
  }
});
