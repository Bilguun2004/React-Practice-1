import React , { useState,createContext, useContext } from "react"
import "../../style/shop.css"
import Banner from "./banner"
import Products from "./products"
import pulses from "../../assets/pulses.svg"
import rice from "../../assets/rice.svg"
import Bottommenu from "../main/bottom-menu"
import shop from "../../assets/shop.svg";
import explore from "../../assets/explore.svg";
import cart from "../../assets/cart.svg";
import favourite from "../../assets/favourite.svg"
import account from "../../assets/account.svg"
import { ShopContext } from "../../provider/shop-context"



const Shop = () =>{
    const context = useContext(ShopContext)
    const { products, setActiveProduct } = useContext(ShopContext)
    console.log(context)
    return(
        <>
        <Banner/>
            <div className="shopsection">
                {products.map((e, i)=>{
                    return(
                        <Products name={e.name} description={e.desc} price={e.price} imgg={e.img} onClick={() => setActiveProduct(e)} key={i}/>
                    )
                })} 
            </div>
            <div className="text2">Best Selling</div>
            <div className="shopsection">
                {products.map(e=>{
                    return(
                        <Products name={e.name} description={e.desc} price={e.price} imgg={e.img} onClick={() => setActiveProduct(e)}/>
                    )
                })}
            </div>
            <div className="text2">Groceries</div>
            <div className="groceries">
                <div className="gr">
                    <img src={pulses} height="50px" width="50px"/>
                    <span>Pulses</span>
                </div>
                <div className="gr2">
                    <img src={rice} height="50px" width="50px"/>
                    <span>Rice</span>
                </div>

            </div>
            <Bottommenu shopimg={shop} exploreimg={explore} cartimg={cart} favourtieimg={favourite} accountimg={account}/>
        </>
        
    )
}
export default Shop