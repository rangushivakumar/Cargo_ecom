import React from "react";
import Productitems from "./productitems";
import { useContext } from "react";
import ItemContext from "../ItemContext";
import '../header.css'

function Shop() {
  const { setId,addToCart,cartItems} = useContext(ItemContext);
  

  return (
    <>
      <h1 style={{textAlign:'center', padding:'40px 0 0 0', color:'#088178'}}>Our Collection</h1>
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

export default Shop;
