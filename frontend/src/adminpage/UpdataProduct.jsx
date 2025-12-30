import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axiosClient from "../utils/axiosClients";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

// Zod schema
const productSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    brand: z.string().min(1, "Brand is required"),
    category: z.string().min(1, "Category is required"),
    price: z.coerce.number().min(0, "Price must be non-negative"),
    discount: z.coerce.number().min(0, "Discount must be non-negative").optional(),
    stock: z.coerce.number().min(0, "Stock must be non-negative"),
    location: z.string().min(1, "Location is required"),
    photo: z.any().refine((file) => file?.[0], { message: "Photo is required" }),
    discriptiondetails: z
        .array(z.object({ input: z.string().optional(), output: z.string().optional() }))
        .optional(),
});

const UpdataProduct = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loding, setloding] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            discriptiondetails: [{ input: "", output: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "discriptiondetails",
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const { data } = await axiosClient.get(`product/get-product-of/${id}`);

                reset({
                    name: data.name,
                    brand: data.brand,
                    category: data.category,
                    price: data.price,
                    discount: data.discount || 0,
                    stock: data.stock,
                    location: data.location,
                    discriptiondetails: data.description?.map((d) => ({
                        input: d.title || "",
                        output: d.value || "",
                    })) || [{ input: "", output: "" }],
                });
            } catch (err) {
                setError("Failed to fetch product");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id, reset]);

    const onSubmit = async (data) => {
        setloding(true);
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("brand", data.brand);
            formData.append("category", data.category);
            formData.append("price", data.price);
            formData.append("discount", data.discount || 0);
            formData.append("stock", data.stock);
            formData.append("location", data.location);
            formData.append("photo", data.photo[0]);

            if (data.discriptiondetails) {
                const mapped = data.discriptiondetails.map(({ input, output }) => ({
                    title: input,
                    value: output,
                }));
                formData.append("description", JSON.stringify(mapped));
            }

            await axiosClient.put(`/product/update-product-details/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("Product updated successfully");
        } catch (err) {
            console.error(err);
            alert("Failed to update product");
        } finally {
            setloding(false);
        }
    };

    const { user } = useSelector((state) => state.auth);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-error shadow-lg my-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] text-white">

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-lg border-b border-white/10 shadow">
                <div className="flex items-center gap-3">
                    <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="Admin Avatar"
                        className="w-10 h-10 rounded-full border border-white/10 shadow"
                    />
                    <NavLink
                        to="/admin-panal"
                        className="text-lg font-semibold hover:text-blue-400 transition"
                    >
                        Admin Panel
                    </NavLink>
                </div>

                <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
                    Update Product
                </h1>

                <div className="text-right">
                    <p className="font-semibold">
                        Welcome <span className="uppercase text-blue-300">{user?.firstName}</span>
                    </p>
                    <p className="text-sm text-gray-300">{user?.emailId}</p>
                </div>
            </div>

            {/* FORM CONTAINER */}
            <div className="flex justify-center px-4 py-10 sm:px-8">
                <div className="w-full max-w-3xl bg-[#1a1f35]/70 backdrop-blur-xl rounded-2xl shadow-2xl p-10 border border-white/10">

                    <h2 className="text-2xl font-semibold mb-8 text-blue-300 tracking-wide">
                        Basic Information
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                        {/* NAME */}
                        <div>
                            <label className="block mb-1 font-medium">Product Name</label>
                            <input
                                {...register("name")}
                                className="w-full px-4 py-2 rounded-lg bg-[#1f2540] border border-white/10 text-white
                            focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <p className="text-red-500 text-sm">{errors.name?.message}</p>
                        </div>

                        {/* BRAND */}
                        <div>
                            <label className="block mb-1 font-medium">Brand</label>
                            <input
                                {...register("brand")}
                                className="w-full px-4 py-2 rounded-lg bg-[#1f2540] border border-white/10 text-white
                            focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="text-red-500 text-sm">{errors.brand?.message}</p>
                        </div>

                        {/* CATEGORY */}
                        <div>
                            <label className="block mb-1 font-medium">Category</label>
                            <select
                                {...register("category")}
                                className="w-full px-4 py-2 rounded-lg bg-[#1f2540] border border-white/10 text-white 
                            focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Category</option>

                                {/* MEN */}
                                <optgroup label="Men">
                                    <option value="men shirt">men shirt</option>
                                    <option value="men t-shirt">men t-shirt</option>
                                    <option value="men casual shirt">men casual shirt</option>
                                    <option value="men formal shirt">men formal shirt</option>
                                    <option value="men polo t-shirt">men polo t-shirt</option>
                                    <option value="men pant">men pant</option>
                                    <option value="men jeans">men jeans</option>
                                    <option value="men trousers">men trousers</option>
                                    <option value="men shorts">men shorts</option>
                                    <option value="men coat">men coat</option>
                                    <option value="men blazer">men blazer</option>
                                    <option value="men hoodie">men hoodie</option>
                                </optgroup>

                                {/* WOMEN */}
                                <optgroup label="Women">
                                    <option value="women top">women top</option>
                                    <option value="women shirt">women shirt</option>
                                    <option value="women kurti">women kurti</option>
                                    <option value="women kurta set">women kurta set</option>
                                    <option value="women saree">women saree</option>
                                    <option value="women lehenga">women lehenga</option>
                                    <option value="women dress">women dress</option>
                                    <option value="women gown">women gown</option>
                                    <option value="women t-shirt">women t-shirt</option>
                                    <option value="women jeans">women jeans</option>
                                    <option value="women pant">women pant</option>
                                    <option value="women skirt">women skirt</option>
                                    <option value="women ethnic wear">women ethnic wear</option>
                                    <option value="women winter wear">women winter wear</option>
                                </optgroup>

                                {/* KIDS */}
                                <optgroup label="Kids">
                                    <option value="kids t-shirt">kids t-shirt</option>
                                    <option value="kids shirt">kids shirt</option>
                                    <option value="kids frock">kids frock</option>
                                    <option value="kids shorts">kids shorts</option>
                                    <option value="kids pant">kids pant</option>
                                    <option value="kids ethnic wear">kids ethnic wear</option>
                                    <option value="kids hoodie">kids hoodie</option>
                                    <option value="kids winter wear">kids winter wear</option>
                                </optgroup>
                            </select>
                            <p className="text-red-500 text-sm">{errors.category?.message}</p>
                        </div>

                        {/* LOCATION */}
                        <div>
                            <label className="block mb-1 font-medium">Location</label>
                            <input
                                {...register("location")}
                                className="w-full px-4 py-2 rounded-lg bg-[#1f2540] border border-white/10 text-white
                            focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="text-red-500 text-sm">{errors.location?.message}</p>
                        </div>

                        {/* PRICE */}
                        <div>
                            <label className="block mb-1 font-medium">Price</label>
                            <input
                                type="number"
                                {...register("price")}
                                className="w-full px-4 py-2 rounded-lg bg-[#1f2540] border border-white/10 text-white"
                            />
                            <p className="text-red-500 text-sm">{errors.price?.message}</p>
                        </div>

                        {/* DISCOUNT */}
                        <div>
                            <label className="block mb-1 font-medium">Discount</label>
                            <input
                                type="number"
                                {...register("discount")}
                                className="w-full px-4 py-2 rounded-lg bg-[#1f2540] border border-white/10 text-white"
                            />
                            <p className="text-red-500 text-sm">{errors.discount?.message}</p>
                        </div>

                        {/* STOCK */}
                        <div>
                            <label className="block mb-1 font-medium">Stock</label>
                            <input
                                type="number"
                                {...register("stock")}
                                className="w-full px-4 py-2 rounded-lg bg-[#1f2540] border border-white/10 text-white"
                            />
                            <p className="text-red-500 text-sm">{errors.stock?.message}</p>
                        </div>

                        {/* IMAGE UPLOAD */}
                        <div>
                            <label className="block mb-1 font-medium">Product Image</label>
                            <input
                                type="file"
                                {...register("photo")}
                                className="w-full px-4 py-2 rounded-lg bg-[#1f2540] border border-white/10 text-white"
                            />
                            <p className="text-red-500 text-sm">{errors.photo?.message}</p>
                        </div>

                        {/* DESCRIPTION DETAILS */}
                        <div>
                            <h2 className="text-xl font-semibold mb-3 text-blue-300">Description Details</h2>

                            {fields.map((field, index) => (
                                <div
                                    key={field.id}
                                    className="mb-4 p-4 rounded-xl bg-white/5 border border-white/10 space-y-3"
                                >
                                    <input
                                        {...register(`discriptiondetails.${index}.input`)}
                                        placeholder="Title"
                                        className="w-full px-3 py-2 rounded bg-[#1f2540] border border-white/10 text-white"
                                    />

                                    <input
                                        {...register(`discriptiondetails.${index}.output`)}
                                        placeholder="Value"
                                        className="w-full px-3 py-2 rounded bg-[#1f2540] border border-white/10 text-white"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={() => append({ input: "", output: "" })}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
                            >
                                Add Description
                            </button>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                className="w-[50%] bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg transition"
                            >
                                {loding ? "Updating Product..." : "Update Product"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );

};

export default UpdataProduct;
