// import React, { useState } from "react";

// const DeliveryForm = () => {
//     const [form, setForm] = useState({
//         name: "",
//         phone: "",
//         altPhone: "",
//         pincode: "",
//         state: "",
//         city: "",
//         house: "",
//         area: "",
//         landmark: "",
//         type: "home",
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form submitted:", form);
//         // You can post this to your API endpoint here
//     };

//     return (
//         <div className=" mx-auto mt-6 p-4 shadow-lg rounded-md w-full">
//             <h2 className="text-xl font-bold mb-4">Add delivery address</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                     name="name"
//                     type="text"
//                     placeholder="Full Name (Required)"
//                     required
//                     value={form.name}
//                     onChange={handleChange}
//                     className="w-full border px-4 py-2 rounded"
//                 />

//                 <input
//                     name="phone"
//                     type="tel"
//                     placeholder="Phone number (Required)"
//                     required
//                     value={form.phone}
//                     onChange={handleChange}
//                     className="w-full border px-4 py-2 rounded"
//                 />

//                 <input
//                     name="altPhone"
//                     type="tel"
//                     placeholder="Alternate Phone Number"
//                     value={form.altPhone}
//                     onChange={handleChange}
//                     className="w-full border px-4 py-2 rounded"
//                 />

//                 <div className="text-sm text-red-600 font-medium -mt-2">
//                     Please provide location permission to the app
//                 </div>

//                 <div className="flex items-center gap-2">
//                     <input
//                         name="pincode"
//                         type="text"
//                         placeholder="Pincode (Required)"
//                         required
//                         value={form.pincode}
//                         onChange={handleChange}
//                         className="w-1/2 border px-4 py-2 rounded"
//                     />
//                     <button
//                         type="button"
//                         className="w-1/2 bg-blue-500 text-white py-2 px-3 rounded"
//                     >
//                         📍 Use my location
//                     </button>
//                 </div>

//                 <div className="flex items-center gap-2">
//                     <input
//                         name="state"
//                         type="text"
//                         placeholder="State (Required)"
//                         required
//                         value={form.state}
//                         onChange={handleChange}
//                         className="w-1/2 border px-4 py-2 rounded"
//                     />
//                     <input
//                         name="city"
//                         type="text"
//                         placeholder="City (Required)"
//                         required
//                         value={form.city}
//                         onChange={handleChange}
//                         className="w-1/2 border px-4 py-2 rounded"
//                     />
//                 </div>

//                 <input
//                     name="house"
//                     type="text"
//                     placeholder="House No., Building Name (Required)"
//                     required
//                     value={form.house}
//                     onChange={handleChange}
//                     className="w-full border px-4 py-2 rounded"
//                 />

//                 <input
//                     name="area"
//                     type="text"
//                     placeholder="Road name, Area, Colony (Required)"
//                     required
//                     value={form.area}
//                     onChange={handleChange}
//                     className="w-full border px-4 py-2 rounded"
//                 />

//                 <input
//                     name="landmark"
//                     type="text"
//                     placeholder="Add Nearby Famous Shop/Mall/Landmark"
//                     value={form.landmark}
//                     onChange={handleChange}
//                     className="w-full border px-4 py-2 rounded"
//                 />

//                 {/* Type of address */}
//                 <div className="mt-2">
//                     <p className="text-sm font-semibold mb-1">Type of address</p>
//                     <div className="flex gap-4">
//                         <label className="flex items-center gap-2">
//                             <input
//                                 type="radio"
//                                 name="type"
//                                 value="home"
//                                 checked={form.type === "home"}
//                                 onChange={handleChange}
//                             />
//                             Home
//                         </label>
//                         <label className="flex items-center gap-2">
//                             <input
//                                 type="radio"
//                                 name="type"
//                                 value="work"
//                                 checked={form.type === "work"}
//                                 onChange={handleChange}
//                             />
//                             Work
//                         </label>
//                     </div>
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
//                 >
//                     Save Address
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default DeliveryForm;
import React, { useState } from "react";

const DeliveryForm = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        altPhone: "",
        pincode: "",
        state: "",
        city: "",
        house: "",
        area: "",
        landmark: "",
        type: "home",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
    };

    return (
        <div className="bg-white shadow-xl rounded-xl max-w-xl mx-auto p-6 mt-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-5 text-gray-800 border-l-4 border-orange-500 pl-3">
                Add Delivery Address
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">

                {/* FULL NAME */}
                <input
                    name="name"
                    type="text"
                    placeholder="Full Name (Required)"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />

                {/* PHONE */}
                <div className="flex gap-3">
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number (Required)"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="flex-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                    />

                    <input
                        name="altPhone"
                        type="tel"
                        placeholder="Alternate Number"
                        value={form.altPhone}
                        onChange={handleChange}
                        className="flex-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                </div>

                <p className="text-sm text-red-600 font-medium -mt-2">
                    Please provide location permission to the app
                </p>

                {/* PINCODE + LOCATION BUTTON */}
                <div className="flex gap-3">
                    <input
                        name="pincode"
                        type="text"
                        placeholder="Pincode"
                        required
                        maxLength={6}
                        value={form.pincode}
                        onChange={(e) => {
                            if (/^\d{0,6}$/.test(e.target.value)) handleChange(e);
                        }}
                        className="flex-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                    />

                    <button
                        type="button"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                    >
                        📍 Use my location
                    </button>
                </div>

                {/* STATE + CITY */}
                <div className="flex gap-3">
                    <input
                        name="state"
                        type="text"
                        placeholder="State (Required)"
                        required
                        value={form.state}
                        onChange={handleChange}
                        className="w-1/2 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                    />

                    <input
                        name="city"
                        type="text"
                        placeholder="City (Required)"
                        required
                        value={form.city}
                        onChange={handleChange}
                        className="w-1/2 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                </div>

                {/* HOUSE */}
                <input
                    name="house"
                    type="text"
                    placeholder="House No., Building Name"
                    required
                    value={form.house}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />

                {/* AREA */}
                <input
                    name="area"
                    type="text"
                    placeholder="Road name, Area, Colony"
                    required
                    value={form.area}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />

                {/* LANDMARK */}
                <input
                    name="landmark"
                    type="text"
                    placeholder="Nearby famous shop/mall/landmark"
                    value={form.landmark}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />

                {/* TYPE OF ADDRESS */}
                <div className="mt-1">
                    <p className="text-sm font-semibold mb-1">Type of address</p>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="type"
                                value="home"
                                checked={form.type === "home"}
                                onChange={handleChange}
                                className="accent-orange-500"
                            />
                            Home
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="type"
                                value="work"
                                checked={form.type === "work"}
                                onChange={handleChange}
                                className="accent-orange-500"
                            />
                            Work
                        </label>
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg mt-3 shadow-md transition"
                >
                    Save Address
                </button>

            </form>
        </div>
    );
};

export default DeliveryForm;
