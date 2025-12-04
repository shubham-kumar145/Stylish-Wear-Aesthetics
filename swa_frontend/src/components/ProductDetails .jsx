import React, { useEffect, useState } from "react";
import axios from "axios";
import axiosClient from "../utils/axiosClients";

const ProductDetails = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(async () => {
        const { data } = await axiosClient.get(`product/get-product-of/${productId}`);
        setProduct(data)
        // axios
        //     .get(/api/product / ${ productId })
        //     .then((res) => setProduct(res.data))
        //     .catch((err) => console.error("Failed to fetch product", err));
    }, [productId]);

    if (!product) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    const originalPrice = Math.round(product.price / (1 - product.discount / 100));

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Left - Image */}
            <div className="w-2/5 bg-gray-100 flex items-center justify-center border-r sticky top-0 h-full">
                <img
                    src={product.photo?.url || "/placeholder.jpg"}
                    alt={product.name}
                    className="max-h-[90%] max-w-[90%] object-contain"
                />
            </div>

            {/* Right - Scrollable Details */}
            <div className="w-3/5 overflow-y-auto p-8 space-y-6">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-xl text-gray-600">Brand: {product.brand}</p>

                <div className="text-2xl text-red-600 font-semibold">
                    ₹{product.price}
                    <span className="text-gray-500 line-through ml-4 text-lg">
                        ₹{originalPrice}
                    </span>
                    <span className="ml-2 text-green-600">({product.discount}% OFF)</span>
                </div>

                <p className="font-semibold mt-4">Stock: <span className="text-gray-700">{product.stock}</span></p>
                <p className="text-gray-500">Location: {product.location}</p>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {product.description.map((item, index) => (
                            <li key={index}>
                                <strong className="capitalize">
                                    {item.title}:
                                </strong> {item.value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;