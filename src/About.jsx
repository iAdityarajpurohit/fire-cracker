import React, { useState } from 'react'
import Navbar from './Navbar';
import Card from 'react-bootstrap/Card';
import AboutDetail from './aboutDetail';



 const About = () => {
  const[data,setData] = useState(AboutDetail);
  console.log(data);
  return (
   <>
    <Navbar/>
     <h1>About Page </h1>
<section className='main-card--cointainer'>
   {
    AboutDetail.map((curElm,index)=>{
      const {id,image,description} = curElm;
      return(
            <div key={index}>
        <Card style={{ width: '28rem' }}>
          <h4>{id}</h4>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    
    </Card>
    </div>
      )
    })
   }
  </section>
   </>
  )
}
export default About;