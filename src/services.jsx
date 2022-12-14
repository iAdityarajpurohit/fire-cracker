import React from 'react'
import ServiceApi from './serviceApi';
import { useState } from 'react';
import ServiceNavbar from './serviceNavbar';
import ServiceCard from './serviceCard';
import ServiceOffer from './serviceOffer';

const uniqueList = [
  ...new Set(
    ServiceApi.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

 const Services = () => {
  const [data, setData] = useState(ServiceApi);
  const [menuList, setMenuList] = useState(uniqueList);
  console.log("data  ",data);

  const filterItem = (category) => {
    if (category === "All") {
      setData(ServiceApi);
      return;
    }

    const updatedList = ServiceApi.filter((curElem) => {
      return curElem.category === category;
    });

    setData(updatedList);
  
  };


  return (
     <>
       <h1> Services Provided</h1>
       <ServiceOffer/>
       <ServiceNavbar filterItem={filterItem} menuList={menuList} />
      <ServiceCard data={data} />
     </>
  )
}
export default Services;