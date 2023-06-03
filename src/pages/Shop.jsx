import React, { useContext } from "react";
import { MainContext } from "../utils/MainContext";
import Card from "../components/Card";
const Shop = () => {
  const { products } = useContext(MainContext);
  return (
    <section className="shop">
      <h5>Fragrance</h5>
      <h2>Woman & Man</h2>
      <p className="fragranceText">
        Lifelong companions for bold, luminous personalities in perpetual
        movement, each CHANEL fragrance for women is inspired by the world of
        Mademoiselle and composes its own imaginative and feminine olfactory
        experience. For a complete beauty ritual, prolong the fragrance trail
        with other expressions of the scent.
      </p>
      <div className="container">
        <div className="cardBox">
          {products.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
