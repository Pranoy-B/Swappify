import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const HomeLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <header>
            <Navbar></Navbar>
        </header>



        <main className="flex-grow">
            <Outlet></Outlet>
        </main>


        <footer>
            <Footer></Footer>
        </footer>
      
    </div>
  );
};

export default HomeLayouts;
