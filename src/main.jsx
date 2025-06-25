import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Resume from './Components/Resume/Resume.jsx';
import Experience from './Components/Experience/Experience.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
 {
    path: "",
    Component: Home,
  },
   {
    path: "about",
    Component: About,
  },
   {
    path: "resume",
    Component: Resume,
  },
  
   {
    path: "experience",
    Component: Experience,
  },

    ]
  },

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
