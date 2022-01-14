import React from "react";
import "./home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
 import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel>
        
          
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/61h0UWkO5wL._SX3000_.jpg"
              alt=""
            />

            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/61SvFyTlSEL._SX3000_.jpg"
              alt=""
            />

            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/61-tF3qostL._SX3000_.jpg"
              alt=""
            />
          
        </Carousel>

        <div className="home__row">
          <Product
            id="12321341"
            title="Amazon Basics High-Back Bonded Leather Executive Office Computer Desk Chair - Cream"
            price={130.4}
            rating={5}
            image="https://m.media-amazon.com/images/I/31CcQKVbcDL._AC_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="2412353"
            title="National Tree Company Pre-Lit Artificial Christmas Wreath, Green, Crestwood Spruce, White Lights, Decorated with Pine Cones, Berry Clusters, Frosted Branches, Christmas Collection, 24 Inches"
            price={44.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91RUCrHS3VL._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Womens 3/4 Sleeve V Neck Sequin Sparkle Glitzy Glam Flapper Party Dress Cocktail Glitter Bodycon Wedding Evening Clubwear"
            price={49.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71-agmwe7HL._AC_UX679_.jpg"
          />

          <Product
            id="24122112"
            title="Tkria Matching Family Pajamas Christmas Deer Sleepwear Cotton Holiday Pjs Set"
            price={26.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61THeTLf19L._AC_UX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Weber 45010001 Spirit II E-310 3-Burner Liquid Propane Grill, Black"
            price={567.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71PNvxSLGCL._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Traditional Ethiopian cross Shirts
             Ethiopia T-Shirt Gift For Ethiopian People"
            price={20.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C81BSi4LV4tL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

{
  /* <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
          
 */
}
//  ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
