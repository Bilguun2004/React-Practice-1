import "../../style/cart.css"
import { UseState } from "react"
import close from "../../assets/close.svg"


const cartitem =({img,price,detail,name})=>{
      
//     const[count, setcount]=UseState(1)

//     const add = () =>{
//         setcount(count+1)
//     }
//     const minus = () =>{
//         if(count>1){
//             setcount(count-1)
//         }
//     }
    


    return(
        <>
        <div className="cartitem">
            <div className="cartitemitems">
                <img src={img} height="80px" width="80px"/>
                <div className="topitem">
                    <span className="topitemtop">
                        {name}
                    </span>
                    <span className="topitemsmall">
                        {detail}
                    </span>
                    <div className="countercontainer">
                        <div className="decrease" >
                        </div>
                        <div className="count">1</div>
                        <div className="increase"></div>
                    </div>
                </div>
                <div className="cartitemback">
                    <img className="close" src={close} height="30px" width="30px"/>
                    <span className="cartprice">${price}</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default cartitem