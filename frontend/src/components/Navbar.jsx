import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { Search } from 'lucide-react';
import { logoutUser } from '../validations/authSlice'; // update path as needed

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/sign-up');
    };

    const { user } = useSelector((state) => state.auth);
    console.log(user?.firstName || 'user');

    const handleSignup = () => {
        navigate('/sign-up');
    };

    return (
        <div className="h-[10vh] bg-[#1f2937] flex flex-col sm:flex-row justify-between items-center px-4 gap-3 sm:gap-0">
            {/* Brand */}
            <div className="flex items-center space-x-3">
                {/* <img
                    src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png" // ← Replace this with your chosen icon URL
                    alt="Logo"
                    className="w-8 h-8"
                /> */}

                <img
                    src="/hero_photo/logo_white.png"
                    alt="Logo"
                    className="w-8 h-8"
                />
                {/* <h1 className="text-xl font-bold tracking-wide text-white">
                   Hello krisha (badmossssssss)
                </h1> */}
                 <h1 className="text-xl font-bold tracking-wide text-white">
                    Stylish <span className="text-blue-400">Wear</span> Aesthetics
                </h1> 
            </div>

            {/* Search Input */}
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                    <Search size={18} />
                </span>
                <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-8 pr-3 py-1 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 w-72"
                />
            </div>

            {/* Dropdown */}
            <div className="relative dropdown dropdown-end">
                <div>
                    <div
                        tabIndex={0}
                        className="flex flex-col btn btn-ghost font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-150 px-3 py-2 rounded-md"
                    >
                        <div className="flex flex-col gap-1">
                            <div className='flex'>
                                <p className="first-letter:uppercase">Welcome,</p>
                                <span className="uppercase">  {user?.firstName || "User"}      </span>
                            </div>
                            <p className="text-sm truncate max-w-[200px]">{user?.emailId}</p>
                        </div>
                    </div>
                </div>

                <ul
                    tabIndex={0}
                    className="mt-2 p-2 dropdown-content menu bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 rounded-lg w-52 shadow-xl ring-1 ring-gray-200 dark:ring-gray-700"
                >
                    <li>
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            Logout
                        </button>
                    </li>
                    {user?.role === 'admin' && (
                        <li>
                            <NavLink
                                to="/admin-panal"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                            >
                                Admin
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Search } from 'lucide-react';
// import { useSelector } from 'react-redux';

// const Navbar = () => {

//     const handleLogout = () => {
//         dispatch(logoutUser());
//         navigate('/sign-up');
//     };
//     const [showDropdown, setShowDropdown] = useState(false);
//     const { user } = useSelector((state) => state.auth);

//     return (
//         <nav className="bg-[#1f2937] text-white shadow-lg px-6 py-4 flex items-center justify-between">
//             {/* Left: Logo & Name */}
// <div className="flex items-center space-x-3">
//     <img
//         src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png" // ← Replace this with your chosen icon URL
//         alt="Logo"
//         className="w-8 h-8"
//     />

//     <img
//         src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
//         alt="Logo"
//         className="w-8 h-8"
//     />
//     <h1 className="text-xl font-bold tracking-wide text-white">
//         Smart<span className="text-blue-400">Stocker</span>
//     </h1>
// </div>

//             {/* Right: Search + Login + Welcome */}
//             <div className="flex items-center gap-6 relative">
//                 {/* Search input with icon */}
// <div className="relative">
//     <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
//         <Search size={18} />
//     </span>
//     <input
//         type="text"
//         placeholder="Search products..."
//         className="pl-8 pr-3 py-1 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 w-72"
//     />
// </div>

//                 {/* Login Dropdown */}
//                 <div className="relative">
//                     <button
//                         onClick={() => setShowDropdown(!showDropdown)}
//                         className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
//                     ><div>

//                             <p>

//                                 Welcome <span>{user?.firstName}</span>
//                             </p>
//                             <span className="text-xs text-gray-300">user@example.com</span>
//                         </div>
//                     </button>

//                     {showDropdown && (
//                         <div className="absolute right-0 top-12 w-32 bg-white text-gray-800 rounded-md shadow-md z-10">
//                             <Link
//                                 to="/admin-panal"
//                                 className="block px-4 py-2 hover:bg-gray-100 transition"
//                                 onClick={() => setShowDropdown(false)}
//                             >
//                                 Admin Panel
//                             </Link>
//                             <Link
//                                 to="/login/user"
//                                 className="block px-4 py-2 hover:bg-gray-100 transition"
//                                 onClick={() => setShowDropdown(false)}
//                             >
//                                 Logout
//                             </Link>
//                         </div>
//                     )}
//                 </div>


//             </div>
//         </nav>
//     );
// };


// export default Navbar;

