
import React , { useState,createContext, useContext } from "react"
import "../../style/cart.css"
import Cartitem from "./cart-item"
import Bottommenu from "../main/bottom-menu";
import blackshop from "../../assets/blackshop.svg";
import explore from "../../assets/explore.svg";
import greencart from "../../assets/greencart.svg";
import favourite from "../../assets/favourite.svg"
import account from "../../assets/account.svg"
import { ShopContext } from "../../provider/shop-context";



const Carts = () =>{
    const context = useContext(ShopContext)
    const {cartItems} = context
    console.log("caaaaaaaaaaaaa"+ {cartItems})
    return(
        <>
            <div className="carttop">
                My Cart
            </div>
            <div className="cartitemcontainer">
                {cartItems.map(
                    (e=>{
                        <Cartitem name={e.name} price={e.price} img={e.img} />
                    })
                )}
            </div>
            <Bottommenu shopimg={blackshop} exploreimg={explore} cartimg={greencart} favourtieimg={favourite} accountimg={account}/>
        </>
        
    )
}
export default Carts