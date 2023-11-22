import Dashboard from "views/user/Dashboard.js";
import Profile from "views/user/Profile.js";
import Calendar from "views/user/Calendar.js";
import Login from "views/Login.js";
import Tables from "views/user/Tables.js";
import Notes from "views/user/Notes.js";
import Icons from "views/user/Icons.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Dashboard />,
    layout: "/user",
  },
  {
    path: "/notes",
    name: "Notes",
    icon: "ni ni-collection text-info",
    component: <Notes />,
    layout: "/user",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-calendar-grid-58 text-green",
    component: <Calendar />,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/user",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-blue",
    component: <Tables />,
    layout: "/user",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/user",
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-button-power text-red",
    component: <Login />,
    layout: "/auth",
  },
];
export default routes;
