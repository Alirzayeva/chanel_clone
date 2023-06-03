import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
//PAGES
import Home from "./pages/Home";
import HauteCouture from "./pages/HauteCouture";
import Fashion from "./pages/Fashion";
import HighJewelery from "./pages/HighJewelery";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
//SCSS
import "./assets/scss/index.scss";
import { MyContext } from "./utils/MainContext";

const App = () => {
  const pageUrl = useLocation();

  return (
    <ParallaxProvider>
      <MyContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haute-couture" element={<HauteCouture />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/high-jewelery" element={<HighJewelery />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {pageUrl.pathname === "/shopping-bag-card" ||
        pageUrl.pathname === "/shop" ? null : (
          <Footer />
        )}
      </MyContext>
    </ParallaxProvider>
  );
};

export default App;
