// // import React, { useEffect, useState } from "react";
// // import axiosClient from "../utils/axiosClients";
// // import { NavLink, useParams } from "react-router-dom";
// // import DeliveryForm from "../components/DeliveryForm";
// // import Navbar from "../components/Navbar";

// // const ProductDetails = () => {
// //     const { id } = useParams(); 
// //     const [product, setProduct] = useState(null);

// //     useEffect(() => {
// //         const fetchProduct = async () => {
// //             try {
// //                 const { data } = await axiosClient.get(`/product/get-product-of/${id}`);
// //                 setProduct(data);
// //             } catch (err) {
// //                 console.error("Failed to fetch product", err);
// //             }
// //         };
// //         fetchProduct();
// //     }, [id]);

// //     if (!product) {
// //         return <div className="text-center mt-10">Loading...</div>;
// //     }

// //     const originalPrice = Math.round(product.price -  product.price * (product.discount / 100));

// //     return (
// //         <div>
// //             <Navbar />
// //             <div className="flex overflow-hidden px-6 py-6 bg-white/95">
// //                 {/* Left - Image */}
// //                 <div className="w-2/5 bg-gray-100 flex items-center justify-center border-r sticky top-0 h-full">
// //                     <img
// //                         src={product.photo?.url || "/placeholder.jpg"}
// //                         alt={product.name}
// //                         className="max-h-[90%] max-w-[90%] object-contain"
// //                     />
// //                 </div>

// //                 {/* Right - Scrollable Details */}
// //                 <div className="w-3/5 overflow-y-auto p-8 space-y-6 bg-white">
// //                     <h1 className="text-3xl font-bold uppercase text-black">{product.name}</h1>
// //                     <p className="text-xl text-gray-600">
// //                         Brand: <span className="first-letter:uppercase">{product.brand}</span>
// //                     </p>
// //                     <div className="text-2xl text-green-600 font-semibold">
// //                         ₹{originalPrice}
// //                         <span className="text-gray-500 line-through ml-4 text-lg">
// //                             ₹{product.price}
// //                         </span>
// //                         <span className="ml-2 text-green-600">({product.discount}% OFF)</span>
// //                     </div>

// //                     <p className="font-semibold mt-4">Stock: <span className="text-gray-700">{product.stock}</span></p>
// //                     <p className="text-gray-500">Location: {product.location}</p>

// //                     <div className="mt-6">
// //                         <h2 className="text-xl font-semibold mb-2">Description</h2>
// //                         <ul className="list-disc list-inside text-gray-700 space-y-1">
// //                             {product.description?.map((item, index) => (
// //                                 <li key={index}>
// //                                     <strong>{item.title}:</strong> {item.value}
// //                                 </li>
// //                             ))}
// //                         </ul>
// //                     </div>
// //                     <div>
// //                         <NavLink
// //                             to="/profile-page"
// //                             className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-200"
// //                         >
// //                             Add Address
// //                         </NavLink>
// //                     </div>

// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ProductDetails;
// import React, { useEffect, useState } from "react";
// import axiosClient from "../utils/axiosClients";

// const ProductDetails = ({ productId }) => {
//     const [product, setProduct] = useState(null);
//     const [selectedSize, setSelectedSize] = useState(null);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             const { data } = await axiosClient.get(`product/get-product-of/${productId}`);
//             setProduct(data);
//         };
//         fetchProduct();
//     }, [productId]);

//     if (!product) {
//         return <div className="text-center mt-10 text-lg font-medium">Loading...</div>;
//     }

//     const originalPrice = Math.round(product.price / (1 - product.discount / 100));

//     const sizes = ["XS", "S", "M", "L", "XL"];

//     return (
//         <div className="w-full flex justify-center bg-white">
//             <div className="max-w-[1400px] w-full grid grid-cols-2 gap-10 p-6">

