// Layout.js

import React from "react";
// import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
      <div>
        <main>
        <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    );
  };
  
  export default Layout;
