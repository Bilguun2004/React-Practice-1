import { useContext } from "react";
import "../../style/main.css";
import Favitem from "./favitem";
import Bottommenu from "../main/bottom-menu";
import shop from "../../assets/blackshop.svg";
import explore from "../../assets/explore.svg";
import cart from "../../assets/cart.svg";
import favourite from "../../assets/greenfavourite.svg";
import account from "../../assets/account.svg";
import { ShopContext } from "../../provider/shop-context";

const Favorite = () => {
  const context = useContext(ShopContext);

  const { favoriteItems } = context;
  console.log(favoriteItems )

  return (
    <>
      <div className="favtop">Favorite</div>
      {favoriteItems.map((e) => {
        return <Favitem img={e.img} name={e.name} desc={e.desc} price={e.price} />;
      })}
      <Bottommenu
        shopimg={shop}
        exploreimg={explore}
        cartimg={cart}
        favourtieimg={favourite}
        accountimg={account}
      />
    </>
  );
};
export default Favorite;
