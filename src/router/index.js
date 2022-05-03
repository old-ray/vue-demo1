import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path:"/",
    name:"UserListView",
    component: ()=> import("../views/UserListView.vue")
  },
  {
    path:"/editUser",
    name:"EditUserView",
    component: ()=> import("../views/EditUserView.vue")
  },
  {
    path:"/addUser",
    component: ()=> import("../views/AddUserView.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
