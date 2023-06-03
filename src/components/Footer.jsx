import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../utils/MainContext";
const Footer = () => {
  const { setDarkTheme, darkTheme } = useContext(MainContext);

  // Dark Light mode
  const storeTheme = (e) => {
    localStorage.setItem("theme", JSON.stringify(e.target.checked));
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerInfo">
          <div className="footerLogo">
            <h2>Chanel</h2>
          </div>
          <div className="chanelFooterInfo">
            <div className="footerPage">
              <h2>Explore Chanel.com</h2>
              <Link to="/haute-couture">Haute Couture</Link>
              <Link to="/fashion">Fashion</Link>
              <Link to="/high-jewelery">High Jewelery</Link>
              <Link to="/high-jewelery">Fine Jewelery</Link>
              <Link to="/">Watches</Link>
              <Link to="/">Eyewear</Link>
              <Link to="/shop">Fragrance</Link>
              <Link to="/">Makeup</Link>
              <Link to="/">Skincare</Link>
            </div>
            <div className="footerOnlineServices">
              <h2>online services</h2>
              <Link to="/">Payment Methods</Link>
              <Link to="/">Shipping Options</Link>
              <Link to="/form">My Account</Link>
              <Link to="/">Returns</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Care & Services</Link>
            </div>
            <div className="footerBoutiqueServices">
              <h2>boutique services</h2>
              <Link to="/">Store Locator </Link>
              <Link to="/">Book an Appointment</Link>
            </div>
            <div className="footerChanelHouseInfo">
              <h2>the house of chanel</h2>
              <Link to="/">Careers</Link>
              <Link to="/">Legal</Link>
              <Link to="/">Privacy </Link>
              <Link to="/">Do Not Sell or Share My Personal Information</Link>
              <Link to="/">Report to Society</Link>
              <Link to="/">Fighting Counterfeits</Link>
              <Link to="/">Accessibility</Link>
              <Link to="/">California Transparency in Supply Chains</Link>
              <Link to="/"> CHANEL Racial Justice Efforts</Link>
              <Link to="/"> CHANEL COVID-19 Relief Efforts</Link>
              <Link to="/"> CHANEL Supports Black Ambition</Link>
              <Link to="/"> Transparency in Coverage</Link>
            </div>
          </div>
        </div>
        <div className="toggle-switcher">
          <input
            type="checkbox"
            id="toggle-switch"
            className="toggle-input"
            onChange={(e) => {
              setDarkTheme(e.target.checked);
              storeTheme(e);
            }}
            checked={darkTheme}
          />
          <label htmlFor="toggle-switch" className="toggle-label"></label>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
