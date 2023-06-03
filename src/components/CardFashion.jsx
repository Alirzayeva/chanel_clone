import React from "react";

import fashionImg from "../assets/images/background/otherBg/fashion_bg.webp";
import { Link } from "react-router-dom";
const CardFashion = () => {
  return (
    <div className="cardFashionInfo">
      <div className="container">
        <div className="img">
          <img src={fashionImg} alt="fashionImg" />
          <span>
            <Link to="/fashion"> Fashion Home </Link>
          </span>
        </div>
        <div className="column">
          <h3>latest shows</h3>
          <Link to="/fashion">Fall-Winter 2023/24</Link>
          <p>Available in boutiques from September 2023</p>
          <Link to="/fashion">Métiers d'art 2022/23</Link>
          <p>Available in boutiques from June 2023</p>
        </div>
        <div className="column">
          <h3>in boutiques</h3>
          <Link to="/fashion">The CHANEL 22 Bag</Link>
          <Link to="/fashion">Spring-Summer 2023</Link>
          <Link to="/fashion">Spring-Summer 2023 Pre-collection</Link>
          <Link to="/fashion">Cruise 2022/23</Link>
          <Link to="/fashion">Ready-To-Wear</Link>
          <Link to="/fashion">Handbags</Link>
          <Link to="/fashion">Shoes</Link>
          <Link to="/fashion">Costume Jewelry</Link>
          <Link to="/fashion">Small Leather Goods</Link>
          <Link to="/fashion">Eyewear</Link>
          <Link to="/fashion">Other Accessories</Link>
        </div>
        <div className="column">
          <h3>savoir-faire</h3>
          <Link to="/fashion">
            Discover the savoir-faire of the 2022/23 Métiers d'art collection
          </Link>
          <h3>chanel news</h3>
          <Link to="/fashion">Discover the latest news</Link>
          <h3>literary rendezvous at rue cambon</h3>
          <Link to="/fashion">Discover the episodes</Link>
        </div>
        <div className="column">
          <h3>services</h3>
          <Link to="/fashion"> Chanel & moi</Link>
          <p>A programme of services to preserve each CHANEL creation</p>
          <Link to="/fashion"> Find a Boutique </Link>
          <Link to="/fashion"> Book an appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default CardFashion;
