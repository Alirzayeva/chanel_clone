import React from "react";
import watchesCard from "../assets/images/background/otherBg/watchesCard_bg.webp";
import { Link } from "react-router-dom";

const WatchesCard = () => {
  return (
    <div className="watchesCardInfo">
      <div className="container">
        <div className="img">
          <img src={watchesCard} alt="WatchesCard" />
          <span>
            <Link to="/watches"> fine jewelery Home</Link>
          </span>
        </div>
        <div className="column">
          <h3>featured</h3>
          <Link to="/watches">The J12 watches</Link>
          <Link to="/watches">CHANEL Interstellar Capsule Collection</Link>
          <Link to="/watches">Première Édition Originale</Link>
          <Link to="/watches"> 18 Place Vendôme</Link>
          <Link to="/watches">New Watches</Link>
        </div>
        <div className="column">
          <h3> collections</h3>
          <Link to="/watches">J12</Link>
          <Link to="/watches">Première</Link>
          <Link to="/watches">BOY·FRIEND</Link>
          <Link to="/watches"> Code Coco</Link>
          <Link to="/watches">Monsieur de CHANEL</Link>
          <Link to="/watches">All Watches </Link>
        </div>

        <div className="column">
          <h3>fine watchmaking</h3>
          <Link to="/watches">CHANEL Haute Horlogerie</Link>
          <Link to="/watches"> Manufacture Movement Watches</Link>
          <Link to="/watches">Artistic Craft Watches </Link>
          <Link to="/watches"> Watches Set with Precious Stones</Link>
        </div>
        <div className="column">
          <h3>care & services</h3>
          <h3>
            <Link to="/watches"> Chanel & moi</Link>
          </h3>
          <p>A programme of services to preserve each CHANEL creation</p>
          <Link to="/watches"> Find a Boutique </Link>
          <Link to="/watches"> Book an appointment</Link>
          <Link to="/watches">Care and Maintenance</Link>
          <Link to="/watches"> Our Services </Link>
          <Link to="/watches"> Where To Repair My Jewelry?</Link>
        </div>
      </div>
    </div>
  );
};

export default WatchesCard;
