import "../../style/explore.css"
import Categoryitem from "./category-item"
import Bottommenu from "../main/bottom-menu"
import blackshop from "../../assets/blackshop.svg";
import explore from "../../assets/greenexplore.svg";
import cart from "../../assets/cart.svg";
import favourite from "../../assets/favourite.svg"
import account from "../../assets/account.svg"
import explorebreadimg from "../../assets/explorebreadimg.svg"
import exploredrinkimg from "../../assets/exploredrinkimg.svg"
import explorefruitimg from "../../assets/explorefruitimg.svg"
import exploremeatimg from "../../assets/exploremeatimg.svg"
import exploreoilimg from "../../assets/exploreoilimg.svg"
import exploremilkimg from "../../assets/exploremilkimg.svg"
const catergories = () =>{
    return(
        <>
        <div className="categorytop">
            <span className="toptext">Find Products</span>
            <input className="search"></input>
        </div>
        <div className="category">
            <Categoryitem backgroundcolor={"greencategory"} img={explorefruitimg} text={"Fruit & Vegetable"} />
            <Categoryitem backgroundcolor={"orangecategory"} img={exploreoilimg} text={"Cooking Oil & Gheefdfgdfgdfgdfg"}/>
            <Categoryitem backgroundcolor={"redcategory"} img={exploremeatimg} text={"Meat & Fish"} />
            <Categoryitem backgroundcolor={"purplecategory"} img={explorebreadimg} text={"Bakery & Snacks"}/>
            <Categoryitem backgroundcolor={"bluecategory"} img={exploremilkimg}  text={"Dairy & Eggs"} />
            <Categoryitem backgroundcolor={"cyancategory"}  img={exploredrinkimg} text={"Beverages"}/>
        </div>
        <Bottommenu shopimg={blackshop} exploreimg={explore} cartimg={cart} favourtieimg={favourite} accountimg={account}/>
        </>
        
        
    )
}

export default catergories