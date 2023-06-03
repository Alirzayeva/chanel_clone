import React from "react";
import makeUpCard from "../assets/images/background/otherBg/makeUpCardBg.webp";
import { Link } from "react-router-dom";

const MakeUpCard = () => {
  return (
    <div className="makeupCardInfo">
      <h5>SHOP MAKEUP ONLINE</h5>
      <div className="container">
        <div className="img">
          <img src={makeUpCard} alt="makeUpCard" />
          <span>
            <Link to="/make-up">MakeUp Home</Link>
          </span>
        </div>
        <div className="column">
          <h3>in the spotlight</h3>
          <Link to="/make-up">New Arrivals</Link>
          <Link to="/make-up">Exclusives</Link>
          <Link to="/make-up">Red Carpet Beauty</Link>

          <h3> collections</h3>
          <Link to="/make-up">Le Vernis</Link>
          <Link to="/make-up">Brightening Collection </Link>
          <Link to="/make-up"> Spring Summer 2023</Link>
          <Link to="/make-up">Rouge Allure Velvet</Link>
          <Link to="/make-up">Foundation Match-Up</Link>
          <Link to="/make-up"> CHANEL Beauty</Link>
          <Link to="/make-up"> </Link>

          <h3>services</h3>
          <Link to="/make-up">Les Rendez-Vous CHANEL</Link>
          <Link to="/make-up">Fragrance and Beauty Boutiques </Link>
          <Link to="/make-up"> The Art of Detail</Link>
        </div>
        <div className="column">
          <h3>face</h3>
          <Link to="/make-up">Foundation</Link>
          <Link to="/make-up">Bronzer </Link>
          <Link to="/make-up">Highlighter </Link>
          <Link to="/make-up">Blush </Link>
          <Link to="/make-up"> Powder</Link>
          <Link to="/make-up">Primer</Link>
          <Link to="/make-up">Concealer</Link>
          <Link to="/make-up">All Face</Link>
        </div>
        <div className="column">
          <h3>eyes</h3>
          <Link to="/make-up">Mascara</Link>
          <Link to="/make-up">Eyeshadow </Link>
          <Link to="/make-up">Eyeliner</Link>
          <Link to="/make-up">Brow </Link>
          <Link to="/make-up"> All Eyes </Link>
          <h3>lips</h3>
          <Link to="/make-up">Lipstick</Link>
          <Link to="/make-up">Liquid lipsticks </Link>
          <Link to="/make-up">Lipgloss</Link>
          <Link to="/make-up">Lip Liner </Link>
          <Link to="/make-up">Lip Care </Link>
          <Link to="/make-up">All Lips</Link>
        </div>
        <div className="column">
          <h3>nails </h3>
          <Link to="/make-up"> Nail Colour</Link>
          <Link to="/make-up"> Base & Finish </Link>
          <Link to="/make-up">All Nails</Link>
          <h3>brushes and tools </h3>
          <Link to="/make-up"> Face </Link>
          <Link to="/make-up"> Eyes </Link>
          <Link to="/make-up">Lips</Link>
          <Link to="/make-up"> Accessories </Link>
          <Link to="/make-up"> All Brushes & Tools </Link>
        </div>
      </div>
    </div>
  );
};

export default MakeUpCard;
