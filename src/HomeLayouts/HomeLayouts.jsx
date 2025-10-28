import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const HomeLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <header>
            <Navbar></Navbar>
        </header>


        <main className="flex-grow"></main>


        <footer>
            <Footer></Footer>
        </footer>
      
    </div>
  );
};

export default HomeLayouts;
