import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  images?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border-green-200 overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          className="h-48 w-full object-cover"
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          loading="lazy"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-2 text-lg font-semibold text-gray-800 hover:text-indigo-600">
            {product.title}
          </h3>
        </Link>
        <p className="mb-4 text-gray-600">${product.price}</p>
        <button
          onClick={() => alert('Buy Now clicked!')}
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;