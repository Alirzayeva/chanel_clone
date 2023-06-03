import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MainContext } from "../utils/MainContext";
const ProductDetails = () => {
  const { addToCart } = useContext(MainContext);
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    try {
      axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="singleProduct">
      <div className="container">
        <div className="row">
          <div className="productDetails">
            <div className="leftSide">
              <img
                src={`http://localhost:5000/${
                  data ? data?.productImage : "uploads/parfume_6.png"
                }`}
                alt={data?.name}
              />
            </div>
            <div className="rightSide">
              <h2 className="title">{data?.name}</h2>
              <p className="details">{data?.details}</p>
              <span className="price">$ {data?.price} </span>
              <p>3.4 FL. OZ.</p>
              <button
                onClick={() => {
                  addToCart(data);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
