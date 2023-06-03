import React from "react";
import fragranceCard from "../assets/images/background/otherBg/fragranceCard_bg.webp";
import { Link } from "react-router-dom";
const FragranceCard = () => {
  return (
    <div className="fragranceCardInfo">
      <h5>SHOP FRAGRANCE ONLINE</h5>
      <div className="container">
        <div className="img">
          <img src={fragranceCard} alt="fragranceCard" />
          <span>
            <Link to="/fragrance"> coco mademoiselle </Link>
          </span>
          <br />
          <br />
          <span>
            <Link to="/fragrance"> fragrance home </Link>
          </span>
        </div>
        <div className="column">
          <h3>in the spotlight</h3>
          <Link to="/fragrance">New Arrivals</Link>
          <Link to="/fragrance">Exclusives</Link>
          <Link to="/fragrance">Gift Sets</Link>
          <Link to="/fragrance">Mother's Day Gift Guide</Link>

          <h3> collections</h3>
          <Link to="/fragrance">Les Exclusifs de Chanel</Link>
          <Link to="/fragrance">CHANCE Fragrance</Link>
          <Link to="/fragrance"> Allure Homme Sport</Link>
          <Link to="/fragrance">Les Eaux de Chanel</Link>
          <h3>services</h3>
          <Link to="/fragrance">Les Rendez-Vous CHANEL</Link>
          <Link to="/fragrance">Fragrance and Beauty Boutiques </Link>
          <Link to="/fragrance"> The Art of Detail</Link>
        </div>
        <div className="column">
          <h3>women</h3>
          <Link to="/fragrance">N°5</Link>
          <Link to="/fragrance">Coco Mademoiselle</Link>
          <Link to="/fragrance">Gabrielle Chanel</Link>
          <Link to="/fragrance">Chance</Link>
          <Link to="/fragrance">Chance Eau Tendre</Link>
          <Link to="/fragrance">Chance Eau Fraîche</Link>
          <Link to="/fragrance">Chance Eau Vive</Link>
          <Link to="/fragrance">Les Grands Extraits</Link>
          <Link to="/fragrance">Coco</Link>
          <Link to="/fragrance">Coco Noir</Link>
          <Link to="/fragrance">Allure Sensuelle</Link>
          <Link to="/fragrance">Allure</Link>
          <Link to="/fragrance">N°19</Link>
          <Link to="/fragrance">Cristalle</Link>
          <Link to="/fragrance">All Women</Link>
        </div>
        <div className="column">
          <h3>men</h3>
          <Link to="/fragrance">Bleu de CHANEL</Link>
          <Link to="/fragrance">Platinum Egoïste</Link>
          <Link to="/fragrance">Egoïste</Link>
          <Link to="/fragrance">Allure Homme Sport</Link>
          <Link to="/fragrance">Allure Homme Sport Eau Extrême</Link>
          <Link to="/fragrance">Allure Homme</Link>
          <Link to="/fragrance">Allure Homme Edition Blanche</Link>
          <Link to="/fragrance">Pour Monsieur</Link>
          <Link to="/fragrance">Antaeus</Link>
          <Link to="/fragrance">All Men</Link>
        </div>
        <div className="column">
          <h3>bath and body</h3>
          <Link to="/fragrance"> Women</Link>
          <Link to="/fragrance"> Men </Link>
          <Link to="/fragrance">View all</Link>
        </div>
      </div>
    </div>
  );
};

export default FragranceCard;
