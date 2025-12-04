import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClients'
import UserRoleStats from '../adminpanalpage/UserRoleStats ';
import DashboardStats from '../adminpanalpage/DashboardStats ';
import KidsCategoryPieChart from '../adminpanalpage/KidsCategoryPieChart';
import MonthlySalesBar from '../adminpanalpage/MonthlySalesBar ';
import WomenCategoryPieChart from '../adminpanalpage/WomenCategoryPieChart';
import MenCategoryPieChart from '../adminpanalpage/MenCategoryPieChart';

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useSelector((state) => state.auth);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        fetchMember();
    }, []);

    const fetchMember = async () => {
        try {
            setLoading(true);
            const { data } = await axiosClient.get('/user/get-all-member');
            console.log(data);

            setProducts(data);
        } catch (err) {
            setError('Failed to fetch products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

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
        <div className="shadow-md">
            <nav className="h-[10vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-between px-6 sm:px-8 md:px-12 text-white">
                <div className='flex gap-2 justify-center items-center'>

                    <div className="sm:hidden">
                        <button
                            className="text-white text-xl focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            ☰ Menu
                        </button>

                        {isMobileMenuOpen && (
                            <div className="mt-2 flex flex-col gap-3 bg-gray-900 p-4 rounded shadow-lg">
                                <NavLink
                                    to="/add-product"
                                    className="text-white hover:text-blue-400 transition"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    ➕ Add Product
                                </NavLink>
                                <NavLink
                                    to="/update-page"
                                    className="text-white hover:text-blue-400 transition"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    🔄 Update Product
                                </NavLink>
                                <NavLink
                                    to="/delete-product"
                                    className="text-white hover:text-red-400 transition"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    ❌ Delete Product
                                </NavLink>
                                <NavLink
                                    to="/view-member"
                                    className="text-white hover:text-blue-400 transition"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    👥 View Member
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* Home Link */}
                    <div>
                        <NavLink
                            to="/"
                            className="font-semibold hover:text-blue-400 transition duration-200"
                        >
                            Home
                        </NavLink>
                    </div>
                </div>

                {/* Center Text */}
                <div className="hidden sm:block text-lg sm:text-xl font-bold tracking-wide text-center">
                    Admin Panel
                </div>

                {/* User Info */}
                <div className="text-right text-sm sm:text-base leading-tight">
                    <p className="font-medium truncate max-w-[150px] sm:max-w-xs">
                        Welcome, {user?.firstName || 'Admin'}
                    </p>
                    <p className="text-gray-300 truncate max-w-[150px] sm:max-w-xs">
                        {user?.emailId || ''}
                    </p>
                </div>

            </nav>

            <div className="h-[90vh] flex overflow-hidden bg-gray-50 dark:bg-[#0f172a]">


                {/* <aside className="w-[20%] min-w-[200px] max-w-[300px] bg-white dark:bg-black/20 p-6 border-r border-gray-200 dark:border-gray-700 hidden sm:flex flex-col gap-6 overflow-y-auto scrollbar-custom  shadow-md">
                    <NavLink
                        to="/add-product"
                        className="font-medium text-gray-700 dark:text-white hover:text-blue-500 transition duration-200 ease-in-out"
                    >
                        ➕ Add Product
                    </NavLink>
                    <NavLink
                        to="/update-page"
                        className="font-medium text-gray-700 dark:text-white hover:text-blue-500 transition duration-200 ease-in-out"
                    >
                        🔄 Update Product
                    </NavLink>
                    <NavLink
                        to="/delete-product"
                        className="font-medium text-gray-700 dark:text-white hover:text-red-500 transition duration-200 ease-in-out"
                    >
                        ❌ Delete Product
                    </NavLink>
                    <NavLink
                        to="/view-member"
                        className="font-medium text-gray-700 dark:text-white hover:text-blue-500 transition duration-200 ease-in-out"
                    >
                        👥 View Member
                    </NavLink>
                </aside> */}
                <aside className="w-[20%] min-w-[200px] bg-[#0b132b] border-r border-gray-800 p-6 text-white hidden sm:flex flex-col gap-6 shadow-lg">
                    <NavLink to="/add-product" className="hover:text-blue-400">➕ Add Product</NavLink>
                    <NavLink to="/update-page" className="hover:text-blue-400">🔄 Update Product</NavLink>
                    <NavLink to="/delete-product" className="hover:text-red-400">❌ Delete Product</NavLink>
                    <NavLink to="/view-member" className="hover:text-blue-400">👥 View Member</NavLink>
                </aside>

                {/* Main Content */}
                <main className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
                    {/* Role Overview */}
                    <section className="w-full p-6 bg-white dark:bg-[#0f172a] border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Role Overview</h2>
                        <UserRoleStats />
                    </section>

                    {/* Dashboard Stats */}
                    <section className="bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white px-6 py-6 border-b border-gray-200 dark:border-gray-700">
                        <h1 className="text-2xl font-semibold mb-4 text-center">Dashboard</h1>
                        <DashboardStats />
                    </section>

                    {/* Pie Chart */}
                    {/* <section className="w-full p-6 bg-gray-100 dark:bg-[#0f172a] border-b border-gray-200 dark:border-gray-700">
                        <CategoryPieChart />
                    </section> */}
                    <section className="w-full p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <MenCategoryPieChart />
                        <WomenCategoryPieChart />
                        <KidsCategoryPieChart />
                    </section>

                    {/* Bar Chart */}
                    <section className="p-6 bg-gray-100 dark:bg-[#0f172a] min-h-[400px]">
                        <MonthlySalesBar />
                    </section>
                </main>
            </div>

        </div>

    )
}

export default AdminPage





{/* Sidebar */ }
{/* <aside className="w-[20%] min-w-[200px] bg-white dark:bg-black/20 p-4 border-r border-gray-200 dark:border-gray-700 hidden sm:flex flex-col gap-4 overflow-y-auto h-[90vh] scrollbar-custom">
                    <NavLink to="/add-product" className="font-medium text-gray-800 dark:text-white hover:text-blue-500 transition">
                        Add Product
                    </NavLink>
                    <NavLink to="/update-product" className="font-medium text-gray-800 dark:text-white hover:text-blue-500 transition">
                        Update Product
                    </NavLink>
                    <NavLink to="/delete-product" className="font-medium text-gray-800 dark:text-white hover:text-blue-500 transition">
                        Delete Product
                    </NavLink>
                    <NavLink to="/view-member" className="font-medium text-gray-800 dark:text-white hover:text-blue-500 transition">
                        View Member
                    </NavLink>
                </aside> */}