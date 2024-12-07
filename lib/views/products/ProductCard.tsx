import React from "react";

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <a key={product.id} href={product.href} className="group text-sm">
      <img
        alt={product.imageAlt}
        src={product.imageSrc}
        className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
      />
      <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
      <p className="italic text-gray-500">{product.availability}</p>
      <p className="mt-2 font-medium text-gray-900">{product.price}</p>
    </a>
  );
};

export default ProductCard;