//                 {/* LEFT — IMAGE GALLERY */}
//                 <div className="grid grid-cols-2 gap-4 sticky top-4 h-fit">
//                     {[product.photo?.url, product.photo?.url, product.photo?.url, product.photo?.url].map(
//                         (img, index) => (
//                             <div key={index} className="bg-gray-100 rounded-xl overflow-hidden">
//                                 <img
//                                     src={img}
//                                     alt="product"
//                                     className="w-full h-[350px] object-cover"
//                                 />
//                             </div>
//                         )
//                     )}
//                 </div>

//                 {/* RIGHT — DETAILS */}
//                 <div className="space-y-6 pr-6">

//                     {/* Title */}
//                     <h1 className="text-3xl font-bold text-gray-900">{product.brand}</h1>
//                     <p className="text-gray-600 text-lg">{product.name}</p>

//                     {/* Rating */}
//                     <div className="flex items-center gap-2">
//                         <span className="bg-green-600 text-white text-sm px-2 py-1 rounded font-semibold">
//                             4.3 ★
//                         </span>
//                         <span className="text-gray-500 text-sm">154 Ratings</span>
//                     </div>

//                     <hr />

//                     {/* Price */}
//                     <div>
//                         <p className="text-3xl font-bold text-gray-900">₹{product.price}</p>

//                         <div className="flex gap-3 items-center text-gray-500 mt-1">
//                             <span className="line-through text-lg">₹{originalPrice}</span>
//                             <span className="text-green-600 font-bold text-lg">
//                                 ({product.discount}% OFF)
//                             </span>
//                         </div>

//                         <p className="text-green-700 text-sm font-medium mt-1">
//                             inclusive of all taxes
//                         </p>
//                     </div>

//                     {/* Sizes */}
//                     <div>
//                         <div className="flex items-center justify-between">
//                             <p className="font-semibold text-gray-900 text-lg">SELECT SIZE</p>
//                             <p className="text-pink-500 text-sm cursor-pointer hover:underline">
//                                 SIZE CHART
//                             </p>
//                         </div>

//                         <div className="flex gap-3 mt-3">
//                             {sizes.map((size) => (
//                                 <button
//                                     key={size}
//                                     onClick={() => setSelectedSize(size)}
//                                     className={`w-12 h-12 rounded-full border text-sm font-semibold
//                     flex items-center justify-center
//                     hover:border-pink-600 transition
//                     ${selectedSize === size
//                                             ? "border-2 bg-pink-50 border-pink-600 text-pink-600"
//                                             : "border-gray-300 text-gray-700"
//                                         }`}
//                                 >
//                                     {size}
//                                 </button>
//                             ))}
//                         </div>

//                         <p className="text-xs text-gray-500 mt-2">
//                             We recommend <strong>34</strong> based on your previous purchases.
//                         </p>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex gap-4 mt-6">
//                         <button className="w-1/2 bg-pink-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-pink-700 transition">
//                             ADD TO BAG
//                         </button>

//                         <button className="w-1/2 border border-gray-400 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
//                             WISHLIST
//                         </button>
//                     </div>

//                     <hr />

//                     {/* Delivery */}
//                     <div className="space-y-3">
//                         <p className="text-lg font-semibold text-gray-900">DELIVERY OPTIONS</p>

//                         <input
//                             placeholder="Enter your Pincode"
//                             className="border p-2 rounded-lg w-48 text-sm"
//                         />

//                         <ul className="text-sm text-gray-600 space-y-1">
//                             <li>✓ Get it by Fri, Dec 05</li>
//                             <li>✓ Pay on delivery available</li>
//                             <li>✓ Easy 7-day return & exchange available</li>
//                         </ul>
//                     </div>

//                     <hr />

//                     {/* Description */}
//                     <div>
//                         <h2 className="text-xl font-semibold mb-3 text-gray-900">
//                             Product Details
//                         </h2>

