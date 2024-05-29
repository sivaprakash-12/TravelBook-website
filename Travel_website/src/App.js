import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { RiH1 } from "react-icons/ri";


function App() {
  return (
    
      
      <>
      <Navbar />
      <Routes>
        {/* <Route path="*" element={<Destination/>}/> */}
        <Route path="/" element={<Home/>}>
          <Route path="/dest" element={<Destination/>}/>

         
          <Route />
        </Route>
      </Routes>
      <Footer/>
      </>
     
    
  );
}

export default App;
