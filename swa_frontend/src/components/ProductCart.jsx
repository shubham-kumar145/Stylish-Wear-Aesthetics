// import React, { useMemo } from 'react';
// import { NavLink } from 'react-router-dom';

// export default function ProductCard({ product }) {
//   const { randomRating, randomReviews } = useMemo(() => {
//     const seed = product.price; 

//     // Deterministic rating (ranges between 3.0 to 4.8)
//     const rating = (3 + ((seed % 18) / 10)).toFixed(1);
//     // example: price = 750 → rating = 3 + (750 % 18)/10 = 4.5

//     // Deterministic reviews count (100–40000)
//     const reviews = (100 + (seed * 1234) % 40000);

//     return { randomRating: rating, randomReviews: reviews };
//   }, [product.price]);


//   return (
//     <NavLink
//       to={`/product-details/${product._id}`}
//       // to={`/product/${product._id}`}
//       className="bg-white rounded-md overflow-hidden p-2 text-sm w-full transition-all hover:-translate-y-1"
//       style={{
//         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)', // custom black shadow
//       }}
//     >
//       {/* Image First */}
//       <div className="w-full h-48 flex items-center justify-center mb-2">
//         <img
//           src={product.photo?.url || '/no-image.png'}
//           alt={product.name}
//           className="h-full w-full object-contain"
//         />
//       </div>

//       {/* Sponsored */}
//       <p className="text-xs text-gray-400 mb-1 text-left">Sponsored</p>

//       {/* Brand & Assurance */}
//       <div className="flex justify-between items-center">
//         <p className="font-semibold text-gray-800 first-letter:uppercase text-left">{product.brand}</p>
//         <img
//           src="/hero_photo/logo.jpg"
//           alt="Assured"
//           className="w-12 h-8 object-contain"
//         />
//       </div>

//       {/* Title */}
//       <p className="text-gray-700 font-medium line-clamp-2 mt-1 mb-1 first-letter:uppercase text-left">{product.name}</p>

//       {/* Price & Discount */}
//       <div className="flex items-center gap-2 mt-2">
//         <p className="text-black font-bold text-sm">₹{((product.price - product.price * ( product.discount / 100)).toFixed(0))}</p>
//         {/* <p className="text-black font-bold text-sm">₹{((product.price - product.price * ( product.discount / 100)).toFixed(0))}</p> */}
//         {product.discount > 0 && (
//           <>
//             <p className="text-gray-400 line-through text-xs">
//               ₹{product.price}
//             </p>
//             <p className="text-green-600 text-xs font-semibold">{product.discount}% off</p>
//           </>
//         )}
//       </div>

//       {/* Delivery */}
//       <div className="text-xs mt-1 text-left">
//         <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium text-[10px] text-left">Free Delivery</span>
//       </div>

//       {/* Rating & Reviews */}
//       <div className="flex items-center gap-1 mt-1">
//         <span className="text-white text-[11px] bg-green-600 px-1.5 py-0.5 rounded-md font-semibold">
//           {randomRating}★
//         </span>
//         <span className="text-xs text-gray-600 font-medium">
//           {Number(randomReviews).toLocaleString()} Reviews
//         </span>
//       </div>
//     </NavLink>
//   );
// }

import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { randomRating, randomReviews } = useMemo(() => {
    const seed = product.price;
    const rating = (3 + ((seed % 18) / 10)).toFixed(1);
    const reviews = 100 + ((seed * 1234) % 40000);
    return { randomRating: rating, randomReviews: reviews };
  }, [product.price]);

  return (
    <NavLink
      to={`/product-details/${product._id}`}
      className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
                 hover:shadow-[0_6px_18px_rgba(0,0,0,0.22)] 
                 transition-all duration-300 block overflow-hidden"
    >
      <div className="p-3">

        {/* IMAGE */}
        <div className="w-full h-44 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden">
          <img
            src={product.photo?.url || '/no-image.png'}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Sponsored */}
        <p className="text-[10px] mt-2 text-gray-400">Sponsored</p>

        {/* BRAND + ICON */}
        <div className="flex justify-between items-center mt-1">
          <p className="font-semibold text-gray-800 first-letter:uppercase text-sm tracking-wide">
            {product.brand}
          </p>
          <img
            src="/hero_photo/logo.png"
            alt="Assured"
            className="w-10 h-6 object-contain opacity-100"
          />

        </div>

        {/* PRODUCT NAME */}
        <p className="text-gray-700 font-medium mt-1 text-[13px] leading-tight line-clamp-2 first-letter:uppercase">
          {product.name}
        </p>

        {/* PRICE & DISCOUNT */}
        <div className="flex items-center gap-2 mt-2">
          {/* Discounted Price */}
          <p className="text-black font-bold text-base">
            ₹{(product.price - product.price * (product.discount / 100)).toFixed(0)}
          </p>

          {product.discount > 0 && (
            <>
              {/* Original Price */}
              <p className="text-gray-400 line-through text-[12px]">
                ₹{product.price}
              </p>

              {/* Discount */}
              <p className="text-green-600 text-[12px] font-semibold">
                {product.discount}% off
              </p>
            </>
          )}
        </div>

        {/* DELIVERY TAG */}
        <div className="mt-1">
          <span className="inline-block bg-green-100 text-green-700 px-2 py-[2px] rounded-full text-[10px] font-medium">
            Free Delivery
          </span>
        </div>

        {/* RATING & REVIEWS */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-white text-[11px] bg-green-600 px-2 py-[2px] rounded-md font-bold flex items-center gap-[2px]">
            {randomRating}
            <span className="text-[10px] font-light">★</span>
          </span>

          <span className="text-[12px] text-gray-600 font-medium">
            {Number(randomReviews).toLocaleString()} Reviews
          </span>
        </div>

      </div>
    </NavLink>
  );
}
