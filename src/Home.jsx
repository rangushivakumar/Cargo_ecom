import React from "react";
import './header.css'
import f1 from "./Images/f1.png";
import f2 from "./Images/f2.png";
import f3 from "./Images/f3.png";
import f4 from "./Images/f4.png";
import f5 from "./Images/f5.png";
import f6 from "./Images/f6.png";
import model1 from "./Images/model1.png";

import Productitems from "./components/productitems";
import { useContext } from "react";
import ItemContext from "./ItemContext";

function Home() {
  const { setId, addToCart, cartItems } = useContext(ItemContext);
  return (
    <>
      <section id="hero">
        <div className="heroheadings">
          <h4>don't miss the offer</h4>
          <h2>super value deals on</h2>
          <h1>all products</h1>
          <p>save mote with coupons & up to 70% off !</p>
          <button>shop now</button>
        </div>
        <div className="heroimage">
          <img src={model1} alt="fashion icon" />
        </div>
      </section>


      <section id="services">
        <div
          className="serviceslogo"
          onclick="window.location.href='sproducts.html';"
        >
          <img src={f1} alt="freeshipping" />
          <h6>Free Shipping</h6>
        </div>
        <div className="serviceslogo">
          <img src={f2} alt="onlineorders" />
          <h6>Online orders</h6>
        </div>
        <div className="serviceslogo">
          <img src={f3} alt="savemoney" />
          <h6>save money</h6>
        </div>
        <div className="serviceslogo">
          <img src={f4} alt="promotions" />
          <h6>promotions</h6>
        </div>
        <div className="serviceslogo">
          <img src={f5} alt="happysell" />
          <h6>happy sell</h6>
        </div>
        <div className="serviceslogo">
          <img src={f6} alt="customersupport" />
          <h6>24/7 customer support</h6>
        </div>
      </section>

      <div id="products">
        <h1 className="featuredproductsheading">featured products</h1>
        <p>summer collection new modern design</p>
      </div>
      <div className="productsection">
          {Productitems.map((item) => {
            const { id, name, img, price } = item;
            const cartItemAmount = cartItems[id];
            return (
              <>
                <div className="productcontainar">
                  <div onClick={() => setId([price, name, img])}>
                    <img src={img} alt="" />
                  </div>
                  <div className="description">
                    <span>adidas</span>
                    <h5>{name}</h5>
                    <h5>RS : {price}</h5>
                  </div>
                  <button onClick={() => addToCart(id)}>
                    add to cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Home;
