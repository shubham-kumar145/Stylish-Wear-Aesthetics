// import React from 'react';
// import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';

// const Footer = () => {
//     return (
//         <footer className="bg-[#222] overflow-x-hidden text-gray-400 text-sm">
//             <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-10">
//                 {/* About */}
//                 <div>
//                     <h3 className="text-gray-300 font-semibold mb-3">ABOUT</h3>
//                     <ul className="space-y-2">
//                         <li><a href="#">Contact Us</a></li>
//                         <li><a href="#">About Us</a></li>
//                         <li><a href="#">Careers</a></li>
//                         <li><a href="#">Stylish Wear AestheticsStories</a></li>
//                         <li><a href="#">Press</a></li>
//                         <li><a href="#">Corporate Information</a></li>
//                     </ul>
//                 </div>

//                 {/* Help */}
//                 <div>
//                     <h3 className="text-gray-300 font-semibold mb-3">HELP</h3>
//                     <ul className="space-y-2">
//                         <li><a href="#">Payments</a></li>
//                         <li><a href="#">Shipping</a></li>
//                         <li><a href="#">Cancellation & Returns</a></li>
//                         <li><a href="#">FAQ</a></li>
//                     </ul>
//                 </div>

//                 {/* Consumer Policy */}
//                 <div>
//                     <h3 className="text-gray-300 font-semibold mb-3">CONSUMER POLICY</h3>
//                     <ul className="space-y-2">
//                         <li><a href="#">Cancellation & Returns</a></li>
//                         <li><a href="#">Terms Of Use</a></li>
//                         <li><a href="#">Security</a></li>
//                         <li><a href="#">Privacy</a></li>
//                         <li><a href="#">Sitemap</a></li>
//                         <li><a href="#">Grievance Redressal</a></li>
//                         <li><a href="#">EPR Compliance</a></li>
//                     </ul>
//                 </div>

//                 {/* Contact & Social */}
//                 <div>
//                     <h3 className="text-gray-300 font-semibold mb-3">Mail Us:</h3>
//                     <p className="text-sm leading-relaxed mb-4">
//                         Stylish Wear Aesthetics Internet Private Limited,<br />
//                         Buildings Alyssa, Begonia &<br />
//                         Clove Embassy Tech Village,<br />
//                         Outer Ring Road, Devarabeesanahalli Village,<br />
//                         Bengaluru, 560103,<br />
//                         Karnataka, India
//                     </p>
//                     <h3 className="text-gray-300 font-semibold mb-2">Social:</h3>
//                     <div className="flex gap-4 text-white text-lg">
//                         <FaFacebookF />
//                         <FaXTwitter />
//                         <FaYoutube />
//                         <FaInstagram />
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Bar */}
//             <div className="border-t border-gray-700 mt-6 py-4 px-6 text-gray-400 text-sm flex flex-wrap justify-between items-center max-w-7xl mx-auto">
//                 <div className="flex gap-6 flex-wrap">
//                     <span className="flex items-center gap-2"><span>🛒</span> Become a Seller</span>
//                     <span className="flex items-center gap-2"><span>⚡</span> Advertise</span>
//                     <span className="flex items-center gap-2"><span>🎁</span> Gift Cards</span>
//                     <span className="flex items-center gap-2"><span>❓</span> Help Center</span>
//                 </div>
//                 <div className="mt-4 md:mt-0">
//                     © 2007-2026 Stylish-Wear-Aesthetics.com
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import { Link } from "react-router-dom";

import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] overflow-x-hidden text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-10">

                {/* ABOUT */}
                <div>
                    <h3 className="text-gray-200 font-semibold mb-3">ABOUT</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="/contact-page"
                                className="flex items-center gap-2 hover:text-blue-400 transition"
                            >
                                📞 Contact Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact-page"
                                className="flex items-center gap-2 hover:text-blue-400 transition"
                            >
                                ℹ️ About Stylish Wear Aesthetics
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact-page"
                                className="flex items-center gap-2 hover:text-blue-400 transition"
                            >
                                💼 Careers (Hiring Now)
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact-page"
                                className="flex items-center gap-2 hover:text-blue-400 transition"
                            >
                                📰 Press Releases
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact-page"
                                className="flex items-center gap-2 hover:text-blue-400 transition"
                            >
                                🏢 Corporate Information
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact-page"
                                className="flex items-center gap-2 hover:text-blue-400 transition"
                            >
                                📘 Blog & Stories
                            </Link>
                        </li>
                    </ul>

                </div>

                {/* HELP */}
                <div>
                    <h3 className="text-gray-200 font-semibold mb-3">HELP</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition">💳 Payments</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">🚚 Shipping Information</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">↩️ Cancellation & Returns</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">❓ Frequently Asked Questions</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">⭐ Customer Reviews</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">🧾 Order Tracking</a></li>
                    </ul>
                </div>

                {/* CONSUMER POLICY */}
                <div>
                    <h3 className="text-gray-200 font-semibold mb-3">CONSUMER POLICY</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition">📜 Terms Of Use</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">🔐 Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">🛡️ Security & Safety</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">📌 Sitemap</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">📮 Grievance Redressal</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">♻️ EPR Compliance</a></li>
                    </ul>
                </div>


                {/* CONTACT + SOCIAL */}
                <div>
                    <h3 className="text-gray-200 font-semibold mb-3">CONTACT US</h3>
                    <p className="text-sm leading-relaxed mb-4">
                        <strong>Stylish Wear Aesthetics Pvt. Ltd.</strong><br />
                        Tower X, 3rd Floor,<br />
                        Orion Tech Park, Electronic City Phase 1,<br />
                        Bengaluru – 560100, Karnataka, India<br />
                        <br />
                        <strong>📞 Phone:</strong> +91 98765 43210<br />
                        <strong>✉️ Support:</strong> support@swa.com<br />
                        <strong>🕒 Working Hours:</strong> 9 AM – 7 PM (Mon–Sat)
                    </p>

                    <h3 className="text-gray-200 font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4 text-white text-lg">
                        <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
                        <FaXTwitter className="cursor-pointer hover:text-gray-300 transition" />
                        <FaYoutube className="cursor-pointer hover:text-red-500 transition" />
                        <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-6 py-4 px-6 text-gray-400 text-sm flex flex-wrap justify-between items-center max-w-7xl mx-auto">

                <div className="flex gap-6 text-gray-300 flex-wrap">
                    <span className="flex items-center gap-2 cursor-pointer hover:text-white transition">
                        🛒 Become a Seller
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer hover:text-white transition">
                        ⚡ Advertise with Us
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer hover:text-white transition">
                        🎁 Gift Cards
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer hover:text-white transition">
                        ❓ Help Center
                    </span>
                </div>

                <div className="mt-4 md:mt-0 text-gray-300">
                    © 2007–2026 StylishWearAesthetics.com – All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