//                         <ul className="space-y-2">
//                             {product.description.map((item, index) => (
//                                 <li key={index} className="text-gray-700 text-sm">
//                                     <strong>{item.title}: </strong> {item.value}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// // export default ProductDetails;
// import React, { useEffect, useState } from "react";
// import axiosClient from "../utils/axiosClients";
// import { NavLink, useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const ProductDetails = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const { data } = await axiosClient.get(`/product/get-product-of/${id}`);
//                 setProduct(data);
//             } catch (err) {
//                 console.error("Failed to fetch product", err);
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     if (!product) return <div className="text-center mt-10">Loading...</div>;

//     const originalPrice = Math.round(product.price - product.price * (product.discount / 100));

//     return (
//         <div className="bg-white">
//             <Navbar />

//             <div className="max-w-[1400px] mx-auto py-8 px-6 grid grid-cols-2 gap-10">

//                 {/* ---------------- LEFT SIDE IMAGE GALLERY ---------------- */}
//                 <div className="grid grid-cols-2 gap-4 sticky top-4 h-fit">
//                     {[product.photo?.url, product.photo?.url, product.photo?.url, product.photo?.url].map(
//                         (img, index) => (
//                             <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
//                                 <img
//                                     src={img || "/placeholder.jpg"}
//                                     alt="product"
//                                     className="w-full h-[380px] object-cover hover:scale-105 transition"
//                                 />
//                             </div>
//                         )
//                     )}
//                 </div>

//                 {/* ---------------- RIGHT SECTION ---------------- */}
//                 <div className="space-y-6">

//                     {/* BRAND + NAME */}
//                     <div>
//                         <h1 className="text-3xl font-bold text-gray-900 uppercase">{product.name}</h1>
//                         <p className="text-lg text-gray-600 mt-1">
//                             Brand: <span className="font-semibold first-letter:uppercase">{product.brand}</span>
//                         </p>
//                     </div>

//                     {/* RATING */}
//                     <div className="flex items-center gap-2 text-sm">
//                         <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
//                            {(3 + ((product.price % 18) / 10)).toFixed(1)} ★
//                         </span>
//                         <span className="text-gray-600">{100 + ((product.price * 1234) % 40000)} Ratings</span>
//                     </div>

//                     <hr />

//                     {/* PRICE */}
//                     <div>
//                         <div className="flex items-center gap-4">
//                             <p className="text-3xl font-bold text-gray-900">₹{originalPrice}</p>
//                             <p className="line-through text-gray-500 text-xl">₹{product.price}</p>
//                             <p className="text-green-600 text-lg font-semibold">
//                                 ({product.discount}% OFF)
//                             </p>
//                         </div>
//                         <p className="text-green-700 text-sm mt-1">inclusive of all taxes</p>
//                     </div>

//                     {/* SIZE SELECTOR */}
//                     <div>
//                         <div className="flex justify-between items-center">
//                             <p className="font-semibold text-lg">SELECT SIZE</p>
//                             <p className="text-pink-500 text-sm cursor-pointer hover:underline">
//                                 SIZE CHART
//                             </p>
//                         </div>

//                         <div className="flex gap-3 mt-3">
//                             {["S", "M", "L", "XL", "XXL"].map((size) => (
//                                 <button
//                                     key={size}
//                                     className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full
//                                     hover:border-pink-600 hover:text-pink-600 transition font-semibold text-sm"
//                                 >
//                                     {size}
//                                 </button>
//                             ))}
//                         </div>

//                         <p className="text-xs text-gray-500 mt-2">
//                             We recommend <strong>34</strong> based on your purchase history.
//                         </p>
//                     </div>

//                     {/* ADD TO BAG */}
//                     <div className="flex gap-4">
//                         <button className="w-1/2 bg-pink-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-pink-700">
//                             ADD TO BAG
//                         </button>

//                         <button className="w-1/2 border border-gray-400 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100">
//                             WISHLIST
//                         </button>
//                     </div>

//                     <hr />

//                     {/* DELIVERY INFO */}
//                     <div className="space-y-3">
//                         <p className="text-lg font-semibold">DELIVERY OPTIONS</p>

