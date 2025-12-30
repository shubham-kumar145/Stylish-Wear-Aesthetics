
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useDispatch, useSelector } from 'react-redux';
// import { z } from 'zod';
// import { registerUser } from '../validations/authSlice';

// const signupSchema = z.object({
//     firstName: z.string().min(3, "First name must be at least 3 characters"),
//     emailId: z.string().email("Enter a valid email"),
//     password: z.string()
//         .min(8, "Password must be at least 8 characters")
//         .regex(
//             /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
//             "Include uppercase, lowercase, number & special character"
//         )
// });

// const Signup = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { isAuthenticated, loading, error } = useSelector(state => state.auth);

//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm({ resolver: zodResolver(signupSchema) });

//     useEffect(() => {
//         if (isAuthenticated) navigate('/');
//     }, [isAuthenticated, navigate]);

//     const onSubmit = (data) => {
//         dispatch(registerUser(data));
//         // reset(); // Optional: reset fields on success
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
//             <div className="w-full max-w-md p-8 bg-gray-950 border border-gray-800 rounded-2xl shadow-2xl space-y-6">
//                 <h2 className="text-3xl font-bold text-center text-blue-500">Create Your Account</h2>

//                 {/* {error && (
//                     <p className="text-red-500 text-sm text-center">{error}</p>
//                 )} */}

//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                     {/* Username */}
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         {...register("firstName")}
//                         className="input input-bordered w-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.firstName && (
//                         <p className="text-sm text-red-500 -mt-2">{errors.firstName.message}</p>
//                     )}

//                     {/* Email */}
//                     <input
//                         type="email"
//                         placeholder="Email Address"
//                         {...register("emailId")}
//                         className="input input-bordered w-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.emailId && (
//                         <p className="text-sm text-red-500 -mt-2">{errors.emailId.message}</p>
//                     )}

//                     {/* Password with show/hide toggle */}
//                     <div className="relative">
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             placeholder="Password"
//                             {...register("password")}
//                             className="input input-bordered w-full pr-10 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />

//                         <button
//                             type="button"
//                             className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-white"
//                             onClick={() => setShowPassword(!showPassword)}
//                             aria-label={showPassword ? "Hide password" : "Show password"}
//                         >
//                             {showPassword ? (
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411L21 21" />
//                                 </svg>
//                             ) : (
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                     {errors.password && (
//                         <p className="text-sm text-red-500 -mt-2">{errors.password.message}</p>
//                     )}

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="btn btn-primary w-full mt-2 bg-blue-600 border-none hover:bg-blue-700 transition-all"
//                     >
//                         {loading ? 'Creating Account...' : 'Sign Up'}
//                     </button>

//                     {/* Login Redirect */}
//                     <p className="text-sm text-center text-gray-400 mt-4">
//                         Already have an account?{' '}
//                         <span
//                             onClick={() => navigate("/login")}
//                             className="text-blue-400 hover:underline cursor-pointer"
//                         >
//                             Login
//                         </span>
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;


import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { registerUser } from '../validations/authSlice';

const signupSchema = z.object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    emailId: z.string().email("Enter a valid email"),
    mobileNo: z.coerce.number({ invalid_type_error: "Enter a valid mobile number" }),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
            "Include uppercase, lowercase, number & special character"
        )
});


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, loading, error } = useSelector(state => state.auth ?? {});

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ resolver: zodResolver(signupSchema) });

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const onSubmit = async (data) => {
        try {
            console.log("sign up data");
            console.log(data);
            
            await dispatch(registerUser(data));

            reset();
        } catch (err) {
            console.error("Registration failed:", err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
            <div className="w-full max-w-md p-8 bg-gray-950 border border-gray-800 rounded-2xl shadow-2xl space-y-6">
                <h2 className="text-3xl font-bold text-center text-blue-500">Create Your Account</h2>

                {error?.message && (
                    <p className="text-red-500 text-sm text-center">{error.message}</p>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Username */}
                    <input
                        type="text"
                        placeholder="Username"
                        {...register("firstName")}
                        className="input input-bordered w-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.firstName && (
                        <p className="text-sm text-red-500 -mt-2">{errors.firstName.message}</p>
                    )}

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email Address"
                        {...register("emailId")}
                        className="input input-bordered w-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.emailId && (
                        <p className="text-sm text-red-500 -mt-2">{errors.emailId.message}</p>
                    )}

                    {/* Mobile */}
                    <input
                        type="number"
                        placeholder="Mobile Number"
                        {...register("mobileNo")}
                        className="input input-bordered w-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.mobileNo && (
                        <p className="text-sm text-red-500 -mt-2">{errors.mobileNo.message}</p>
                    )}

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            {...register("password")}
                            className="input input-bordered w-full pr-10 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="button"
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-white"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411L21 21" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-sm text-red-500 -mt-2">{errors.password.message}</p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-full mt-2 bg-blue-600 border-none hover:bg-blue-700 transition-all"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>

                    {/* Login Link */}
                    <p className="text-sm text-center text-gray-400 mt-4">
                        Already have an account?{' '}
                        <span
                            onClick={() => navigate("/login")}
                            className="text-blue-400 hover:underline cursor-pointer"
                        >
                            Login
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;

