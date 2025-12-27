// // import React, { useEffect, useState } from 'react';
// // import axiosClient from '../utils/axiosClients';
// // import {
// //     BarChart, Bar, XAxis, YAxis, Tooltip,
// //     ResponsiveContainer, CartesianGrid, LabelList,
// // } from 'recharts';

// // const months = [
// //     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
// //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
// // ];

// // const MonthlySalesBar = () => {
// //     const [monthlyData, setMonthlyData] = useState([]);

// //     useEffect(() => {
// //         fetchSalesData();
// //     }, []);

// //     const fetchSalesData = async () => {
// //         try {
// //             const res = await axiosClient.get('/product/allproduct');
// //             const products = res.data;
// //             console.log("heeeeeeeeee");
// //             console.log(products);
// //             console.log("my love ayushi");




// //             const salesCount = Array(12).fill(0);
// //             products.forEach(product => {
// //                 const date = new Date(product.createdAt);
// //                 const month = date.getMonth();
// //                 salesCount[month]++;
// //             });

// //             const chartData = months.map((name, index) => ({
// //                 name,
// //                 count: salesCount[index],
// //             }));

// //             setMonthlyData(chartData);
// //         } catch (error) {
// //             console.error('Error fetching product data:', error);
// //         }
// //     };

// //     return (
// //         <div className="bg-[#0f172a] rounded-2xl shadow-lg p-6 w-full max-w-5xl mx-auto">
// //             <h2 className="text-2xl font-bold mb-6 text-center text-white">
// //                 Monthly Sales Overview
// //             </h2>
// //             <ResponsiveContainer width="100%" height={300}>
// //                 <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
// //                     <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
// //                     <XAxis dataKey="name" stroke="#94a3b8" />
// //                     <YAxis allowDecimals={false} stroke="#94a3b8" />
// //                     <Tooltip
// //                         contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }}
// //                         labelStyle={{ color: '#f1f5f9' }}
// //                         itemStyle={{ color: '#38bdf8' }}
// //                     />
// //                     <Bar dataKey="count" fill="url(#colorUv)" radius={[6, 6, 0, 0]}>
// //                         <LabelList dataKey="count" position="top" fill="#f1f5f9" />
// //                     </Bar>
// //                     <defs>
// //                         <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
// //                             <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
// //                             <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.7} />
// //                         </linearGradient>
// //                     </defs>
// //                 </BarChart>
// //             </ResponsiveContainer>
// //         </div>
// //     );
// // };

// // export default MonthlySalesBar;
// import React, { useEffect, useState } from 'react';
// import axiosClient from '../utils/axiosClients';
// import {
//     BarChart, Bar, XAxis, YAxis, Tooltip,
//     ResponsiveContainer, CartesianGrid, LabelList,
// } from 'recharts';

// const months = [
//     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
// ];

// const MonthlySalesBar = () => {
//     const [monthlyData, setMonthlyData] = useState([]);

//     useEffect(() => {
//         fetchSalesData();
//     }, []);

//     const fetchSalesData = async () => {
//         try {
//             const res = await axiosClient.get('/product/allproduct');
//             const products = res.data;
//             console.log("heeeeeeeeee");
//             console.log(products);
//             console.log("my love ayushi");




//             const salesCount = Array(12).fill(0);
//             products.forEach(product => {
//                 const date = new Date(product.createdAt);
//                 const month = date.getMonth();
//                 salesCount[month]++;
//             });

//             const chartData = months.map((name, index) => ({
//                 name,
//                 count: salesCount[index],
//             }));

//             setMonthlyData(chartData);
//         } catch (error) {
//             console.error('Error fetching product data:', error);
//         }
//     };

//     return (
//         <div className="bg-gradient-to-br from-[#0f172a] via-[#1a2540] to-[#0f172a] 
//     rounded-2xl shadow-2xl p-8 w-full max-w-5xl mx-auto border border-white/10 
//     backdrop-blur-xl">

