import React from "react";
import Services from "./services";
import Contact from "./contact";
import Home from "./Home";
import About from "./About";
import'bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter, Route, Routes}  from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
           
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
