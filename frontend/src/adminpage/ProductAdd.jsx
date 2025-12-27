// import React from 'react'
// import axiosClient from '../utils/axiosClients';

// const ProductAdd = () => {
//     async function handlesubmit(productdata) {
//         const response = await axiosClient.post('/user/register', productdata);
//         alert("add successfully")
//     }
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors }
//     } = useForm({ resolver: zodResolver(signupSchema) });

//     return (
//         <div>
//             <form onClick={handlesubmit}>
//                 <input type="text" 
//                 placeholder='product name'
//                 {...register("name")}
//                 />
//             </form>
//         </div>
//     )
// }

// export default ProductAdd


import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axiosClient from "../utils/axiosClients";

const productSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    brand: z.string().min(1, "Brand is required"),
    category: z.string().min(1, "Category is required"),
    price: z.number({ invalid_type_error: "Price must be a number" }).min(0),
    stock: z.number({ invalid_type_error: "Stock must be a number" }).min(0),
    location: z.string().min(1, "Location is required"),
    photo: z
        .any()
        .refine((file) => file?.[0], { message: "Photo is required" }),
});

const ProductAdd = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(productSchema),
    });

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("brand", data.brand);
            formData.append("category", data.category);
            formData.append("price", data.price);
            formData.append("stock", data.stock);
            formData.append("location", data.location);
            formData.append("photo", data.photo[0]); // file upload

            const response = await axiosClient.post("/product/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Product added successfully!");
            reset();
        } catch (err) {
            console.error("Error:", err.response?.data || err.message);
            alert("Failed to add product");
        }
    };

    return (
        // <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
        //     <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        //         <input
        //             type="text"
        //             placeholder="Product Name"
        //             {...register("name")}
        //             className="w-full p-2 border rounded"
        //         />
        //         {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        //         <input
        //             type="text"
        //             placeholder="Brand"
        //             {...register("brand")}
        //             className="w-full p-2 border rounded"
        //         />
        //         {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}

        //         <input
        //             type="text"
        //             placeholder="Category"
        //             {...register("category")}
        //             className="w-full p-2 border rounded"
        //         />
        //         {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

        //         <input
        //             type="number"
        //             placeholder="Price"
        //             {...register("price", { valueAsNumber: true })}
        //             className="w-full p-2 border rounded"
        //         />
        //         {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

        //         <input
        //             type="number"
        //             placeholder="Stock"
        //             {...register("stock", { valueAsNumber: true })}
        //             className="w-full p-2 border rounded"
        //         />
        //         {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}

        //         <input
        //             type="text"
        //             placeholder="Location"
        //             {...register("location")}
        //             className="w-full p-2 border rounded"
        //         />
        //         {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}

        //         <input
        //             type="file"
        //             accept="image/*"
        //             {...register("photo")}
        //             className="w-full"
        //         />
        //         {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}

        //         <button
        //             type="submit"
        //             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        //         >
        //             Add Product
        //         </button>
        //     </form>
        // </div>
        <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-900 shadow rounded">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    {...register("name")}
                    className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                <input
                    type="text"
                    placeholder="Brand"
                    {...register("brand")}
                    className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
                />
                {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}

                <input
                    type="text"
                    placeholder="Category"
                    {...register("category")}
                    className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
                />
                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

                <input
                    type="number"
                    placeholder="Price"
                    {...register("price", { valueAsNumber: true })}
                    className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

                <input
                    type="number"
                    placeholder="Stock"
                    {...register("stock", { valueAsNumber: true })}
                    className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
                />
                {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}

                <input
                    type="text"
                    placeholder="Location"
                    {...register("location")}
                    className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
                />
                {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}

                <input
                    type="file"
                    accept="image/*"
                    {...register("photo")}
                    className="w-full text-gray-700 dark:text-white"
                />
                {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default ProductAdd;
