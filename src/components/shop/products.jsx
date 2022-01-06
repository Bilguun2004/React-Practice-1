import "../../style/shop.css";
import plusicon from "../../assets/plusicon.svg";
import { Link } from "react-router-dom";
const Shop = ({ imgg, name, description, price, ...props }) => {
  return (
    <div className="product" {...props}>
      <div className="img-cont">
        <img className="imggg" height="50px" width="60px" src={imgg} />
      </div>
      <Link to="/detail">
      <div className="desc">
        <span>{name}</span>
        <span className="descrip">{description}</span>
      </div>
      </Link>
      <div className="roww">
        <span>${price}</span>
        <div className="addproduct">
          <img src={plusicon} height="13px" width="13px" />
        </div>
      </div>
    </div>
  );
};
export default Shop;
