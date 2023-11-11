/* eslint-disable */
import { ChangeEvent } from 'react';
import { Button, Label, Modal, Table, Textarea } from 'flowbite-react';
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
  const [modalSize, setModalSize] = useState<string>('7xl');
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
      setProductDetails('');
      await handleGetProducts();
    }
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setProductDetails(event.target.value);
  };
  console.log(product.trackNumber);
  return (
    <>
      <Button color="primary" onClick={() => setOpen(!isOpen)}>
        <HiPencilAlt className="mr-2 text-lg" />
        Edit
      </Button>

      <Modal
        size={modalSize}
        className="bg-gray-900 "
        onClose={() => setOpen(false)}
        show={isOpen}
      >
        <Modal.Header className="bg-gray-900 border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>
            <span className="mx-5 text-white"> Edit product.</span>{' '}
            <span className="mx-5 text-white">User:</span>{' '}
            <span className="text-white">
              {' '}
              <a
                className="text-blue-400 underline"
                href={`https://t.me/${product.userTGNick}`}
                target="_blank"
              >
                {product.userTGNick}
              </a>
            </span>
            <span className="ml-5 text-white">Status: </span>
            <span className="text-blue-400">{product.status}</span>
          </strong>
        </Modal.Header>
        <div className="relative">
          <div className="flex gap-5 items-center mt-2">
            <Button
              className="w-[150px] ml-5 bg-blue-100 text-lg"
              color="primary"
              onClick={() => setIsOpenDropDown(!isOpenDropDown)}
            >
              Change status
            </Button>
            <Label>Status: {status}</Label>
          </div>
          {isOpenDropDown && (
            <div
              className="w-[23%] absolute left-[22px] bg-gray-100  py-1"
              role="none"
            >
              <button
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-0"
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
                id="menu-item-0"
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
                id="menu-item-1"
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
                id="menu-item-2"
                onClick={() => {
                  setStatus(Status.OnReview);
                  setIsOpenDropDown(false);
                }}
              >
                On rewiev
              </button>
              <button
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-2"
                onClick={() => {
                  setStatus(Status.All);
                  setIsOpenDropDown(false);
                }}
              >
                All
              </button>
            </div>
          )}
        </div>
        <Label className="mt-3 ml-6 whitespace-pre-line">
          trackNumber: <br />
          {product.trackNumber}
        </Label>
        <Label className="mt-3 ml-6 whitespace-pre-line ">
          totalAmount: <br />
          {product.totalAmount}
        </Label>
        <Label className="mt-3 ml-6 whitespace-pre-line">
          Info: <br />
          {product.info}
        </Label>

        <Modal.Body>
          <form>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="lg:col-span-2">
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
        <Modal.Footer className="justify-center">
          <Button
            className="w-[200px] bg-blue-400 text-lg m-[10px]"
            color="primary"
            onClick={() => handleChangeProductStatus()}
          >
            Submit Form
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const ProductsTable: FC<TableProductsPageProps> = function ({
  product,
  handleGetProducts,
}) {
  return (
    <Table.Row
      key={product._id}
      className="w-full hover:bg-gray-100 dark:hover:bg-neutral-300"
    >
      <Table.Cell className="truncate overflow-hidden max-w-[200px] whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-black ">
        {product.updatedAt}
      </Table.Cell>
      <Table.Cell className="truncate overflow-hidden max-w-[200px] font-medium whitespace-nowrap p-4">
        {product.info}
      </Table.Cell>
      <Table.Cell className="truncate overflow-hidden max-w-[200px] whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-black w-[120px]">
        {product.status}
      </Table.Cell>
      <Table.Cell className="truncate overflow-hidden max-w-[200px] whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-black ">
        {product.trackNumber}
      </Table.Cell>
      <Table.Cell className="truncate overflow-hidden max-w-[200px] whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-black ">
        <a
          className="text-blue-900"
          href={`https://t.me/${product.userTGNick}`}
          target="_blank"
        >
          {product.userTGNick}
        </a>
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-black ">
        {product.totalAmount}
      </Table.Cell>

      <Table.Cell className="space-x-2 whitespace-nowrap p-4 pr-[50px]">
        <div className="group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2">
          <EditProductModal
            product={product}
            handleGetProducts={handleGetProducts}
          />
          {/* <DeleteProductModal product={product} /> */}
        </div>
      </Table.Cell>
    </Table.Row>
  );
};
