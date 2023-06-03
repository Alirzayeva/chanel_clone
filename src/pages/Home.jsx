import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <Parallax speed={-20}>
        <Link to="/shop">
          <section className="fragranceSection">
            <div className="text">
              <p>Fragrance</p>
              <span>WONDER MOTHER’S DAY</span>
              <button>See More</button>
            </div>
          </section>
        </Link>
      </Parallax>

      <Parallax speed={-5}>
        <Link to="/">
          <section className="makeUpSection">
            <div className="text">
              <p>Makeup</p>
              <span>DÉLICES PASTEL DE CHANEL</span>
              <button>See More</button>
            </div>
          </section>
        </Link>
      </Parallax>
      <Parallax speed={-1}>
        <Link to="/fashion">
          <section className="fashionSection">
            <div className="text">
              <p>Fashion</p>
              <span>Chanel 22 Bag</span>
              <button>See More</button>
            </div>
          </section>
        </Link>
      </Parallax>
      <Parallax speed={-1.2}>
        <Link to="/">
          <section className="watchesSection">
            <div className="text">
              <p>Watches</p>
              <span>COCO CRUSH</span>
              <button> Shop now</button>
            </div>
          </section>
        </Link>
      </Parallax>
      <Parallax speed={-12}>
        <Link to="/">
          <section className="skinCareSection">
            <div className="text">
              <p>Skincare</p>
              <span>SUBLIMAGE L’EXTRAIT DE NUIT</span>
              <button>Shop now</button>
            </div>
          </section>
        </Link>
      </Parallax>
      <Parallax speed={-2}>
        <Link to="/">
          <section className="eyeWearSection">
            <div className="text">
              <p> EyeWear</p>
              <span>A Parisian Walk</span>
              <button>See More</button>
            </div>
          </section>
        </Link>
      </Parallax>
      <Parallax speed={-10}>
        <Link to="/high-jewelery">
          <section className="fineJewelerySection">
            <div className="text">
              <p> Fine Jewelry</p>
              <span>Collection 1932</span>
              <button>See More</button>
            </div>
          </section>
        </Link>
      </Parallax>
      <Parallax speed={-12}>
        <Link to="/haute-couture">
          <section className="hauteCoutureSection">
            <div className="text">
              <p>Haute Couture</p>
              <span> Spring-Summer 2023 show</span>
              <button>See More</button>
            </div>
          </section>
        </Link>
      </Parallax>
      <Parallax speed={-2}>
        <Link to="/high-jewelery">
          <section className="highJewelerySection">
            <div className="text">
              <p>High Jewelry</p>
              <span>Collection 1932</span>
              <button>See More</button>
            </div>
          </section>
        </Link>
      </Parallax>
      <Parallax speed={15}>
        <section className="endSection">
          <div className="containerFooter">
            <div className="contactInfo">
              <h3> CONTACT AN ADVISOR</h3>
              <p>
                CHANEL Customer Care is available 24/7 to answer all your
                questions.
              </p>
              <span>
                Please<a href="mailto:email us">email us,</a>call
                <a href="tel:+1.800.550.0005"> 1.800.550.0005</a>or
                <a href="chat"> live chat</a>with a CHANEL Advisor.
              </span>
              <br />
              <br />
              <a className="linkHvr" href="mailto:Email">
                Email
              </a>
              <a className="linkHvr" href="tel:+1.800.550.0005">
                Call
              </a>
            </div>
            <div className="newsLetterInfo">
              <h3>NEWSLETTER</h3>
              <p>Subscribe to receive news from CHANEL</p>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="storeInfo">
              <h3>Find a store</h3>
              <span>Enter a location to find the closest CHANEL stores</span>
              <label>
                <input
                  type="text"
                  name="text"
                  placeholder="Search by town or zipcode"
                />
              </label>
            </div>
          </div>
        </section>
      </Parallax>
    </main>
  );
};

export default Home;
