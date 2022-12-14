import React from "react";
const ServiceNavbar = ({filterItem,menuList}) => {
  return (
    <>
      <nav className="navbar d-flex align-items-center justify-content-center">
        <div className="btn-group">
          {menuList.map((currElm, index) => {
            return (
              <button
                key={index}
                className="btn-group__item"
                onClick={() => filterItem(currElm)}
              >
                {currElm}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
export default ServiceNavbar;
