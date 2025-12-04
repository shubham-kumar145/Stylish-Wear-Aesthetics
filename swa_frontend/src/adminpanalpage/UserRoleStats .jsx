import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosClients';

const UserRoleStats = () => {
    const [users, setUsers] = useState([]);
    const [counts, setCounts] = useState({ user: 0, admin: 0, staff: 0 });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get('/user/get-all-member'); // update path if needed
                setUsers(data);

                const roleCounts = {
                    user: data.filter(u => u.role === 'user').length,
                    admin: data.filter(u => u.role === 'admin').length,
                    staff: data.filter(u => u.role === 'staff').length,
                };
                setCounts(roleCounts);
            } catch (err) {
                console.error("Failed to fetch users", err);
            }
        };

        fetchUsers();
    }, []);

    //     return (
    //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    //             {/* Card 1 - Users */}
    //             <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg p-6 shadow-md">
    //                 <h3 className="text-sm font-semibold">Total Users</h3>
    //                 <p className="text-3xl font-bold mt-2">{counts.user}</p>
    //             </div>

    //             {/* Card 2 - Staff */}
    //             <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg p-6 shadow-md">
    //                 <h3 className="text-sm font-semibold">Total Staff</h3>
    //                 <p className="text-3xl font-bold mt-2">{counts.staff}</p>
    //             </div>

    //             {/* Card 3 - Admins */}
    //             <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg p-6 shadow-md">
    //                 <h3 className="text-sm font-semibold">Total Admins</h3>
    //                 <p className="text-3xl font-bold mt-2">{counts.admin}</p>
    //             </div>
    //         </div>
    //     );
    // };
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            {/* Card 1 - Users */}
            <div className="rounded-2xl p-6 bg-[#1E293B]/80 backdrop-blur-xl 
            border border-white/10 shadow-xl text-white 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

                <h3 className="text-base font-medium opacity-80">Total Users</h3>
                <p className="text-4xl font-bold mt-3">{counts.user}</p>
            </div>

            {/* Card 2 - Staff */}
            <div className="rounded-2xl p-6 bg-[#1E293B]/80 backdrop-blur-xl 
            border border-white/10 shadow-xl text-white 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

                <h3 className="text-base font-medium opacity-80">Total Staff</h3>
                <p className="text-4xl font-bold mt-3">{counts.staff}</p>
            </div>

            {/* Card 3 - Admins */}
            <div className="rounded-2xl p-6 bg-[#1E293B]/80 backdrop-blur-xl 
            border border-white/10 shadow-xl text-white 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

                <h3 className="text-base font-medium opacity-80">Total Admins</h3>
                <p className="text-4xl font-bold mt-3">{counts.admin}</p>
            </div>

        </div>
    );
}
export default UserRoleStats;