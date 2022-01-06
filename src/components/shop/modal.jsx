import React,{ useState,useContext } from "react"
import { Link } from "react-router-dom";
import "../../style/shop.css"
import Vector from "../../assets/Vector.svg"
import Vector1 from "../../assets/Vector (1).svg"
import Vector2 from "../../assets/Vector (2).svg"
import minuss from "../../assets/minus.svg"
import plus from "../../assets/add.svg"
import red from "../../assets/red.png"
import { ShopContext, ShopProvider } from "../../provider/shop-context"


const Modal = () =>{
    // const { cartItems, setCartItems} = context

    const {activeProduct, addCartItem, cartItems, addFavItem} = useContext(ShopContext)
    // console.log(cartItems)

    const[count,setcount]=useState(1)

    const add = () =>{
        setcount(count+1)
    }
    const minus = () =>{
        if(count>1){
            setcount(count-1)
        }
    }
    const[like,setlike]=useState(false)

    const likee = () =>{
        setlike(!like)
    }


    return(
      
                    <div className="modal">
            <div className="modal-top">
                <div className="modal-top-top">
                    <Link to="/">
                    <img src={Vector} height="20px" width="20px" onClick={onclick} />
                    </Link>
                    <img src={Vector1} height="20px" width="20px"/>
                </div>
                <div className="img">
                    <img src={activeProduct.img} height="190px" width="190px"/>
                </div>
                
            </div>
            <div className="modalthing">
                <div className="modaltopth">
                    <div className="modaltext">{activeProduct.name}</div>
                    {like ? <img src={red} height="23px" width="23px" onClick={likee} />:<img src={Vector2} height="23px" width="23px" onClick={() => addFavItem(activeProduct) && likee} />}
                </div>
                <div className="modaltopthh">
                    <div className="modalsmalltext">{activeProduct.desc}</div>
                    <div className="invis">asdasdasd</div>
                </div>
            </div>
            <div className="pricecontainer">
               <div className="modalprice">
                <img src={minuss} height="20px" width="20px" onClick={minus}/>
                <div className="counter">{count}</div>
                <img src={plus} height="20px" width="20px" onClick={add}/>
                </div>
                <div className="price">
                    ${activeProduct.price}
                </div>
            </div>
            <div className="product-detail">
                <div className="modaldetail">
                    <div className="detailtop">Product Detail</div>
                    <div className="detailbottom">{activeProduct.desc}</div>
                </div>
            </div>
            <div className="status">
                <div>Available</div>
                <div className="yes">yes</div>
            </div>
            <div className="modalbottom">
                <div>Review</div>
                <Link to="/cart">
                <div className="basket" onClick={() => addCartItem(activeProduct)}> Add To Basket</div>
                </Link>
            </div>
        </div>
    )
}
export default Modal