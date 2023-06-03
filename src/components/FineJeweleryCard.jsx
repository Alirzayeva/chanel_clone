import React from "react";
import fineJew from "../assets/images/background/otherBg/fineJewelery_bg.webp";
import { Link } from "react-router-dom";
const FineJeweleryCard = () => {
  return (
    <div className="fineJeweleryInfo">
      <div className="container">
        <div className="img">
          <img src={fineJew} alt="fineJew" />
          <span>
            <Link to="/fine-jewelery"> fine jewelery Home</Link>
          </span>
        </div>
        <div className="column">
          <h3>featured</h3>
          <Link to="/fine-jewelery">COCO CRUSH, The Encounters</Link>
          <Link to="/fine-jewelery">The Vocabulary of Style</Link>
          <Link to="/fine-jewelery">The Coco Crush stacking guide</Link>
          <Link to="/fine-jewelery"> 18 Place Vendôme</Link>
          <Link to="/fine-jewelery">New Fine Jewelry</Link>
          <Link to="/fine-jewelery">Mother's Day Gifts</Link>
        </div>
        <div className="column">
          <h3> categories</h3>
          <Link to="/fine-jewelery">Rings</Link>
          <Link to="/fine-jewelery">Earrings</Link>
          <Link to="/fine-jewelery">Bracelets</Link>
          <Link to="/fine-jewelery"> Necklaces</Link>
          <Link to="/fine-jewelery">All Fine Jewelry</Link>
          <h3>bridal</h3>
          <Link to="/fine-jewelery">Engagement Rings</Link>
          <Link to="/fine-jewelery">Wedding Ring</Link>
        </div>

        <div className="column">
          <h3>collections</h3>
          <Link to="/fine-jewelery">Coco Crush </Link>
          <Link to="/fine-jewelery"> N°5</Link>
          <Link to="/fine-jewelery">Camélia </Link>
          <Link to="/fine-jewelery"> Ultra</Link>
          <Link to="/fine-jewelery"> Comète</Link>
          <Link to="/fine-jewelery"> Sous le Signe du Lion</Link>
          <Link to="/fine-jewelery"> Plume de CHANEL</Link>
          <Link to="/fine-jewelery">Ruban </Link>
          <Link to="/fine-jewelery">Baroque </Link>
          <Link to="/fine-jewelery"> All Fine Jewelry</Link>
        </div>
        <div className="column">
          <h3>care & services</h3>
          <Link to="/fine-jewelery">Care and Maintenance</Link>
          <Link to="/fine-jewelery"> Our Services </Link>
          <Link to="/fine-jewelery"> Where To Repair My Jewelry?</Link>
        </div>
      </div>
    </div>
  );
};

export default FineJeweleryCard;
