export const fetchProducts =() =>{
    return async (dispatch) =>{
        try{
            const response = await fetch('https://dummyjson.com/products');

            const data = await response.json()
            dispatch({
                type: 'FETCH_PRODUCTS_SUCCESS',
                 payload: data.products ||[],
                });

        } catch(error){
            dispatch({
                type: 'FETCH_PRODUCTS_FAILURE', 
                payload: Error
            });
        }
        
    };
};