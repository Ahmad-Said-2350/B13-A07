import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import FriendsDetails from "../Ui/FriendsDetails";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  
   {
    path: "/",
    Component:RootLayout ,
    children: [
      { index: true, Component:Home  },
      { path:'/timeline',Component:Timeline },
      {path:"/stats",Component:Stats},
      {path:"/friendsDetails/:id",Component:FriendsDetails}
    ],
errorElement:<Error></Error>
  },
]);