//             <h2 className="text-2xl font-bold mb-6 text-center text-white tracking-wide">
//                 Monthly Sales Overview
//             </h2>

//             <ResponsiveContainer width="100%" height={320}>
//                 <BarChart
//                     data={monthlyData}
//                     margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

//                     <XAxis
//                         dataKey="name"
//                         stroke="#cbd5e1"
//                         tick={{ fontSize: 12 }}
//                     />

//                     <YAxis
//                         stroke="#cbd5e1"
//                         allowDecimals={false}
//                         tick={{ fontSize: 12 }}
//                     />

//                     <Tooltip
//                         contentStyle={{
//                             backgroundColor: 'rgba(15,23,42,0.9)',
//                             borderRadius: '8px',
//                             border: '1px solid #334155',
//                             color: "#f1f5f9"
//                         }}
//                         labelStyle={{ color: '#ffffff' }}
//                         itemStyle={{ color: '#38bdf8' }}
//                     />

//                     <Bar
//                         dataKey="count"
//                         fill="url(#colorUv)"
//                         radius={[8, 8, 0, 0]}
//                     >
//                         <LabelList
//                             dataKey="count"
//                             position="top"
//                             fill="#e2e8f0"
//                             fontSize={12}
//                         />
//                     </Bar>

//                     {/* GRADIENT FILL */}
//                     <defs>
//                         <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.95} />
//                             <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.8} />
//                         </linearGradient>
//                     </defs>

//                 </BarChart>
//             </ResponsiveContainer>
//         </div>
//     );

// };

// export default MonthlySalesBar;
import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClients';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip,
    ResponsiveContainer, CartesianGrid, LabelList,
} from 'recharts';

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

// 🔥 Unified monthly sale calculation (same as DashboardStats)
const calculateMonthlySales = (products) => {
    const salesCount = Array(12).fill(0);

    products.forEach(product => {
        const date = new Date(product.createdAt);
        const month = date.getMonth();
        salesCount[month] += 1; // 1 sale per created product
    });

    return salesCount;
};

const MonthlySalesBar = () => {
    const [monthlyData, setMonthlyData] = useState([]);

    useEffect(() => {
        fetchSalesData();
    }, []);

    const fetchSalesData = async () => {
        try {
            const res = await axiosClient.get('/product/allproduct');
            const products = res.data;

            // unified monthly sales
            const monthlySales = calculateMonthlySales(products);

            const chartData = months.map((name, index) => ({
                name,
                count: monthlySales[index],
            }));

            setMonthlyData(chartData);

        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    return (
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1a2540] to-[#0f172a]
            rounded-2xl shadow-2xl p-8 w-full max-w-5xl mx-auto border border-white/10
            backdrop-blur-xl">

            <h2 className="text-2xl font-bold mb-6 text-center text-white tracking-wide">
                Monthly Sales Overview
            </h2>

            <ResponsiveContainer width="100%" height={320}>
                <BarChart
                    data={monthlyData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >

                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

                    <XAxis
                        dataKey="name"
                        stroke="#cbd5e1"
                        tick={{ fontSize: 12 }}
                    />

                    <YAxis
                        stroke="#cbd5e1"
                        allowDecimals={false}
                        tick={{ fontSize: 12 }}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(15,23,42,0.9)',
                            borderRadius: '8px',
                            border: '1px solid #334155',
                            color: "#f1f5f9"
                        }}
                        labelStyle={{ color: '#ffffff' }}
                        itemStyle={{ color: '#38bdf8' }}
                    />

                    {/* Bar */}
                    <Bar
                        dataKey="count"
                        fill="url(#colorUv)"
                        radius={[8, 8, 0, 0]}
                    >
                        <LabelList
                            dataKey="count"
                            position="top"
                            fill="#e2e8f0"
                            fontSize={12}
                        />
                    </Bar>

                    {/* Gradient */}
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.95} />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.8} />
                        </linearGradient>
                    </defs>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MonthlySalesBar;
