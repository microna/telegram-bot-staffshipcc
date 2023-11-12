/* eslint-disable */
import { ChangeEvent } from 'react';
import { Button, Label, Modal, Spinner, Table, Textarea } from 'flowbite-react';
import type { FC } from 'react';
import { useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { IProduct, Status } from '../mainpage';
import { axiosPrivate } from 'api/axios';
import classNames from 'classnames';

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

const EditProductModal: FC<TableProductsPageProps> = function ({
  product,
  handleGetProducts,
}) {
  const [isOpen, setOpen] = useState(false);
  const modalSize = '7xl';
  const [status, setStatus] = useState(product.status);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [productDetails, setProductDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChangeProductStatus = async () => {
    setLoading(true);
    const result = await changeProductStatus({
      id: product._id,
      status,
      message: productDetails,
    });
    if (result) {
      setLoading(false);
      setOpen(false);
      setProductDetails('');
      await handleGetProducts();
    }
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setProductDetails(event.target.value);
  };

  const changeIsReadedStatus = async (id: string) => {
    if (!product.isReaded) {
      setLoading(true);
      const result = await axiosPrivate.patch('product/' + id);
      if (!result) {
        alert('error change product is readed');
      } else {
        setLoading(false);
        await handleGetProducts();
      }
    }
  };
  return (
    <>
      {loading && (
        <Spinner className="absolute flex w-full items-center justify-center" />
      )}
      <Button
        color="primary"
        onClick={() => {
          changeIsReadedStatus(product._id);
          setOpen(!isOpen);
        }}
      >
        <HiPencilAlt className="mr-2 text-lg" />
        Edit
      </Button>
      <Modal
        size={modalSize}
        className="bg-gray-900 "
        onClose={() => setOpen(false)}
        show={isOpen}
      >
        <Modal.Header className="bg-gray-60 border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>
            <span className="mx-5 text-blue-900"> Edit product.</span>{' '}
            <span className="mx-5 text-blue-900">User:</span>{' '}
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
            <span className="ml-5 text-blue-900">Status: </span>
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
                onClick={() => setStatus(Status.Archive)}
              >
                Archive
              </button>
            </div>
          )}
        </div>
        <Label className="mt-3 ml-6 whitespace-pre-line break-words pr-3">
          trackNumber: <br />
          {product.trackNumber}
          totalAmount: <br />
          {product.totalAmount}
          Info: <br />
          {product.info}
        </Label>

        <form className="bg-gray-60 dark:bg-gray-700">
          <div className=" w-full grid grid-cols-1 gap-6 lg:grid-cols-2">
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
        <Modal.Footer className="justify-center bg-gray-60 dark:bg-gray-700">
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
      className={classNames(
        'w-full hover:bg-gray-100 dark:hover:bg-neutral-300 hover:bg-gray-300',
        {
          'bg-green-400': !product.isReaded,
        },
      )}
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
        </div>
      </Table.Cell>
    </Table.Row>
  );
};
