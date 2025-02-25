import React from "react";
import { Button } from "@/components/ui/button";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import ProtectedRoute from "./components/protected-route";     
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import "./app.css";
import { ThemeProvider } from "@/components/theme-provider";
import ProtectedRoute from "@/components/protected-route";
import Encode from "@/pages/encode.jsx";
import Decode from "@/pages/decode.jsx";
import AboutUs from "./pages/about";
import Contact from "@/pages/contact"




const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path:"/encode",
          element:(
            <ProtectedRoute>
              <Encode />
            </ProtectedRoute>
          ),
        },
        {
          path:"/decode",
          element: (<ProtectedRoute>
            <Decode />
          </ProtectedRoute>),
        },
        {
          path:"/about",
          element:(
            <AboutUs/>
          )
        },
        {

          path:"/contact",
          element:<Contact/>
          
        }
        
        
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
