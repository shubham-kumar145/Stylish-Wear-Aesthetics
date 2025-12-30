// import React, { useEffect, useState } from 'react';
// import axiosClient from '../utils/axiosClients';
// import {
//     PieChart,
//     Pie,
//     Cell,
//     Legend,
//     Tooltip,
//     ResponsiveContainer,
// } from 'recharts';

// const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f', '#d0ed57', '#a28dff'];

// const CategoryPieChart = () => {
//     const [categoryData, setCategoryData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchCategoryData();
//     }, []);

//     const fetchCategoryData = async () => {
//         try {
//             const res = await axiosClient.get('/product/allproduct');
//             const products = res.data;

//             const countMap = {};
//             for (let product of products) {
//                 const category = product.category?.toLowerCase() || 'unknown';
//                 countMap[category] = (countMap[category] || 0) + 1;
//             }

//             const chartData = Object.entries(countMap).map(([name, value]) => ({
//                 name: name.charAt(0).toUpperCase() + name.slice(1),
//                 value,
//             }));

//             setCategoryData(chartData);
//         } catch (err) {
//             console.error('Error fetching product data', err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <div className="bg-white dark:bg-base-200 rounded-2xl shadow-md p-6 w-full  mx-auto">
//                 <h2 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
//                     Products by Category
//                 </h2>

//                 {loading ? (
//                     <div className="text-center text-gray-400">Loading chart...</div>
//                 ) : categoryData.length === 0 ? (
//                     <div className="text-center text-red-400">No category data available.</div>
//                 ) : (
//                     <ResponsiveContainer width="100%" height={300}>
//                         <PieChart>
//                             <Pie
//                                 data={categoryData}
//                                 dataKey="value"
//                                 nameKey="name"
//                                 cx="50%"
//                                 cy="50%"
//                                 outerRadius={100}
//                                 innerRadius={50}
//                                 label
//                             >
//                                 {categoryData.map((entry, index) => (
//                                     <Cell
//                                         key={`cell-${index}`}
//                                         fill={COLORS[index % COLORS.length]}
//                                     />
//                                 ))}
//                             </Pie>
//                             <Tooltip
//                                 contentStyle={{
//                                     backgroundColor: '#1e293b',
//                                     borderRadius: '0.5rem',
//                                     border: 'none',
//                                 }}
//                                 labelStyle={{ color: '#94a3b8' }}
//                             />
//                             <Legend verticalAlign="bottom" height={36} />
//                         </PieChart>
//                     </ResponsiveContainer>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CategoryPieChart;


import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClients';
import {
    PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer,
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f', '#d0ed57', '#a28dff'];
const KidsCategoryPieChart = () => {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetchCategoryData();
    }, []);

    const fetchCategoryData = async () => {
        const res = await axiosClient.get('/product/allproduct');
        const products = res.data;

        const kidsProducts = products.filter(p => p.category?.toLowerCase().includes("kids"));
        const countMap = {};

        kidsProducts.forEach(product => {
            const category = product.category?.toLowerCase() || 'unknown';
            countMap[category] = (countMap[category] || 0) + 1;
        });

        const chartData = Object.entries(countMap).map(([name, value]) => ({
            name: name.charAt(0).toUpperCase() + name.slice(1),
            value,
        }));

        setCategoryData(chartData);
    };

    return (
        <div className="bg-white dark:bg-base-200 rounded-2xl shadow-md p-6 w-full">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
                Kids Category Distribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                        {categoryData.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default KidsCategoryPieChart;
