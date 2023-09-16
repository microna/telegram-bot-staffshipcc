import React, { useEffect, useState } from 'react';
import axios from 'axios';

export interface IProduct {
   productText: string;
   status: string;
   userTGId: number;
   comments: string;
   createdAt: string;
   updatedAt: string;
}

const Mainpage = () => {
   const [products, setProducts] = useState<[] | null>(null);
   const [error, setError] = useState<string>('');
   const backendUrl = process.env.REACT_APP_BACKEND_URL || '/';
   const [state, setState] = useState(false);

   useEffect(() => {
      try {
         axios.get(backendUrl + 'productsasdasd').then((result) => {
            setProducts(result.data);
         });
      } catch (err) {
         setError('error');
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleProduct = () => {
      setState(!state);
   };
   console.log('dasd', error);
   return (
      <div>
         {state &&
            products?.map((product: IProduct, index) => {
               return (
                  <div key={index}>
                     {' '}
                     <div>{product.productText}</div>{' '}
                     <button onClick={handleProduct}>fsdfsdfsd</button>
                  </div>
               );
            })}
      </div>
   );
};

export default Mainpage;
