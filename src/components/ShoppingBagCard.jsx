import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../utils/MainContext";
import { Link } from "react-router-dom";

const ShoppingBagCard = () => {
  const { cart, setCart, setCartIsOpen } = useContext(MainContext);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let sum = cart.map((product) => {
      return product.price * product.quantity;
    });
    let sumPrice = sum.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(sumPrice);
  }, [cart]);

  const handleQuantityChange = (productID, quantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productID) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeAllProducts = () => {
    setCart([]);
  };

  return (
    <div className="ShoppingBagCard">
      <div className="bagCardInfo">
        <h2>Shopping Bag</h2>
        {cart.length === 0 && (
          <div className="emptyInfo" onClick={() => setCartIsOpen(false)}>
            <p>Cart is Empty</p>
            <Link to="/shop">Go to Shop</Link>
          </div>
        )}
        {cart?.map((item) => {
          return (
            <div className="productInfo" key={item?.id}>
              <img
                src={`http://localhost:5000/${item?.productImage}`}
                alt={item?.name}
              />
              <div className="productDetails">
                <h4>{item?.name}</h4>
                <p>{item?.details}</p>
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
              </div>
              <span className="total">${item?.price}</span>
            </div>
          );
        })}
        {cart.length !== 0 && (
          <div className="subTotal">
            <h2>Subtotal</h2>
            <span>$ {totalPrice}</span>
          </div>
        )}
        {cart.length !== 0 && (
          <Link to="/cart">
            <button onClick={() => setCartIsOpen(false)}>
              Review Bag & Checkout
            </button>
          </Link>
        )}
      </div>
      {cart.length !== 0 && (
        <div className="emptyCart" onClick={removeAllProducts}>
          <p>Remove all products</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingBagCard;
