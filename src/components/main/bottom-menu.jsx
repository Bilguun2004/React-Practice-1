
import "../../style/main.css"
import { Link } from "react-router-dom";
const bottommenu = ({shopimg,exploreimg,cartimg,favourtieimg,accountimg}) =>{
            return(
                <div className="bottommenu">
            <Link to="/">
            <div  className="bottommenuitem">
                <img src={shopimg} height="20px"/>
                <span className="bottommenuitemtext">Shop</span>
            </div>
            </Link>
            <Link to="/Explore">
            <div className="bottommenuitem">
                <img src={exploreimg} height="20px"/>
                <span className="bottommenuitemtext">Explore</span>
            </div>
            </Link>
            <Link to="/cart">
            <div className="bottommenuitem">
                <img src={cartimg} height="20px"/>
                <span className="bottommenuitemtext">Cart</span>
            </div>
            </Link>
            <Link to="/favorite">
            <div className="bottommenuitem">
                <img src={favourtieimg} height="20px"/>
                <span className="bottommenuitemtext">Favourite</span>
            </div>
            </Link>
            <div className="bottommenuitem">
                <img src={accountimg} height="20px"/>
                <span className="bottommenuitemtext">Account</span>
            </div>
        </div>
            )
}
export default bottommenu