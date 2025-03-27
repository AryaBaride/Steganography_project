import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";    
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import "./app.css";
import { ThemeProvider } from "@/components/theme-provider";
import ProtectedRoute from "@/components/protected-route";
import Encode from "@/pages/encode.jsx";
import Decode from "@/pages/decode.jsx";
import AboutUs from "./pages/about";
import Contact from "@/pages/contact"
import PrivacyPolicy from "@/pages/privacy.jsx";
 



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
          
        },
      
        {
            path: "/",
            
            children: [
              { index: true, element: <LandingPage /> },
              { path: "/privacy", element: <PrivacyPolicy /> }, // Add this route
            ],
          },
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
