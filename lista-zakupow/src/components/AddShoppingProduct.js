import '../App.css';
import {useContext, useEffect, useState} from 'react';
import { ProductsContext } from '../Context/ProductsContext';
const AddShoppingProduct = (props) => {
    const [term, setTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    
    function takeValueToInput(e){
        setProducts(props.listProduct);
        console.log(products);
        setTerm(e.target.value);
    }

    function addProduct(){
        if(term.length < 1){
            setError('Pole nie może być puste');
        }else{
            setProducts([...products, {product: term, id: (Math.floor(Math.random()*100)), isCompleted: false}]);
            setTerm('');
            setError('');
        }
    }

    useEffect(()=>{
        setProducts(props.listProduct);
        console.log(products);
    },[])

    useEffect(()=>{
        props.getList(products);
    },[products])
   
   
    return(
        <div className="Add-product">
            <div className='Add-product_actions'>
            <input value={term} className="form-control" type="text" onChange={takeValueToInput} placeholder="Wpisz produkt"></input>
            <button className="btn btn-primary" onClick={addProduct}>Add</button>
            </div>
            {error ? <div className="alert alert-danger"><strong>Danger!</strong> {error}</div> : null}
        </div>
    )
}

export default AddShoppingProduct