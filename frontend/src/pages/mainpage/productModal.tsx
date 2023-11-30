/* eslint-disable */
import { ChangeEvent } from 'react';
import { Button, Label, Modal, Spinner, Textarea } from 'flowbite-react';
import type { FC } from 'react';
import { useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { axiosPrivate } from 'api/axios';
import { TableProductsPageProps } from './component/tablePage';
import { Status } from './mainpage';
import { ProductInfoLayout } from './component/productInfoLayout';
import { MdOutlineDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

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
    toast.error('Failed change product status');
    console.log('error login');
  }
};

export const EditProductModal: FC<TableProductsPageProps> = function ({
  product,
  handleGetProducts,
}) {
  const [isOpen, setOpen] = useState(false);
  const modalSize = '7xl';
  const [status, setStatus] = useState(product.status);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [productDetails, setProductDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
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
      handleGetProducts();
    }
  };

  const handleRemoveProduct = async () => {
    setLoadingDelete(true);
    try {
      await axiosPrivate.delete(`deleteProduct/${product._id}`);
      setLoadingDelete(false);
      setOpen(false);
      setDeleteModalShow(false);
      handleGetProducts();
    } catch (e) {
      toast.error('Failed delete product');
    }
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setProductDetails(event.target.value);
  };

  const changeIsReadedStatus = async (id: string) => {
    try {
      if (!product.isReaded) {
        setLoading(true);
        const result = await axiosPrivate.patch('product/' + id);
        if (!result) {
          toast.error('Failed change is Readed status');
        } else {
          setLoading(false);
          await handleGetProducts();
        }
      }
    } catch (error) {
      toast.error('Failed change is Readed status');
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
            <span className="mx-5 text-blue-900 dark:text-gray-100">
              {' '}
              Edit product.
            </span>{' '}
            <span className="mx-5 text-blue-900 dark:text-gray-100">
              User:
            </span>{' '}
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
            <span className="ml-5 text-blue-900 dark:text-gray-100">
              Status:{' '}
            </span>
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
              <button
                className="text-gray-700 flex items-center text-red-500 px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-2"
                onClick={() => setDeleteModalShow(!deleteModalShow)}
              >
                <MdOutlineDelete />
                DELETE
              </button>
            </div>
          )}
        </div>
        <Label className="mt-3 ml-6 whitespace-pre-line break-words pr-3">
          trackNumber: <br />
          {product.trackNumber}
          totalAmount: <br />
          {product.totalAmount}
          <br />
          Info:
          <ProductInfoLayout info={product.info} />
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
      <Modal
        onClose={() => setDeleteModalShow(false)}
        show={deleteModalShow}
        size="md"
      >
        <Modal.Header className="px-6 pb-0 pt-6">
          <span className="sr-only">Удаление</span>
        </Modal.Header>
        <Modal.Body className="px-6 pb-6 pt-0">
          <div className="flex flex-col items-center gap-y-6 text-center">
            <p className="text-xl text-gray-500">Удаление?</p>
            <div className="flex items-center gap-x-3">
              {loadingDelete ? (
                <Spinner />
              ) : (
                <>
                  <Button color="gray" onClick={() => handleRemoveProduct()}>
                    Да
                  </Button>
                  <Button
                    color="gray"
                    onClick={() => setDeleteModalShow(false)}
                  >
                    Ніт
                  </Button>
                </>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
