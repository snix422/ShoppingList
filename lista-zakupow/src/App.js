import {  useContext, useState } from 'react';
import './App.css';
import AddShoppingProduct from './components/AddShoppingProduct';
import ProductsList from './components/ProductsList';
import { ProductsContext } from './Context/ProductsContext';
import ProductListItem from './components/ProductListItem';

function App() {

  const [listProduct, setListProduct] = useState([]);

  const getListProduct = (list) => {
    console.log(list);
    setListProduct(list);
  }

  const deleteAll = () => {
    setListProduct([]);
  }

  return (
    <div className="App">
      <AddShoppingProduct getList={getListProduct} listProduct={listProduct} />
      <h2 style={{color:'gold'}}>Lista zakupów:({listProduct.length})</h2>
      <ProductsList listProduct={listProduct} updateProduct={setListProduct} getListProduct={getListProduct}>
        <ProductListItem getListProduct={getListProduct} />
      </ProductsList>
      {listProduct.length === 0 ? null : <button className='btn btn-warning' onClick={deleteAll}>Wyczyść listę zakupów</button> }
    </div>
  );
}

export default App;
