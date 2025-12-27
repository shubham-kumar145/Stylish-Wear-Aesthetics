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
