/* eslint-disable */
import { Table } from 'flowbite-react';
import type { FC } from 'react';
import { IProduct } from '../mainpage';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { EditProductModal } from '../productModal';

export interface TableProductsPageProps {
  product: IProduct;
  handleGetProducts: () => void;
}

export const ProductsTable: FC<TableProductsPageProps> = function ({
  product,
  handleGetProducts,
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const trackNumber = product.trackNumber;

    // Copy the trackNumber to clipboard
    navigator.clipboard
      .writeText(trackNumber)
      .then(() => {
        toast.success(`Copied track number: ${trackNumber}`);
      })
      .catch((error) => {
        console.error('Unable to copy track number', error);
        toast.error('Failed to copy track number');
      });
  };
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

      <Table.Cell className="truncate overflow-hidden max-w-[200px] whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-black w-[120px]">
        {product.status}
      </Table.Cell>
      <Table.Cell className="truncate overflow-hidden max-w-[200px] whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-black ">
        <a className="cursor-pointer" onClick={handleClick}>
          {product.trackNumber}
        </a>
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
