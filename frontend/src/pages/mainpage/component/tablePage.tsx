/* eslint-disable */
import { ChangeEvent } from 'react';
import {
  Button,
  Label,
  Modal,
  Table,
  Textarea,
} from 'flowbite-react';
import type { FC } from 'react';
import { useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { IProduct, Status } from '../mainpage';
import { axiosPrivate } from 'api/axios';

interface TableProductsPageProps {
  product: IProduct;
  handleGetProducts: () => void;
}
interface IStatusChange {
  id: string;
  status: string;
  message?: string;
}

const changeProductStatus = async ({ id, status, message }: IStatusChange) => {
  try {
    const result = await axiosPrivate.patch('changeProductStatus', {
      id,
      status,
      message,
    });
    return result;
  } catch (e) {
    console.log('error login');
  }
};

const TableProductsPage: FC<TableProductsPageProps> = function ({
  product,
  handleGetProducts,
}) {
  return (
    <>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="block items-center sm:flex">
            {/* <SearchForProducts />
            <div className="hidden space-x-1 border-l border-gray-100 pl-2 dark:border-gray-700 md:flex">
              <a
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Configure</span>
                <HiCog className="text-2xl" />
              </a>
            </div> */}
            <div className="flex w-full items-center sm:justify-end"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <ProductsTable
                product={product}
                handleGetProducts={handleGetProducts}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//TODO if needed. Add search product
// const SearchForProducts: FC = function () {
//   return (
//     <form className="mb-4 sm:mb-0 sm:pr-3" action="#" method="GET">
//       <Label htmlFor="products-search" className="sr-only">
//         Search
//       </Label>
//       <div className="relative mt-1 lg:w-64 xl:w-96">
//         <TextInput
//           id="products-search"
//           name="products-search"
//           placeholder="Search for products"
//         />
//       </div>
//     </form>
//   );
// };

const EditProductModal: FC<TableProductsPageProps> = function ({
  product,
  handleGetProducts,
}) {
  const [isOpen, setOpen] = useState(false);
  const [status, setStatus] = useState(product.status);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [productDetails, setProductDetails] = useState('');
  const handleChangeProductStatus = async () => {
    const result = await changeProductStatus({
      id: product._id,
      status,
      message: productDetails,
    });
    if (result) {
      setOpen(false);
      await handleGetProducts();
    }
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setProductDetails(event.target.value);
  };
  return (
    <>
      <Button color="primary" onClick={() => setOpen(!isOpen)}>
        <HiPencilAlt className="mr-2 text-lg" />
        Answer
      </Button>
      <Modal className="" onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>
            <span className="mx-5"> Answer product.</span> User:{' '}
            <span className="text-gray-400">{product.userTGId}</span>
            <span className="ml-5">Status: </span>
            <span className="text-gray-400">{product.status}</span>
          </strong>
        </Modal.Header>
        <div className="relative">
          <div className="flex gap-5">
            <Button
              className="w-[10%] ml-7 bg-gray-100 text-lg"
              color="primary"
              onClick={() => setIsOpenDropDown(!isOpenDropDown)}
            >
              Change status
            </Button>
            <Label>Status: {status}</Label>
          </div>

          {isOpenDropDown && (
            <div
              className="w-[10%] absolute left-[30px] bg-gray-100 py-1"
              role="none"
            >
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

        <Label className="mt-3 ml-6">{product.productText}</Label>
        <Modal.Body>
          <form>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="lg:col-span-2 p-5">
                <Label htmlFor="productDetails">Write answer</Label>
                <Textarea
                  id="productDetails"
                  name="productDetails"
                  placeholder="Message..."
                  rows={6}
                  className="mt-1 p-2"
                  value={productDetails}
                  onChange={handleTextareaChange}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="w-full bg-gray-400 text-lg"
            color="primary"
            onClick={() => handleChangeProductStatus()}
          >
            Change status
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const ProductsTable: FC<TableProductsPageProps> = function ({
  product,
  handleGetProducts,
}) {
  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <Table.Head className="bg-gray-100 dark:bg-gray-700"></Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700"></Table.Row>

        <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            <div className="text-base font-semibold text-gray-900 dark:text-white">
              {product.updatedAt}
            </div>
            <div className="truncate overflow-hidden inline-block max-w-[400px] text-gray-500 dark:text-gray-400 ">
              {product.productText}
            </div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white w-[120px]">
            {product.status}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
            {product.userTGId}
          </Table.Cell>

          <Table.Cell className="space-x-2 whitespace-nowrap p-4">
            <div className="flex items-center gap-x-3">
              <EditProductModal
                product={product}
                handleGetProducts={handleGetProducts}
              />
              {/* <DeleteProductModal product={product} /> */}
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default TableProductsPage;
