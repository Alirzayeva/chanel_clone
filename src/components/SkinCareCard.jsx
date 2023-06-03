import React from "react";
import skinCareCard from "../assets/images/background/otherBg/skincareCard_bg.webp";
import { Link } from "react-router-dom";
const SkinCareCard = () => {
  return (
    <div className="skinCareCardInfo">
      <h5>SHOP SKINCARE ONLINE</h5>
      <div className="container">
        <div className="img">
          <img src={skinCareCard} alt="skinCareCard" />
          <span>
            <Link to="/">MakeUp Home</Link>
          </span>
        </div>
        <div className="column">
          <h3>in the spotlight</h3>
          <Link to="/">New Arrivals</Link>
          <Link to="/">Exclusives</Link>
          <Link to="/">Gift Sets</Link>

          <h3> collections</h3>
          <Link to="/">Sublimage L'Extrait De Nuit</Link>
          <Link to="/">Le Lift Pro</Link>
          <Link to="/"> Skincare Advice from Dr. Amy Wechsler </Link>
          <Link to="/">Skincare Spotlight</Link>

          <h3>services</h3>
          <Link to="/"> The Art of Detail</Link>

          <Link to="/">Les Rendez-Vous CHANEL</Link>
          <Link to="/">Fragrance and Beauty Boutiques </Link>
        </div>
        <div className="column">
          <h3>category</h3>
          <Link to="/">Cleansers & Makeup Removers</Link>
          <Link to="/">Serums </Link>
          <Link to="/">Moisturizers </Link>
          <Link to="/">Eye & Lip Care </Link>
          <Link to="/"> Sun Protection</Link>
          <Link to="/">Masks & Exfoliators</Link>
          <Link to="/">Oils</Link>
          <Link to="/">Mists</Link>
          <Link to="/">Body Care</Link>
          <Link to="/"> All Categories</Link>
        </div>
        <div className="column">
          <h3>line</h3>
          <Link to="/" className="redTitle">
            N°1 DE CHANEL
          </Link>
          <Link to="/">Le Lift & Le Lift Pro </Link>
          <Link to="/">Sublimage</Link>
          <Link to="/">Hydra Beauty </Link>
          <Link to="/"> Le Blanc </Link>
          <Link to="/">La Solution 10 de CHANEL</Link>
          <Link to="/">La Crème Main</Link>
          <Link to="/">CC Cream</Link>
          <Link to="/">Boy de CHANEL </Link>
          <Link to="/"> All Lines</Link>
        </div>
      </div>
    </div>
  );
};

export default SkinCareCard;
