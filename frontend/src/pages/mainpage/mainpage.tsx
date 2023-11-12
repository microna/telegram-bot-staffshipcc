import React, { useEffect, useState, useRef } from 'react';
import { useAuthState } from 'auth-state/use-auth-state.hook';
import { axiosPrivate } from 'api/axios';
import { ProductsTable } from 'pages/mainpage/component/tablePage';
import { Button, DarkThemeToggle, Spinner, Table } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export interface IProduct {
  _id: string;
  trackNumber: string;
  totalAmount: string;
  userTGNick: string;
  userTGId: number;
  isFilled: boolean;
  info: string;
  status: string;
  comments: string;
  createdAt: string;
  updatedAt: string;
}

export enum Status {
  ToEdit = 'To edit',
  Reject = 'Reject',
  OnReview = 'On review',
  New = 'New',
  Archive = 'Archive',
}

interface IDropdownMenu {
  setStatus: (status: Status) => void;
  setIsOpenDropDown: (isActive: boolean) => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

const DropdownMenu: React.FC<IDropdownMenu> = ({
  setStatus,
  setIsOpenDropDown,
  buttonRef,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target !== buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenDropDown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="absolute z-10 bg-gray-100 py-1"
      role="none"
      ref={dropdownRef}
    >
      <button
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        onClick={() => {
          setStatus(Status.New);
          setIsOpenDropDown(false);
        }}
      >
        New
      </button>
      <button
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        onClick={() => {
          setStatus(Status.ToEdit);
          setIsOpenDropDown(false);
        }}
      >
        To edit
      </button>
      <button
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        onClick={() => {
          setStatus(Status.Reject);
          setIsOpenDropDown(false);
        }}
      >
        Reject
      </button>
      <button
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        onClick={() => {
          setStatus(Status.OnReview);
          setIsOpenDropDown(false);
        }}
      >
        On review
      </button>
      <button
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        onClick={() => {
          setStatus(Status.Archive);
          setIsOpenDropDown(false);
        }}
      >
        Archive
      </button>
    </div>
  );
};

const Mainpage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [status, setStatus] = useState(Status.New);
  const { clearToken } = useAuthState();
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    handleGetProducts();
    const interval = setInterval(() => {
      handleGetProducts();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleGetProducts = async () => {
    try {
      setLoading(true);
      const result = await axiosPrivate.get('products');
      setProducts(result.data);
      setLoading(false);
    } catch (e) {
      console.log('error get products');
    }
  };

  const filteredProducts = (products: IProduct[], status: string) => {
    return products.filter((product) => product.status === status);
  };

  return (
    <div className="w-full h-full dark:bg-gray-600">
      {loading && (
        <Spinner className="absolute flex w-full items-center justify-center" />
      )}
      <div className="container dark:bg-gray-600">
        <div className="w-[80%] m-auto pb-[100px]">
          <div className="mb-4  flex w-full justify-between  ">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mt-[100px]">
              Products
            </h1>
            <div
              className=""
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="flex ">
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-[100px]"
                  id="menu-button"
                  aria-expanded={isOpenDropDown}
                  aria-haspopup={isOpenDropDown}
                  onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                  ref={buttonRef}
                >
                  Status: {status}
                  <svg
                    className="mr-1 h-5 w-5 text-gray-400"
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
                <DropdownMenu
                  setStatus={setStatus}
                  setIsOpenDropDown={setIsOpenDropDown}
                  buttonRef={buttonRef}
                />
              )}
            </div>
          </div>
          <Table className="relative w-full text-left text-sm text-gray-500 dark:text-gray-400 min-w-full divide-y divide-gray-200 dark:divide-gray-600 ">
            <Table.Head className="group/head text-xs uppercase bg-gray-50">
              <Table.HeadCell className="group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 p-4 ">
                Date
              </Table.HeadCell>

              <Table.HeadCell className="group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 p-4 ">
                Product Info
              </Table.HeadCell>

              <Table.HeadCell className="group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 p-4 ">
                Status
              </Table.HeadCell>

              <Table.HeadCell className="group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 p-4 ">
                Track Number
              </Table.HeadCell>
              <Table.HeadCell className="group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 p-4 ">
                TG Nick
              </Table.HeadCell>
              <Table.HeadCell className="group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 p-4 ">
                Price
              </Table.HeadCell>
              <Table.HeadCell className="group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 p-4 "></Table.HeadCell>
            </Table.Head>
            <Table.Body className="w-full divide-y divide-gray-200 bg-white dark:divide-gray-700 bg-gray-100 ">
              {products &&
                filteredProducts(products, status)
                  .reverse()
                  .map((product: IProduct) => (
                    <ProductsTable
                      product={product}
                      key={product._id}
                      handleGetProducts={handleGetProducts}
                    />
                  ))}
            </Table.Body>
          </Table>
          <div className="absolute flex right-10 top-5 gap-3">
            <DarkThemeToggle />
            <Button
              className="text-gray-400 dark:text-red-400"
              onClick={() => navigate('logs')}
            >
              Logs
            </Button>
            <Button className="text-gray-400" onClick={() => clearToken()}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
