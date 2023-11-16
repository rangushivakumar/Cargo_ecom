import React, { useState } from 'react'
import ItemContext from './ItemContext'
import Productitems from './components/productitems';


const getDefault=()=>{
  let cart={};
  for(let i=1;i<Productitems.length+1;i++){
    cart[i]=0
  }
  return cart;
};



function ItemContextProvider({children}) {
    const [id,setId]=useState([])
    const [cartItems,setCartItems]=useState(getDefault());
    const addToCart=(id)=>{
      setCartItems((prev)=>({...prev,[id]:prev[id]+1}))
    }
    const removeFromCart=(id)=>{
      setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
    }
    
    const getTotalCartAmount=()=>{
      let totalAmount=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo=Productitems.find((product)=>product.id===Number(item));
          totalAmount+=cartItems[item]*itemInfo.price
        }
      }
      return totalAmount
    }


  return (
    <ItemContext.Provider value={{id,setId,addToCart,setCartItems,cartItems,removeFromCart,getTotalCartAmount}}>
        {children}
    </ItemContext.Provider>
  )
}

export default ItemContextProvider
