
import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClients';
import {
    PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer,
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f', '#d0ed57', '#a28dff'];



const WomenCategoryPieChart = () => {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetchCategoryData();
    }, []);

    const fetchCategoryData = async () => {
        const res = await axiosClient.get('/product/allproduct');
        const products = res.data;

        const womenProducts = products.filter(p => p.category?.toLowerCase().includes("women"));
        const countMap = {};

        womenProducts.forEach(product => {
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
                Women Category Distribution
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

export default WomenCategoryPieChart;
