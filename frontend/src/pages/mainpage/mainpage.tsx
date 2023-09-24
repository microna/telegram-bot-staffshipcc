import React, { useEffect, useState, useRef } from 'react';
import { useAuthState } from 'auth-state/use-auth-state.hook';
import { axiosPrivate } from 'api/axios';
import { ProductsTable } from 'pages/mainpage/component/tablePage';
import { Table } from 'flowbite-react';

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
  All = 'All',
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
        onClick={() => setStatus(Status.New)}
      >
        New
      </button>
      <button
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        onClick={() => setStatus(Status.ToEdit)}
      >
        To edit
      </button>
      <button
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        onClick={() => setStatus(Status.Reject)}
      >
        Reject
      </button>
      <button
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        onClick={() => setStatus(Status.OnReview)}
      >
        On review
      </button>
      <button
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        onClick={() => setStatus(Status.All)}
      >
        All
      </button>
    </div>
  );
};

const Mainpage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [status, setStatus] = useState(Status.All);
  const { clearToken } = useAuthState();
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    try {
      const result = await axiosPrivate.get('products');
      setProducts(result.data);
    } catch (e) {
      console.log('error get products');
    }
  };

  const filteredProducts = (products: IProduct[], status: string) => {
    const isFilledProducts = products.filter(
      (product) => product.isFilled === true,
    );
    if (status === Status.All) {
      return isFilledProducts;
    } else {
      return isFilledProducts.filter((product) => product.status === status);
    }
  };

  return (
    <div className="container">
      <div className="w-[80%] m-auto  mb-[100px] mt-[100px]">
        <div className="mb-4  flex w-full justify-between">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            All products
          </h1>
          <div
            className="left-[700px] mt-2  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="flex ">
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
        <Table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 min-w-full divide-y divide-gray-200 dark:divide-gray-600">
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
          <Table.Body className="w-full divide-y divide-gray-200 bg-white dark:divide-gray-700 bg-gray-100">
            {products &&
              filteredProducts(products, status).map((product: IProduct) => (
                <ProductsTable
                  product={product}
                  key={product._id}
                  handleGetProducts={handleGetProducts}
                />
              ))}
          </Table.Body>
        </Table>
        <button
          className="absolute flex text-gray-400 right-10 top-5"
          onClick={() => clearToken()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Mainpage;
