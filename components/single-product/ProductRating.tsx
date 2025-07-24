import React from "react";
import { FaStar } from "react-icons/fa";

const ProductRating = ({ productId }: { productId: string }) => {
  // temp
  const rating = 4.3;
  const count = 25;

  const className = `flex gap-1 item-center text-mc mt-1 mb-4`;
  const countValue = `(${count}) reviews`;

  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
};

export default ProductRating;
