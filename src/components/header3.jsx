// Main Header ->
import React, { useEffect } from "react";
import {  useSearchParams } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { Button } from "@/components/ui/button";
import "./header.css";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();
  useEffect(() => {
    if (search.has("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (event) => {
    event.target === event.currentTarget
      ? setShowSignIn(false)
      : setShowSignIn(true);
    setSearch({});
  };
  return (
    <>
 <nav className="flex items-center justify-start space-x-8 px-6 py-4">
  {/* Logo */}
  <NavLink>
    <img src="./logo2.png" className="h-20" alt="Logo" />
  </NavLink>

  {/* Navbar Links - Adjusted spacing */}
  <div className="flex items-center space-x-5">
    <NavLink
      to="/"
      className="relative text-white hover:text-gray-400 transition duration-300 after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      className="relative text-white hover:text-gray-400 transition duration-300 after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      About Us
    </NavLink>
    <NavLink
      to="/#faqs"
      className="relative text-white hover:text-gray-400 transition duration-300 after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      FAQs
    </NavLink>
    <NavLink
      to="/contact"
      className="relative text-white hover:text-gray-400 transition duration-300 after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      Contact
    </NavLink>
  </div>

  {/* Authentication Buttons */}
  <div className="flex items-center space-x-3">
    <SignedOut>
      <Button
        onClick={() => setShowSignIn(true)}
        variant="outline"
      >
        Login
      </Button>
    </SignedOut>
    <SignedIn>
      <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
    </SignedIn>
  </div>
</nav>


      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/"
            // fallbackRedirectUrl="/"
          />
        </div>
      )}
    </>
  );
};

export default Header;
