import { useEffect, useState } from 'react';
import { useAuthState } from 'auth-state/use-auth-state.hook';
import { axiosPrivate } from 'api/axios';

export interface IProduct {
  productText: string;
  status: string;
  userTGId: number;
  comments: string;
  createdAt: string;
  updatedAt: string;
}

const getProducts = async () => {
  try {
    const result = await axiosPrivate.get('products');
    return result.data;
  } catch (e) {
    console.log('error get products');
  }
};
const Mainpage = () => {
  const [products, setProducts] = useState<[] | null>(null);
  const { clearToken } = useAuthState();

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    const result = await getProducts();
    setProducts(result);
  };
  return (
    <div>
      {products?.map((product: IProduct, index) => {
        return (
          <div key={index}>
            {' '}
            <div>{product.productText}</div>{' '}
          </div>
        );
      })}
      <button onClick={handleGetProducts}>Get products</button>
      <button className="absolute right-10 top-5" onClick={() => clearToken()}>
        Loguot
      </button>
    </div>
  );
};

export default Mainpage;
