import React from 'react';

interface ProductInfoProps {
  info: string;
}
export const ProductInfoLayout: React.FC<ProductInfoProps> = ({ info }) => {
  return (
    <>
      {info.split(/(https:\/\/\S+)/).map((item, index) => {
        const trimmedItem = item.trim();
        if (item.includes('https://')) {
          return (
            <a
              key={index}
              href={trimmedItem}
              target="_blank"
              className="underline text-blue-400"
              rel="noreferrer"
            >
              {trimmedItem}
            </a>
          );
        } else {
          return <p key={index}>{trimmedItem}</p>;
        }
      })}
    </>
  );
};