//                         <input
//                             placeholder="Enter Pincode"
//                             className="border rounded-lg p-2 w-48 text-sm"
//                         />

//                         <ul className="text-sm text-gray-700 space-y-1">
//                             <li>✓ Delivery by Fri, Dec 05</li>
//                             <li>✓ Pay on delivery available</li>
//                             <li>✓ Easy 7-day return & exchange</li>
//                         </ul>
//                     </div>

//                     <hr />

//                     {/* DESCRIPTION */}
//                     <div className="space-y-3">
//                         <h2 className="text-xl font-semibold">Product Details</h2>
//                         <ul className="space-y-2">
//                             {product.description?.map((item, index) => (
//                                 <li key={index} className="text-gray-700 text-sm">
//                                     <strong>{item.title}: </strong>{item.value}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* ADD ADDRESS */}
//                     <div>
//                         <NavLink
//                             to="/profile-page"
//                             className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700"
//                         >
//                             Add Address
//                         </NavLink>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;
import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClients";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [showSizeChart, setShowSizeChart] = useState(false);
    const [pincode, setPincode] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axiosClient.get(`/product/get-product-of/${id}`);
                setProduct(data);
            } catch (err) {
                console.error("Failed to fetch product", err);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div className="text-center mt-10">Loading...</div>;

    const originalPrice = Math.round(product.price - product.price * (product.discount / 100));

    // Calculate delivery date (5 days from now)
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    const formattedDelivery =
        deliveryDate.toLocaleDateString("en-IN", {
            weekday: "short",
            month: "short",
            day: "numeric"
        });

    // Allow only 6-digit pincode
    const handlePincode = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // remove letters
        if (value.length <= 6) setPincode(value);
    };

    return (
        <div className="bg-white">
            <Navbar />

            {/* SIZE CHART POPUP */}
            {showSizeChart && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-[480px]">

                        <h2 className="text-xl font-bold mb-4 text-gray-900">
                            General Size Chart
                        </h2>

                        <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm">
                            <thead className="bg-gray-100 text-gray-700 font-semibold">
                                <tr>
                                    <th className="border p-2">Size</th>
                                    <th className="border p-2">Height (cm)</th>
                                    <th className="border p-2">Weight (kg)</th>
                                    <th className="border p-2">Chest (in)</th>
                                    <th className="border p-2">Waist (in)</th>
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    { size: "XS", height: "150-160", weight: "45-55", chest: "32-34", waist: "26-28" },
                                    { size: "S", height: "160-168", weight: "50-60", chest: "34-36", waist: "28-30" },
                                    { size: "M", height: "168-175", weight: "60-70", chest: "36-38", waist: "30-32" },
                                    { size: "L", height: "175-182", weight: "70-80", chest: "38-40", waist: "32-34" },
                                    { size: "XL", height: "182-188", weight: "80-90", chest: "40-42", waist: "34-36" },
                                    { size: "XXL", height: "188-195", weight: "90-100", chest: "42-44", waist: "36-38" },
                                ].map((row, index) => (
                                    <tr
                                        key={index}
                                        className={`text-center ${index % 2 === 0 ? "bg-gray-700" : "bg-gray-400"
                                            }`}
                                    >
                                        <td className="border px-2 py-2 font-semibold">{row.size}</td>
                                        <td className="border px-2 py-2">{row.height}</td>
                                        <td className="border px-2 py-2">{row.weight}</td>
                                        <td className="border px-2 py-2">{row.chest}</td>
                                        <td className="border px-2 py-2">{row.waist}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <button
                            onClick={() => setShowSizeChart(false)}
                            className="w-full mt-5 bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}



            <div className="max-w-[1400px] mx-auto py-8 px-6 grid grid-cols-2 gap-10">

                {/* ---------------- LEFT SIDE IMAGE GALLERY ---------------- */}
                <div className="grid grid-cols-2 gap-4 sticky top-4 h-fit">
                    {[product.photo?.url, product.photo?.url, product.photo?.url, product.photo?.url].map(
                        (img, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                    src={img || "/placeholder.jpg"}
                                    alt="product"
                                    className="w-full h-[380px] object-cover hover:scale-105 transition"
                                />
                            </div>
                        )
                    )}
                </div>
                {/* <div className="sticky top-4 h-fit">
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={product.photo?.url || "/placeholder.jpg"}
                            alt="product"
                            className="w-full h-auto object-cover hover:scale-105 transition"
                        />
                    </div>
                </div> */}

                {/* ---------------- RIGHT SECTION ---------------- */}
                <div className="space-y-6">

                    {/* BRAND + NAME */}
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide uppercase drop-shadow-sm">
                            {product.name}
                        </h1>
                        <p className="text-lg text-gray-700 mt-1">
                            Brand:{" "}
                            <span className="font-semibold first-letter:uppercase text-gray-900">
                                {product.brand}
                            </span>
                        </p>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-2 text-sm">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold shadow">
                            {(3 + ((product.price % 18) / 10)).toFixed(1)} ★
                        </span>
                        <span className="text-gray-700 font-medium">
                            {100 + ((product.price * 1234) % 40000)} Ratings
                        </span>
                    </div>

                    <hr />

                    {/* PRICE */}
                    <div>
                        <div className="flex items-center gap-4">
                            <p className="text-4xl font-bold text-gray-900">₹{originalPrice}</p>
                            <p className="line-through text-gray-500 text-xl">₹{product.price}</p>
                            <p className="text-green-600 text-xl font-bold">
                                ({product.discount}% OFF)
                            </p>
                        </div>

                        {/* DELIVERY DATE */}
                        <p className="text-gray-700 text-sm mt-2 font-medium">
                            Delivery by <span className="font-semibold">{formattedDelivery}</span>
                        </p>

                        <p className="text-green-700 text-sm font-medium mt-1">
                            inclusive of all taxes
                        </p>
                    </div>

                    {/* SIZE SELECTOR */}
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-lg text-gray-800">SELECT SIZE</p>

                            <button
                                onClick={() => setShowSizeChart(true)}
                                className="text-pink-600 text-sm font-semibold hover:underline"
                            >
                                SIZE CHART
                            </button>
                        </div>

                        <div className="flex gap-3 mt-3">
                            {["S", "M", "L", "XL", "XXL"].map((size) => (
                                <button
                                    key={size}
                                    className="w-12 h-12 flex text-gray-800 items-center justify-center border border-gray-300
                                    rounded-full hover:border-pink-600 hover:text-pink-600
                                    transition font-semibold text-sm"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ADD TO BAG */}
                    <div className="flex gap-4">
                        <button className="w-1/2 bg-pink-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-pink-700 shadow-md">
                            ADD TO BAG
                        </button>

                        <button className="w-1/2 border border-gray-400 text-gray-400 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-sm">
                            WISHLIST
                        </button>
                    </div>

                    <hr />

                    {/* DELIVERY INFO */}
                    <div className="space-y-3">
                        <p className="text-lg font-semibold text-gray-800">DELIVERY OPTIONS</p>

                        <input
                            placeholder="Enter Pincode"
                            value={pincode}
                            onChange={handlePincode}
                            className="border rounded-lg p-2 w-48 text-sm text-black outline-pink-600"
                        />

                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>✓ Delivery by {formattedDelivery}</li>
                            <li>✓ Pay on delivery available</li>
                            <li>✓ Easy 7-day return & exchange</li>
                        </ul>
                    </div>

                    <hr />

                    {/* DESCRIPTION */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
                        <ul className="space-y-2">
                            {product.description?.map((item, index) => (
                                <li key={index} className="text-gray-700 text-sm leading-relaxed">
                                    <strong className="capitalize">
                                        {item.title}:
                                    </strong> <span className="capitalize">{item.value}</span>

                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ADD ADDRESS */}
                    <div>
                        <NavLink
                            to="/profile-page"
                            className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 shadow-md"
                        >
                            Add Address
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
