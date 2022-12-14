import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

import './nav.css';

function ColorSchemesExample() {
  return (
    <>
      {/* <Navbar className='navbar sticky-top nav' variant="dark">
        <Container className='nav' >
          <Navbar className='txt material-bubble' to="/">Cracker</Navbar>
          <Nav className="ms-auto">
            <NavLink active className="px-3 txt material-bubble" to="/">Home</NavLink>
            <NavLink  className="px-3 txt material-bubble"  to="/services">Services</NavLink>
            <NavLink  className="px-3 txt material-bubble"  to="/About">About</NavLink>
            <NavLink  className="px-3 txt material-bubble"  to="/contact">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar> */}

      {/* ======================= */}
      <ul className='nav1'> 
      

       <img className='logo rounded-circle zoom-in-zoom-out' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DW18HmYaBmXjFhR9zkC3TljfOk8gfNn31g&usqp=CAU" width={100} alt="" />
  
      
      

   <li><NavLink active className="px-3 txt material-bubble" to="/">Home</NavLink></li>
   <li><NavLink  className="px-3 txt material-bubble" to="/services">Services</NavLink></li>
   <li><NavLink className="px-3 txt material-bubble" to="/About">About</NavLink></li>
   <li><NavLink  className="px-3 txt material-bubble" to="/contact">Contact</NavLink></li>
   

</ul>
     
    </>
  );
}

export default ColorSchemesExample;