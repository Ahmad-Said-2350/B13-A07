import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";

export const router = createBrowserRouter([
  
   {
    path: "/",
    Component:RootLayout ,
    children: [
      { index: true, Component:Home  },
      { path:'/Timeline',Component:Timeline },
      {path:"/Stats",Component:Stats},
      
    ]

  },
]);