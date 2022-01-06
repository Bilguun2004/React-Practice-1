import React, { createContext, useState } from "react";
const Fruits = [
    {
        "name" : "Banana",
        "desc" : "1kg, Price",
        "price" : "4.99",
        "img" : "https://static.wixstatic.com/media/2cd43b_fb245523ec46402c86676b6dba7df4c4~mv2.png/v1/fill/w_320,h_206,q_90/2cd43b_fb245523ec46402c86676b6dba7df4c4~mv2.png"
    },
    {
        "name" : "Apple",
        "desc" : "1kg, Price",
        "price" : "3.66",
        "img" : "https://www.pngall.com/wp-content/uploads/2016/04/Apple-Fruit-Transparent.png"
        
    },
    {
        "name" : "Orange",
        "desc" : "1kg, Price",
        "price" : "3.00",
        "img" : "https://www.pngall.com/wp-content/uploads/2016/05/Orange.png"
    },
    {
        "name" : "Water Melon",
        "desc" : "1kg, Price",
        "price" : "4.5",
        "img": "https://www.pngall.com/wp-content/uploads/2016/04/Watermelon-Free-Download-PNG.png"
        
    },
    {
        "name" : "Avocado",
        "desc" : "1kg, Price",
        "price" : "1.8",
        "img": "https://www.pngall.com/wp-content/uploads/2016/05/Avocado-Download-PNG.png"
    },
    {
        "name" : "Pineapple",
        "desc" : "1kg, Price",
        "price" : "2",
        "img": "https://www.pngall.com/wp-content/uploads/2016/05/Pineapple-PNG-File.png"
    },
    {
        "name" : "Blueberry",
        "desc" : "1kg, Price",
        "price" : "4.99",
        "img": "https://www.pngall.com/wp-content/uploads/2/Blueberry-PNG-Picture.png"
    },
    {
        "name" : "Kiwi",
        "desc" : "1kg, Price",
        "price" : "0.99",
        "img": "https://cdn.picpng.com/kiwi/photo-kiwi-25601.png"
    },
    {
        "name" : "Peach",
        "desc" : "1kg, Price",
        "price" : "4.99",
        "img": "https://www.pngall.com/wp-content/uploads/2016/05/Peach-PNG-Pic.png"
    },

    {
        "name" : "PassionFriut",
        "desc" : "1kg, Price",
        "price" : "8.99",
        "img": "http://assets.stickpng.com/images/5a60afe4eace967f8e026a18.png"
    },{
        "name" : "Coconut",
        "desc" : "1kg, Price",
        "price" : "69",
        "img": "https://www.pngall.com/wp-content/uploads/2016/04/Coconut-Free-Download-PNG.png"
    },

]


export const ShopContext = createContext({
    categories: [],
    products: [],
    cartItems: [],
    favoriteItems: [],
    activeProduct:  {},
    totalCost: 0,
    addCartItem: () => {},
    addFavItem: () => {},
    removeCartItem: () => {},
    removeFavItem: () => {},
    setActiveProduct: () => {},
    setTotalCost: () => {},
    setCartItems: () => {},
})


export const ShopProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [activeProduct, setActiveProduct] = useState({})
    const [totalCost, setTotalCost] = useState(0)

    const addCartItem = (item) => {
        setCartItems([...cartItems, {...item}])
        console.log("Cart" +  {cartItems})
    }

    const removeCartItem = (item, index) => {

    }

    const removeFavItem = (itemm, index) => {

    }

    const addFavItem = (item) =>{
        console.log(item)
        setFavoriteItems([...favoriteItems ,{...item}])
        console.log(favoriteItems)
    }


    return (
        <ShopContext.Provider value = {{
            products: [...Fruits],
            cartItems: cartItems,
            favoriteItems,
            activeProduct,
            totalCost,
            addCartItem,
            addFavItem,
            removeCartItem,
            removeFavItem,
            setCartItems,
            setActiveProduct,
            setTotalCost,
            setFavoriteItems,
        }}>
            {children}
        </ShopContext.Provider>
    )
}