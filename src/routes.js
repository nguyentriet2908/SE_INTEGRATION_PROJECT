import Dashboard from "views/admin/Dashboard.js";
import Profile from "views/admin/Profile.js";
import Calendar from "views/admin/Calendar.js";
import Login from "views/admin/Login.js";
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
    icon: "ni ni-collection text-info",
    component: <Notes />,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-calendar-grid-58 text-green",
    component: <Calendar />,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-blue",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
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
