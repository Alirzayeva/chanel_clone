import React from "react";
import { Link } from "react-router-dom";

const AboutChanelCard = () => {
  return (
    <div className="aboutChanelCardInfo">
      <div className="container">
        <div className="column">
          <h3>chanel culture fund</h3>
          <Link to="/skin-care">Discover the Fund</Link>
          <Link to="/skin-care">Discover the Prize</Link>
        </div>
        <div className="column">
          <h3>chanel connects</h3>
          <Link to="/skin-care">Discover the Podcast</Link>
        </div>
        <div className="column">
          <h3>inside chanel</h3>
          <Link to="/skin-care"> Gabrielle Chanel</Link>
          <Link to="/skin-care">100 years of creation</Link>
          <Link to="/skin-care">Chapters </Link>
        </div>
        <div className="column">
          <h3>fondation chanel</h3>

          <Link to="/skin-care">Discover the Fondation</Link>
        </div>
        <div className="column">
          <h3>sustainability</h3>
          <Link to="/skin-care">Climate </Link>
        </div>
        <div className="column">
          <h3>careers</h3>
          <Link to="/skin-care">Join CHANEL</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutChanelCard;
