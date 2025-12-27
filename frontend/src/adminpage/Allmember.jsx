// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import axiosClient from '../utils/axiosClients';

// const Allmember = () => {
//     const [member, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [memberrole, setmemberrole] = useState('');
//     const { user } = useSelector((state) => state.auth);

//     const fetchMember = async () => {
//         try {
//             setLoading(true);
//             const endpoint = memberrole
//                 ? `/admin/get-all-${memberrole}`
//                 : '/user/get-all-member';
//             const { data } = await axiosClient.get(endpoint);
//             setProducts(data);
//         } catch (err) {
//             setError('Failed to fetch members');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchMember();
//     }, [memberrole]);

//     const handleDelete = async (memberId) => {
//         try {
//             await axiosClient.delete(`/admin/delete-member/${memberId}`);
//             alert('Deleted successfully');
//             fetchMember(); // Refresh list
//         } catch (err) {
//             setError('Failed to delete member');
//             console.error(err);
//         }
//     };

//     const filterdata = member;

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-64">
//                 <span className="loading loading-spinner loading-lg"></span>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="alert alert-error shadow-lg my-4">
//                 <div>
//                     <span>{error}</span>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-[#111827] text-white px-6 py-8">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
//                 <NavLink
//                     to="/admin-panal"
//                     className="text-lg font-semibold text-blue-400 hover:text-blue-500 transition"
//                 >
//                     Admin Panel
//                 </NavLink>
//                 <h1 className="text-2xl font-bold uppercase text-white">All Members</h1>
//                 <div className="text-right">
//                     <p>
//                         Welcome,{" "}
//                         <span className="uppercase font-semibold text-blue-300">
//                             {user?.firstName}
//                         </span>
//                     </p>
//                     <p className="text-sm text-gray-400">{user?.emailId}</p>
//                     <p className="text-sm text-gray-400">{user?.mobileNo}</p>
//                 </div>
//             </div>

//             {/* Filter Dropdown */}
//             <div className="mb-6">
//                 <label htmlFor="filter" className="mr-2 font-medium text-white">
//                     Filter by Role:
//                 </label>
//                 <select
//                     name="filter"
//                     id="filter"
//                     value={memberrole}
//                     onChange={(e) => setmemberrole(e.target.value)}
//                     className="px-3 py-2 bg-[#1f2937] text-white border border-gray-600 rounded-lg"
//                 >
//                     <option value="">All</option>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                     <option value="staff">Staff</option>
//                 </select>
//             </div>

//             {/* Member List */}
//             {filterdata.length > 0 ? (
//                 <div className="space-y-4">
//                     {filterdata.map((user) => (
//                         <div
//                             key={user._id}
//                             className="flex justify-between items-center bg-[#1f2937] border border-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition"
//                         >
//                             <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
//                                 <div>
//                                     <p className="text-lg font-semibold capitalize">
//                                         {user.firstName} {user.lastName}
//                                     </p>
//                                     <p className="text-sm text-gray-400">Email: {user.emailId}</p>
//                                     <p className="text-sm text-gray-400">
//                                         Role:{" "}
//                                         <span className="capitalize text-blue-400">{user.role}</span>
//                                     </p>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={() => handleDelete(user._id)}
//                                 className="ml-4 bg-red-600 hover:bg-red-800 text-white text-sm px-4 py-1 rounded-md transition"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-center text-gray-400">No members found.</p>
//             )}
//         </div>

//     );
// };

// export default Allmember;
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axiosClient from '../utils/axiosClients';

const Allmember = () => {
    const [member, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [memberrole, setmemberrole] = useState('');
    const { user } = useSelector((state) => state.auth);

    const fetchMember = async () => {
        try {
            setLoading(true);
            const endpoint = memberrole
                ? `/admin/get-all-${memberrole}`
                : '/user/get-all-member';
            const { data } = await axiosClient.get(endpoint);
            setProducts(data);
        } catch (err) {
            setError('Failed to fetch members');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMember();
    }, [memberrole]);

    const handleDelete = async (memberId) => {
        try {
            await axiosClient.delete(`/admin/delete-member/${memberId}`);
            alert('Deleted successfully');
            fetchMember();
        } catch (err) {
            setError('Failed to delete member');
        }
    };

    const filterdata = member;

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
                <span>{error}</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f172a] text-white px-6 py-8">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <NavLink
                    to="/admin-panal"
                    className="text-lg font-semibold text-blue-400 hover:text-blue-500 transition"
                >
                    ← Back to Admin Panel
                </NavLink>

                <h1 className="text-3xl font-bold uppercase tracking-wide text-white">
                    All Members
                </h1>

                <div className="text-right">
                    <p className="font-medium">
                        Welcome,{" "}
                        <span className="uppercase font-bold text-blue-300">
                            {user?.firstName}
                        </span>
                    </p>
                    <p className="text-sm text-gray-400">{user?.emailId}</p>
                    <p className="text-sm text-gray-400">{user?.mobileNo}</p>
                </div>
            </div>

            {/* FILTER */}
            <div className="mb-8">
                <label className="mr-3 font-medium">Filter by Role:</label>
                <select
                    value={memberrole}
                    onChange={(e) => setmemberrole(e.target.value)}
                    className="px-3 py-2 bg-[#1e293b] border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="">All</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                </select>
            </div>

            {/* MEMBER LIST */}
            {filterdata.length > 0 ? (
                <div className="space-y-5">
                    {filterdata.map((user) => (
                        <div
                            key={user._id}
                            className="bg-[#1e293b]/70 backdrop-blur-xl border border-white/10 
                            rounded-xl p-5 shadow-lg flex justify-between items-center 
                            hover:-translate-y-1 hover:shadow-2xl transition"
                        >
                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-semibold capitalize">
                                    {user.firstName} {user.lastName}
                                </p>

                                <p className="text-sm text-gray-300">
                                    📧 {user.emailId}
                                </p>

                                <p className="text-sm">
                                    Role:{" "}
                                    <span
                                        className={`px-2 py-1 rounded-md text-xs font-semibold ml-1
                                        ${user.role === "admin"
                                                ? "bg-green-600/30 text-green-400"
                                                : user.role === "staff"
                                                    ? "bg-yellow-600/30 text-yellow-300"
                                                    : "bg-blue-600/30 text-blue-300"
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </p>
                            </div>

                            <button
                                onClick={() => handleDelete(user._id)}
                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg 
                                text-sm font-semibold shadow-lg transition"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-400 text-lg mt-10">
                    No members found.
                </p>
            )}
        </div>
    );
};

export default Allmember;
