import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../Context/ProductsContext"
import ProductListItem from "./ProductListItem";


const ProductsList = (props) => {

    const [listProducts, setListProducts] = useState([]);

    useEffect(()=>{
        setListProducts(props.listProduct);
    })



   

    return (
       <div className="product-list">{listProducts.map((product)=>{
        return <><ProductListItem product={product} productList={listProducts} updateProducts={setListProducts} getListProduct={props.getListProduct}/></>
    })}</div>
    )
}

export default ProductsList