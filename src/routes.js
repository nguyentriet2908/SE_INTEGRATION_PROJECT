import Dashboard from "views/admin/Dashboard.js";
import Profile from "views/admin/Profile.js";
import Calendar from "views/admin/Calendar.js";
import Register from "views/admin/Register.js";
import Logout from "views/admin/Login.js";
import Tables from "views/admin/Tables.js";
import Notes from "views/admin/Notes.js";
import Icons from "views/admin/Icons.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/notes",
    name: "Notes",
    icon: "ni ni-planet text-blue",
    component: <Notes />,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-pin-3 text-orange",
    component: <Calendar />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Logout />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
];
export default routes;
