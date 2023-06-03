import React, { useContext } from "react";
import { useState } from "react";

//Pages
import CardFashion from "./CardFashion";
import FineJeweleryCard from "./FineJeweleryCard";
import WatchesCard from "./WatchesCard";
import EyeWearCard from "./EyeWearCard";
import FragranceCard from "./FragranceCard";
import MakeUpCard from "./MakeUpCard";
import SkinCareCard from "./SkinCareCard";
import AboutChanelCard from "./AboutChanelCard";
//Images
import search from "../assets/images/icon/search.png";
import user from "../assets/images/icon/user.png";
import favori from "../assets/images/icon/favourite.png";
import bag from "../assets/images/icon/bag.png";
import { NavLink, Link } from "react-router-dom";
import { MainContext } from "../utils/MainContext";
import ShoppingBagCard from "./ShoppingBagCard";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cart, cartIsOpen, setCartIsOpen } = useContext(MainContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="topRow">
          <div className="mainLogo">
            <Link to="/">Chanel</Link>
          </div>
          <ul className="topRowList">
            <li className="topRowItem">
              <img src={search} alt="search" />
            </li>
            <li className="topRowItem">
              <Link to="/form">
                <img src={user} alt="user" />
              </Link>
            </li>
            <li className="topRowItem">
              <img src={favori} alt="favori" />
            </li>
            <li className="topRowItem">
              <span
                className={cart.length !== 0 ? "cartCount active" : "cartCount"}
              ></span>
              <div
                className="cartIcon"
                onClick={() => setCartIsOpen(!cartIsOpen)}
              >
                <img src={bag} alt="bag" />
              </div>
            </li>
          </ul>
          <div className={cartIsOpen ? "cartBox active" : "cartBox"}>
            <ShoppingBagCard />
            <span className="closeBox" onClick={() => setCartIsOpen(false)}>
              X
            </span>
          </div>
          <div
            className={cartIsOpen ? "cartOverlay active" : "cartOverlay"}
            onClick={() => setCartIsOpen(false)}
          ></div>
        </div>
      </div>
      <nav className="navBar">
        <ul className="navList">
          <li className="navItem">
            <NavLink to="/haute-couture">Haute Couture</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/fashion">Fashion</NavLink>
            <CardFashion />
          </li>
          <li className="navItem">
            <NavLink to="/high-jewelery">High Jewelery</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/high-jewelery">Fine Jewelery</NavLink>
            <FineJeweleryCard />
          </li>
          <li className="navItem">
            <NavLink to="/shop">Watches</NavLink>
            <WatchesCard />
          </li>
          <li className="navItem">
            <NavLink to="/">Eyewear</NavLink>
            <EyeWearCard />
          </li>
          <li className="navItem">
            <NavLink to="/shop">Fragrance</NavLink>
            <FragranceCard />
          </li>
          <li className="navItem">
            <NavLink to="/">MakeUp</NavLink>
            <MakeUpCard />
          </li>
          <li className="navItem">
            <NavLink to="/">SkinCare</NavLink>
            <SkinCareCard />
          </li>
          <li className="navItem">
            <NavLink to="/shop">About Chanel</NavLink>
            <AboutChanelCard />
          </li>
        </ul>
      </nav>
      <div className="burgerMenu">
        <div
          className={`burgerIcon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
        </div>

        {isOpen && (
          <nav className="burgerNavBar">
            <ul className="navList">
              <li className="navItem">
                <NavLink to="/haute-couture">Haute Couture</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/fashion">Fashion</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/high-jewelery">High Jewelery</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/high-jewelery">Fine Jewelery</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/shop">Watches</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/">Eyewear</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/shop">Fragrance</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/">MakeUp</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/">SkinCare</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/shop">About Chanel</NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
