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

            <Carousel.Caption className="capture card-img-overlay" style={{ top:"200px",paddingLeft:"100px",paddingRight:"100px"}}>
               <h1 className="display-1 ">Ankit Cracker's</h1>  
               {/* <h1><span class="fire">A</span><span class="burn">N</span><span class="burn">K</span><span class="fire">I</span>
               <span class="fire">T</span> <br />
               <span class="fire">C</span><span class="burn">R</span><span class="burn">A</span><span class="fire">C</span>
               <span class="fire">K</span><span class="burn">E</span><span class="burn">R</span><span class="fire">'S</span> Text-Shadow</h1> */}
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button type="button" className="button-85"><NavLink  to="/About" >Review</NavLink></button>
              <button type="button" className="button-85"><NavLink  to="/services">Go To Shoping</NavLink></button> */}
             
              
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

            <Carousel.Caption className="capture" style={{ top:"270px",paddingLeft:"100px",paddingRight:"100px"}}>
            <h1 className="display-1">Ankit Cracker's</h1>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button type="button" className="button-85">Lattest Offer</button>
              <button type="button" className="button-85">Go to Shopping</button>
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

            <Carousel.Caption className="capture" style={{ top:"270px",paddingLeft:"100px",paddingRight:"100px"}}>
            <h1 className="display-1">Ankit Cracker's</h1>
              <h3>Third slide label</h3>
              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <button type="button" className="button-85">Lattest Offer</button>
              <button type="button" className="button-85">Go to Shopping</button>
            </Carousel.Caption>
          </Carousel.Item> 
        </Carousel> 
{/* ========================================= */}

{/* 
<div
  id="carouselVideoExample"
  className="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>

  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

// ------------------------------------------------


  <div className="carousel-inner">
 
    <div className="carousel-item active">
    <video
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "50%" }}
              >
        <source src="https://vod-progressive.akamaized.net/exp=1671012346~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1118%2F11%2F280593358%2F1052229237.mp4~hmac=6bcf4a95841ad128d62199244503e49cc93a982290f3a18062937c069c42b3f1/vimeo-prod-skyfire-std-us/01/1118/11/280593358/1052229237.mp4" type="video/mp4"  style={{ width: "100%", height: "50%" }}/>
      </video>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </p>
      </div>
    </div>

    <div className="carousel-item">
    <video
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "50%" }}
              >
        <source src="https://vod-progressive.akamaized.net/exp=1671012964~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4299%2F17%2F446499117%2F1958466713.mp4~hmac=463b23319b22ad54e5f947b95f8ed38962dc5053dee2559cf16bd685f35d4b8c/vimeo-prod-skyfire-std-us/01/4299/17/446499117/1958466713.mp4" type="video/mp4"   style={{ width: "100%", height: "50%" }}/>
      </video>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

   
    <div className="carousel-item">
    <video
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "50%" }}
              >
        <source
          src="https://vod-progressive.akamaized.net/exp=1671012346~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1118%2F11%2F280593358%2F1052229237.mp4~hmac=6bcf4a95841ad128d62199244503e49cc93a982290f3a18062937c069c42b3f1/vimeo-prod-skyfire-std-us/01/1118/11/280593358/1052229237.mp4"
          type="video/mp4"  style={{ width: "100%", height: "50%" }} />
      </video>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </div>
    </div>
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselVideoExample"
    data-mdb-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-mdb-target="#carouselVideoExample"
    data-mdb-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 




{/* ------------------ */}

     {/* by link  */}
{/* 
<div className="row">
  <div className="md-12" ms-auto>

  <iframe src="https://drive.google.com/file/d/1H3EEWKyilbNM_Sm97qt7pZH5qJ-2TAqx/preview" width="640" height="480" allow="autoplay"></iframe>
    <Carousel fade>
      <Carousel.Item>
      <video
                autoPlay
                muted
                loop
                style={{ width: "100vw", height: "80vh" , }}
              >
        <source src="https://drive.google.com/file/d/1H3EEWKyilbNM_Sm97qt7pZH5qJ-2TAqx/preview" width="640" height="480" allow="autoplay" type="video/mp4"   />
      </video>
        <Carousel.Caption className="capture card-img-overlay">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <video
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "80vh" }}
              >
        <source src="https://vod-progressive.akamaized.net/exp=1671012964~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4299%2F17%2F446499117%2F1958466713.mp4~hmac=463b23319b22ad54e5f947b95f8ed38962dc5053dee2559cf16bd685f35d4b8c/vimeo-prod-skyfire-std-us/01/4299/17/446499117/1958466713.mp4" width="100vw" height="100vh"  />
      </video>

        <Carousel.Caption className="capture card-img-overlay" >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <video
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "80vh" }}
              >
        <source src="https://vod-progressive.akamaized.net/exp=1671014285~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1652%2F17%2F433262783%2F1885884325.mp4~hmac=9db415aeb2f7b42d2715c76122206557186fd8bc79f4dd116a1ec8606cecfe12/vimeo-prod-skyfire-std-us/01/1652/17/433262783/1885884325.mp4" type="video/mp4" width="100vw" height="100vh" />
      </video>

        <Carousel.Caption className="capture card-img-overlay" >
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
</div> */}

    
  <Footer/>
    </>
  );
};
export default Home;


