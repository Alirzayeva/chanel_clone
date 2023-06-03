import React from "react";
import eyeWearCard from "../assets/images/background/otherBg/eyewearCard_bg.webp";
import { Link } from "react-router-dom";
const EyeWearCard = () => {
  return (
    <div className="eyeWearCardInfo">
      <div className="container">
        <div className="img">
          <img src={eyeWearCard} alt="eyeWearCard" />
          <span>
            <Link to="/eye-wear"> eyewear home </Link>
          </span>
        </div>
        <div className="column">
          <h3>sunglasses</h3>
          <Link to="/eye-wear">New This Season</Link>
          <Link to="/eye-wear">Exclusives </Link>
          <Link to="/eye-wear">Timeless</Link>
          <Link to="/eye-wear"> All Sunglasses</Link>
          <Link to="/eye-wear">New Watches</Link>
        </div>
        <div className="column">
          <h3> eyeglasses</h3>
          <Link to="/eye-wear">New This Season</Link>
          <Link to="/eye-wear">Timeless</Link>
          <Link to="/eye-wear">All Eyeglasses</Link>
          <Link to="/eye-wear"> Blue Light Glasses</Link>
        </div>
        <div className="column">
          <h3>stories </h3>
          <Link to="/eye-wear">Simplicity and Sophistication</Link>
          <Link to="/eye-wear">A Parisian Walk</Link>
          <Link to="/eye-wear">Femininity and Refinement</Link>
          <Link to="/eye-wear"> A Nod to the Codes of the House</Link>
          <Link to="/eye-wear">Riviera Spirit</Link>
          <Link to="/eye-wear">Adorned With Pearls</Link>
          <Link to="/eye-wear">Eyewear campaign</Link>
        </div>
        <div className="column">
          <h3>services </h3>
          <Link to="/eye-wear"> Size Guide</Link>
          <Link to="/eye-wear"> Shipping and Lens Replacement </Link>
          <Link to="/eye-wear">Care Instructions</Link>
        </div>
      </div>
    </div>
  );
};

export default EyeWearCard;
