import React, { useEffect, useState, useContext } from "react";
import { MainContext } from "../utils/MainContext";
import { Link } from "react-router-dom";
////Image
import cartImg from "../assets/images/background/cart/bagImg.webp";
import payIcon from "../assets/images/icon/paypal.png";
import visa from "../assets/images/card/visa.png";
import amercanExpress from "../assets/images/card/american_express.png";
import master from "../assets/images/card/master.png";
import discover from "../assets/images/card/discover.png";
import dinersClub from "../assets/images/card/diners_club.png";
import jcb from "../assets/images/card/jcb.jpg";
import payPal from "../assets/images/card/paypal.png";
import pay from "../assets/images/card/pay.png";

const Cart = () => {
  const { cart, setCart } = useContext(MainContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const removeProduct = (productID) => {
    const deletedItem = cart.filter((item) => item.id !== productID);
    setCart(deletedItem);
  };

  const handleQuantityChange = (productID, quantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productID) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    let sum = cart.map((product) => {
      return product.price * product.quantity;
    });
    let sumPrice = sum.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(sumPrice);
  }, [cart]);
  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <img src={cartImg} alt="cartImg" />
          <h2 className="cartTitle">shopping bag </h2>
          {cart?.map((item) => {
            return (
              <div className="productAbout" key={item?.id}>
                <img
                  className="bagImg"
                  src={`http://localhost:5000/${item?.productImage}`}
                  alt={item?.name}
                />
                <div className="productDetails">
                  <h5 className="productTitle">{item?.name}</h5>

                  <p className="productDetailText">{item?.details} </p>
                  <p>3.4FL. OZ.</p>
                  <div className="btn">
                    <button onClick={() => removeProduct(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="quanty">
                  <p>QTY</p>
                  <select
                    name="quanty"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <span> ${item.price * item.quantity} </span>
                </div>
              </div>
            );
          })}
          <div className="checkout">
            <div className="total">
              <p>Subtotal</p>
              <span>Total</span>
            </div>
            <div className="sum">
              <span>$ {totalPrice}</span>
              <span>$ {totalPrice}</span>
            </div>
          </div>
          <button className="checkoutBtn">
            <Link to="/form">Continue To Checkout</Link>
          </button>
          <button className="paypalBtn">
            <img src={payIcon} alt="cart" />
            Paypal
          </button>
          <Link to="/shop">
            <button className="shoppingBtn">Continue Shopping </button>
          </Link>
        </div>

        <div className="paymentMethodsInfo">
          <h2>payment methods</h2>
          <ul className="cardList">
            <li className="cardItem">
              <img src={visa} alt="card" />
            </li>
            <li className="cardItem">
              <img src={amercanExpress} alt="card" />
            </li>
            <li className="cardItem">
              <img src={master} alt="card" />
            </li>
            <li className="cardItem">
              <img src={discover} alt="card" />
            </li>
            <li className="cardItem">
              <img src={dinersClub} alt="card" />
            </li>
            <li className="cardItem">
              <img src={jcb} alt="card" />
            </li>
            <li className="cardItem">
              <img src={payPal} alt="card" />
            </li>
            <li className="cardItem">
              <img src={pay} alt="card" />
            </li>
          </ul>
          <div className="paymentCards">
            <h6>Secure Payment</h6>
            <p>
              Your credit card details are safe with us.
              <br />
              All the information is protected using Secure Sockets Layer (SSL)
              technology.
            </p>
            <Link to="/">Privacy Policy.</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
