import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const Productdetail =() =>{
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading,setLoading]= useState(true);//loading state
    const [error, setError] = useState(null);// error state
    const [imgError,setImgError] =useState(false);//to handle image
 useEffect (() =>{
    const fetchProduct = async () => {
     try{
        const response = await fetch(`https://dummyjson.com/products/${id}`);
       if(!response.ok){
        throw new Error('Failed to fetch product');

       }
        const data = await response.json();
       setProduct(data);
    } catch (error){
        setError(error.message);
    } finally {
        setLoading(false);
    }
    };
   fetchProduct();
},[product.id]);
if( loading){
    return <div>Loading...</div>;
}
if(error){
    return <div>Error: {error}</div>;
}
return (
    <div>
        { product&&(
            <div>
                <h1>{product.title}</h1>
               <p> {product.description}</p>
              <p> price:&#8377;{product.price}</p>
              <img src ={product.image} alt={product.title} style={{width:'200px',height:'auto'}} />

            </div>
        )}
    </div>
);
};
export default Productdetail;