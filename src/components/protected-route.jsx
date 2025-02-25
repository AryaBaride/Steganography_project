import React from 'react'
import {useUser} from "@clerk/clerk-react";
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// useUser is like global context.

const ProtectedRoute = ({children}) => {

    const {isSignedIn, user, isLoaded} = useUser();
    const {pathname} = useLocation();
    console.log(pathname);
    if(isLoaded && !isSignedIn && isSignedIn !== undefined){     //  The app waits until isLoaded becomes true.
      return <Navigate to = "/?sign-in=true" />
    }
    console.log(children);
  return (
    children
  )
}

export default ProtectedRoute;

