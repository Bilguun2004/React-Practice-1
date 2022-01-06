import "../../style/main.css";
import red from "../../assets/red.png";
const Favitem = ({ img, name, desc, price }) => {
  return (
    <div className="favitem">
      <img src={img} height="70px" width="70px" />
      <div className="favitemitemcont">
        <div className="favitemitem">
          <span className="favbigtext">{name}</span>
          <span className="favsmalltext">{desc}</span>
        </div>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default Favitem;
