import React from "react";
import Card from "react-bootstrap/Card";


const ServiceCard = ({ data }) => {
  return (
    <>
      <section className="main-card--cointainer1">
        {data.map((currElm, index) => {
          const { id, Image, price, category } = currElm;

          return (
            <div key={index}>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={Image} />
                  <Card.Body className="cardItem1">
                    <h3>{category}</h3>
                  </Card.Body>
                <div className="cardItem">
                  <h4> ID : {id}</h4>
                  <h3>PRICE: {price}</h3>
                  <Card.Body>
                  <button type="button" class="btn btn-danger">Add-Item</button>
                  </Card.Body>
               </div>
              </Card>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default ServiceCard;

// ----------------------
