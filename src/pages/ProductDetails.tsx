import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  thumbnail?: string;
  images?: string[];
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-6">Loading product details...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;
  if (!product) return <p className="p-6">Product not found.</p>;

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-[#F4F4F4]">
        <div className="mx-auto max-w-3xl px-3 py-5 text-center md:py-10">
          <h1 className="text-3xl font-semibold leading-tight text-[#1E1E1E] md:text-[40px]">
            All-in-One E-commerce App
          </h1>
          <h2 className="mt-5 text-lg font-medium text-[#1E1E1E]">
            Discover premium products and enjoy shopping with us. Risk Free Shopping!
          </h2>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto max-w-6xl p-6">
        <div className="flex flex-col overflow-hidden rounded-lg border border-green-200 bg-white lg:flex-row">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <img
              className="h-96 w-full object-cover"
              src={product.thumbnail || product.images?.[0]}
              alt={product.title}
              loading="lazy"
            />
          </div>

          {/* Product Info */}
          <div className="p-6 lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">{product.title}</h2>
            <p className="mb-2 text-sm text-gray-500">Category: {product.category}</p>

            <p className="mb-6 text-gray-700">{product.description}</p>

            <p className="mb-6 text-2xl font-semibold text-gray-800">${product.price}</p>

            {/* Buy Now Button */}
            <button
              onClick={() => alert('Add to Cart clicked!')}
              className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;