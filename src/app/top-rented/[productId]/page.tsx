import { AllTopRentedItems } from '@/app/product';
import { useRouter } from 'next/router';
import React from 'react';

interface ProductDetails {
  productId: number;
  image: string;
  itemName: string;
  lender: string;
  place: string;
  oldPrice: number;
  currentPrice: number;
  duration: string;
  rating: number;
  slug: string;
  productDetails: string; // Added productDetails key
}

const ProductCard = ({ params }: { params: { productId: string } }) => {
  const productId = parseInt(params.productId);
  const product: ProductDetails | undefined = AllTopRentedItems.find(item => item.productId === productId);

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product is not found
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-[#8D8BD3]/20 h-screen   bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.itemName}
            className="lg:w-1/3 w-full object-cover object-center rounded border " // Adjusted width here
            src={product.image}
          />
          <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"> {/* Adjusted width for the description section */}
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Lender: {product.lender}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.itemName}</h1>

            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-3">{product.rating} Rating</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                <a href={`/${product.productId}`} className="text-gray-500">View More</a>
              </span>
            </div>

            <p className="leading-relaxed">
              Available in {product.place}, rentable by {product.duration}.
            </p>

            {/* Product details paragraph */}
            <p className="leading-relaxed mt-2">
              {product.productDetails} {/* Add product details here */}
            </p>

            <div className="flex py-5">
              <span className="title-font font-medium text-2xl text-gray-700">
              ${product.currentPrice}<s className="text-gray-500 ml-2">${product.oldPrice}</s>
              </span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
              <button className="rounded-full w-10 h-10 bg-[#8D8BD3]/20 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
