import React, { useContext } from "react";
import { MainContext } from "../utils/MainContext";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  const { addToCart } = useContext(MainContext);
  return (
    <div className="card">
      <Link to={`/product-details/${data?.id}`}>
        <div className="cardImg">
          <img
            src={`http://localhost:5000/${data?.productImage}`}
            alt={data?.name}
          />
        </div>
      </Link>

      <div className="cardInfo">
        <h4 className="cardTitle">{data?.name}</h4>
        <p className="cardDetails">{data?.details}</p>
        <p className="text">starting from</p>
        <span className="price">${data?.price}</span>
      </div>

      <Link to={`/product-details/${data?.id}`}>
        <div className="cardBtn">
          <button
            onClick={() => {
              addToCart(data);
            }}
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
