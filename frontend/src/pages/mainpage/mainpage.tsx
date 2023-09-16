import { useEffect, useState } from 'react';
import { useAuthState } from 'auth-state/use-auth-state.hook';
import { axiosPrivate } from 'api/axios';
import { RxCross2 } from 'react-icons/rx';
import { BsPen } from 'react-icons/bs';
import { FaHammer } from 'react-icons/fa';
export interface IProduct {
  _id: string;
  productText: string;
  status: string;
  userTGId: number;
  comments: string;
  createdAt: string;
  updatedAt: string;
}

enum Status {
  ToEdit = 'To edit',
  Reject = 'Reject',
  OnReview = 'On review',
  All = 'All',
}

interface IStatusChange {
  id: string;
  status: Status;
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
  const [status, setStatus] = useState('');
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const { clearToken } = useAuthState();

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  const filteredProducts = (products: IProduct[], status: string) => {
    if (status === Status.All) {
      return products;
    } else {
      return products.filter((product) => product.status === status);
    }
  };

  const changeProductStatus = async ({ id, status }: IStatusChange) => {
    try {
      const result = await axiosPrivate.patch('changeProductStatus', {
        id,
        status,
      });

      await handleGetProducts();
      return result;
    } catch (e) {
      console.log('error login');
    }
  };

  return (
    <>
      <div className="w-[80%] m-auto mt-[100px]">
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setIsOpenDropDown(!isOpenDropDown)}
            >
              Options
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpenDropDown && (
            <div className="py-1" role="none">
              <button
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-0"
                onClick={() => setStatus(Status.ToEdit)}
              >
                To edit
              </button>
              <button
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-1"
                onClick={() => setStatus(Status.Reject)}
              >
                Reject
              </button>
              <button
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-2"
                onClick={() => setStatus(Status.OnReview)}
              >
                On rewiev
              </button>
              <button
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-2"
                onClick={() => setStatus(Status.All)}
              >
                All
              </button>
            </div>
          )}
        </div>
        {products &&
          filteredProducts(products, status).map((product: IProduct, index) => {
            return (
              <div key={index} className="flex">
                <div className="">
                  {' '}
                  <div className="flex justify-between pt-2"></div>{' '}
                  <div>{product.createdAt}</div>
                  <div>{product.productText}</div>{' '}
                </div>

                <div className="flex gap-3 ">
                  <FaHammer
                    className="cursor-pointer border-2"
                    onClick={() =>
                      changeProductStatus({
                        id: product._id,
                        status: Status.OnReview,
                      })
                    }
                  />
                  <BsPen
                    className="cursor-pointer border-2"
                    onClick={() =>
                      changeProductStatus({
                        id: product._id,
                        status: Status.ToEdit,
                      })
                    }
                  />
                  <RxCross2
                    className="cursor-pointer border-2"
                    onClick={() =>
                      changeProductStatus({
                        id: product._id,
                        status: Status.Reject,
                      })
                    }
                  />
                </div>
              </div>
            );
          })}
        <button onClick={handleGetProducts}>Get products</button>
        <button
          className="absolute right-10 top-5"
          onClick={() => clearToken()}
        >
          Loguot
        </button>
      </div>
    </>
  );
};

export default Mainpage;
