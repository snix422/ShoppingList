import { useEffect, useRef, useState } from "react"

const ProductListItem = (props) => {
    
    const [listProducts, setListProducts] = useState(props.productList);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isThrough, setIsThrough] = useState('');

    const input = useRef();

   
   
    function doneProduct(){
        if(input.current.checked === true){
            setIsCompleted(true);
           
        }else{
            setIsCompleted(false);
        }
    }

    const deleteProduct = () => {
        console.log(props.product.id);
        const newArr = props.productList.filter((item)=> item.id !== props.product.id);
        console.log(newArr);
        props.updateProducts(newArr);
        props.getListProduct(newArr);
        input.current.checked = false;
        setIsCompleted(false);
    }

    
    return(
        <div className="product-list-item">
            <span className={isCompleted === true ? 'through' : null}>{props.product.product}</span>
            <input ref={input} onClick={doneProduct} type="checkbox"></input>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default ProductListItem