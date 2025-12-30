// import React, { useEffect, useState } from "react";
// import axiosClient from "../utils/axiosClients";
// import {
//     AreaChart,
//     Area,
//     ResponsiveContainer,
//     Tooltip,
//     XAxis,
//     YAxis,
// } from "recharts";

// const DashboardStats = () => {
//     const [totalSales, setTotalSales] = useState(0);
//     const [totalAccounts, setTotalAccounts] = useState(0);
//     const [salesData, setSalesData] = useState([]);
//     const [accountData, setAccountData] = useState([]);

//     useEffect(() => {
//         fetchStats();
//     }, []);

//     const fetchStats = async () => {
//         try {
//             const [userRes, productRes] = await Promise.all([
//                 axiosClient.get("/user/get-all-member"),
//                 axiosClient.get("/product/allproduct"),
//             ]);

//             const users = userRes.data;
//             const products = productRes.data;

//             setTotalAccounts(users.length);

//             const total = products.reduce((acc, p) => acc + (p.price * (p.stock || 0)), 0);
//             setTotalSales(total);

//             const trend = Array.from({ length: 7 }).map((_, i) => ({
//                 day: `Day ${i + 1}`,
//                 value: Math.floor(Math.random() * 1000) + 100,
//             }));

//             setSalesData(trend);
//             setAccountData(trend.map(d => ({ ...d, value: d.value + 300 })));
//         } catch (err) {
//             console.error("Error fetching dashboard stats:", err);
//         }
//     };

//     const StatCard = ({ title, value, data, color, gradientId, delta }) => (
//         <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 
//         rounded-2xl p-6 shadow-xl w-full text-white flex flex-col justify-between 
//         transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-[#243043]">

//             {/* Top Row */}
//             <div className="flex justify-between items-start mb-3">
//                 <div className="text-3xl font-bold tracking-tight">
//                     {title === "Total Sales" ? `$${value.toLocaleString()}` : value}
//                 </div>

//                 <div
//                     className={`text-xs px-3 py-1 rounded-full font-semibold shadow-md 
//                 ${delta > 0 ? "bg-green-600/80" : "bg-red-600/80"}`}
//                 >
//                     {delta > 0 ? "↑" : "↓"} {Math.abs(delta)}%
//                 </div>
//             </div>

//             {/* Title */}
//             <p className="text-sm text-gray-400 mb-4 tracking-wide font-medium">{title}</p>

//             {/* Chart */}
//             <div className="h-[110px] bg-[#0f172a]/40 rounded-xl p-1 border border-white/5">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={data}>
//                         <defs>
//                             <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
//                                 <stop offset="5%" stopColor={color} stopOpacity={0.8} />
//                                 <stop offset="95%" stopColor={color} stopOpacity={0} />
//                             </linearGradient>
//                         </defs>
//                         <Area
//                             type="monotone"
//                             dataKey="value"
//                             stroke={color}
//                             strokeWidth={2}
//                             fillOpacity={1}
//                             fill={`url(#${gradientId})`}
//                         />
//                         <Tooltip
//                             contentStyle={{
//                                 backgroundColor: "#1e293b",
//                                 borderRadius: "0.5rem",
//                                 border: "none",
//                                 color: "white",
//                             }}
//                             labelStyle={{ color: "#94a3b8" }}
//                         />
//                         <XAxis dataKey="day" hide />
//                         <YAxis hide />
//                     </AreaChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
//         px-4 max-w-7xl mx-auto my-10">

//             <StatCard
//                 title="Total Sales"
//                 value={totalSales}
//                 data={salesData}
//                 color="#a855f7"
//                 gradientId="salesGradient"
//                 delta={-8.6}
//             />

//             <StatCard
//                 title="Total Accounts"
//                 value={totalAccounts}
//                 data={accountData}
//                 color="#facc15"
//                 gradientId="accountsGradient"
//                 delta={23.7}
//             />

//             <StatCard
//                 title="Weekly Sales"
//                 value={69452}
//                 data={salesData.map(d => ({ ...d, value: d.value - 200 }))}
//                 color="#0ea5e9"
//                 gradientId="weeklySalesGradient"
//                 delta={-8.6}
//             />
//         </div>
//     );
// }

// export default DashboardStats;


import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClients";
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const DashboardStats = () => {
    const [totalSales, setTotalSales] = useState(0);
    const [totalAccounts, setTotalAccounts] = useState(0);
    const [salesData, setSalesData] = useState([]);
    const [accountData, setAccountData] = useState([]);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const [userRes, productRes] = await Promise.all([
                axiosClient.get("/user/get-all-member"),
                axiosClient.get("/product/allproduct"),
            ]);

            const users = userRes.data;
            const products = productRes.data;

            setTotalAccounts(users.length);

            // Total Sales = Total Created Products
            setTotalSales(products.length);

            // Unified Monthly Sales
            const monthly = calculateMonthlySales(products);

            // Take last 7 months for weekly trend
            const last7 = monthly.slice(-7);

            const salesTrend = last7.map((value, index) => ({
                day: `M${index + 1}`,
                value,
            }));

            // Account trend (realistic)
            const accountTrend = Array.from({ length: 7 }).map((_, i) => ({
                day: `M${i + 1}`,
                value: Math.floor(users.length / 7) * (i + 1),
            }));

            setSalesData(salesTrend);
            setAccountData(accountTrend);

        } catch (err) {
            console.error("Error fetching dashboard stats:", err);
        }
    };

    const calculateMonthlySales = (products) => {
        const salesCount = Array(12).fill(0);
        products.forEach(product => {
            const date = new Date(product.createdAt);
            const month = date.getMonth();
            salesCount[month] += 1;
        });
        return salesCount;
    };

    const StatCard = ({ title, value, data, color, gradientId }) => (
        <div className="bg-[#1e293b]/70 backdrop-blur-xl border border-white/10 
            rounded-2xl p-6 shadow-xl w-full flex flex-col justify-between 
            transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 
            hover:bg-[#243043]/90">
            
            <h3 className="text-3xl font-bold tracking-tight text-white">
                {value}
            </h3>
            <p className="text-sm text-gray-400 mb-3">{title}</p>

            <div className="h-[110px] bg-[#0f172a]/60 rounded-xl p-2 border border-white/5">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={color} stopOpacity={0.9} />
                                <stop offset="100%" stopColor={color} stopOpacity={0.1} />
                            </linearGradient>
                        </defs>

                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            strokeWidth={2.5}
                            fillOpacity={1}
                            fill={`url(#${gradientId})`}
                            animationDuration={1200}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1e293b",
                                borderRadius: "10px",
                                border: "1px solid #334155",
                                color: "white",
                            }}
                        />

                        <XAxis dataKey="day" hide />
                        <YAxis hide />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto my-10">
            <StatCard
                title="Total Sales"
                value={totalSales}
                data={salesData}
                color="#a855f7"
                gradientId="salesGradient"
            />

            <StatCard
                title="Total Accounts"
                value={totalAccounts}
                data={accountData}
                color="#facc15"
                gradientId="accountsGradient"
            />

            <StatCard
                title="Weekly Sales Trend"
                value={salesData.reduce((a, b) => a + b.value, 0)}
                data={salesData}
                color="#0ea5e9"
                gradientId="weeklySalesGradient"
            />
        </div>
    );
};

export default DashboardStats;
