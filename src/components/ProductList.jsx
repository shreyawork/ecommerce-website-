import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Search from './Search';
import useFetchProducts from "../redux/useFetchProducts."
const ProductList = () => {
  const [query, setQuery] = useState('');
  const { products, loading, error } = useFetchProducts('https://dummyjson.com/products'); // Correct API URL


  const handleSearch = (query) => {
    setQuery(query);  // Updates the search query
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
if(loading){
  return <div>Loading...</div>;
}
if(error){
  return <div>Error:{error}</div>;
}
  return (
    <div>
      <Search onSearch={handleSearch} />
      <div>
      {  filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />)
      )}
      </div>
    </div>
  );
};

export default ProductList;
