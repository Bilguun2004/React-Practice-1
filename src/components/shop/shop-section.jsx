import "../../style/shop.css"
import Banner from "./banner"
import modal from "./modal"
import bana from "../../assets/bana.svg"
import Products from "./products"

const Fruits = [
    {
        "name" : "Banana",
        "desc" : "1kg, Price",
        "price" : "4.99",
        "img" : 0,
        "quantity" : 1
    },
    {
        "name" : "Apple",
        "desc" : "1kg, Price",
        "price" : "3.66",
        "img" : 0,
        "quantity" : 1
    },
    {
        "name" : "Orange",
        "desc" : "1kg, Price",
        "price" : "3.00",
        "img" : 0,
        "quantity" : 1
    },
    {
        "name" : "Water Melon",
        "desc" : "1kg, Price",
        "price" : "4.5",
        "img" : 0,
        "quantity" : 1
    },
    {
        "name" : "Avocado",
        "desc" : "1kg, Price",
        "price" : "1.8",
        "img" : 0,
        "quantity" : 1
    },
    {
        "name" : "Pineapple",
        "desc" : "1kg, Price",
        "price" : "2",
        "img" : 0,
        "quantity" : 1
    },
    {
        "name" : "Blueberry",
        "desc" : "1kg, Price",
        "price" : "4.99",
        "img" : 0,
        "quantity" : 1
    },
    {
        "name" : "Kiwi",
        "desc" : "1kg, Price",
        "price" : "0.99",
        "img" : 0,
        "quantity" : 1
    },
    {
        "name" : "Peach",
        "desc" : "1kg, Price",
        "price" : "4.99",
        "img" : 0,
        "quantity" : 1
    },

    {
        "name" : "PassionFriut",
        "desc" : "1kg, Price",
        "price" : "8.99",
        "img" : 0,
        "quantity" : 1
    },{
        "name" : "Coconut",
        "desc" : "1kg, Price",
        "price" : "69",
        "img" : 0,
        "quantity" : 1
    },

]


const shopsection = () =>{
    return(
        <div className="shopsection">
            {Fruits.map(e=>{
                <Products name={e.name} description={e.desc} price={e.price}/> 
            })}
        </div>
    )
}
export default shopsection