import Login from "views/Login.js";
import Register from "views/Register.js";

var routes = [
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-button-power text-red",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-button-power text-red",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
