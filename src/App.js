import { useState, React } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Shop from "./components/shop/shop";
import Cart from "./components/cart/carts";
import Modal from "./components/shop/modal";
import Explore from "./components/explore/categories";
import Favorite from "./components/shop/favorite"
import { ShopProvider } from "./provider/shop-context";

function App() {
  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/detail" element={<Modal />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/favorite" element={<Favorite/>} />
        </Routes>
      </Router>
    </ShopProvider>
  );
}

export default App;
