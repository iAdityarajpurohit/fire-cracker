import React from "react";
import Navbar from "./Navbar"
import First from "./first.mp4";
import Second from "./second.mp4";
import Third from "./third.mp4";
import Carousel from "react-bootstrap/Carousel";
import Footer from './footer';
import { NavLink } from "react-router-dom";
const Home = () => {
 
  return (
    <>
      <Navbar  />

         <Carousel fade> 
          <Carousel.Item>
            <div className="video-section ">
              <video
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "70%" }}
              >
                <source src={First} type="video/mp4"></source>
              </video>
            </div>

            <Carousel.Caption className="capture card-img-overlay" style={{ top:"200px",paddingLeft:"50px",paddingRight:"100px"}}>
               <h1 className="display-1 ">Shivaji Cracker's</h1>  
               {/* <h1><span class="fire">A</span><span class="burn">N</span><span class="burn">K</span><span class="fire">I</span>
               <span class="fire">T</span> <br />
               <span class="fire">C</span><span class="burn">R</span><span class="burn">A</span><span class="fire">C</span>
               <span class="fire">K</span><span class="burn">E</span><span class="burn">R</span><span class="fire">'S</span> Text-Shadow</h1> */}
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button type="button" className="button-85"><NavLink className="b85" to="/About" >Review</NavLink></button>
              <button type="button" className="button-85"><NavLink className="b85" to="/services">Go To Shoping</NavLink></button>
             
              
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
       


            <div className="video-section ">
              <video
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "50%" }}
              >
                <source src={Second} type="video/mp4"></source>
              </video>
            </div>

            <Carousel.Caption className="capture" style={{ top:"200px",paddingLeft:"50px",paddingRight:"100px"}}>
            <h1 className="display-1">Shivaji Cracker's</h1>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button type="button" className="button-85"><NavLink className="b85"  to="/About" >Review</NavLink></button>
              <button type="button" className="button-85"><NavLink className="b85"  to="/services">Go To Shoping</NavLink></button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          

            <div className="video-section ">
              <video
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "50%" }}
              >
                <source src={Third} type="video/mp4"></source>
              </video>
            </div>

            <Carousel.Caption className="capture" style={{ top:"200px",paddingLeft:"50px",paddingRight:"100px"}}>
            <h1 className="display-1">Shivaji Cracker's</h1>
              <h3>Third slide label</h3>
              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <button type="button" className="button-85"><NavLink className="b85"  to="/About" >Review</NavLink></button>
              <button type="button" className="button-85"><NavLink className="b85" to="/services">Go To Shoping</NavLink></button>
            </Carousel.Caption>
          </Carousel.Item> 
        </Carousel> 

  <Footer/>
    </>
  );
};
export default Home;


