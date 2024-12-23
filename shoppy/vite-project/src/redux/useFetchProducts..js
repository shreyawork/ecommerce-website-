import { useState, useEffect } from 'react';

const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error('failed to fetch');
      }
      const data = await response.json();
      setProducts(data.products);
    }catch(error){
      setLoading(error.message);
    } finally{
      setLoading(false);
    }
  };
    fetchData();
  }, [url]);

  return { products, loading,error };
};

export default useFetchProducts;
