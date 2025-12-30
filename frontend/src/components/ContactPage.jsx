import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setSuccess("Message sent successfully!");
                    formRef.current.reset();
                    setLoading(false);
                },
                (error) => {
                    setSuccess("Failed to send message. Try again.");
                    setLoading(false);
                }
            );
    };

    return (
        <div className="bg-[#0f172a] text-white min-h-screen py-10 px-6 flex flex-col items-center">
            {/* HEADER */}
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">
                Contact Us
            </h1>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">

                {/* CONTACT FORM */}
                <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-white/10">
                    <h2 className="text-2xl font-semibold mb-4">
                        Send Us a Message
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Have questions, feedback, or business inquiries?
                        Fill out the form below and our team will get back to you within 24 hours.
                    </p>

                    <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                        <div>
                            <label className="block mb-1">Your Name</label>
                            <input
                                type="text"
                                name="user_name"
                                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-white/10 text-white"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Your Email</label>
                            <input
                                type="email"
                                name="user_email"
                                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-white/10 text-white"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-white/10 text-white"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition font-bold py-2 rounded-lg"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {success && (
                            <p className="text-center mt-2 text-sm text-green-400">
                                {success}
                            </p>
                        )}
                    </form>
                </div>

                {/* COMPANY HISTORY & INFO */}
                <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-white/10">
                    <h2 className="text-2xl font-semibold mb-4">
                        About Stylish Wear Aesthetics
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        <span className="font-semibold text-blue-300">Founded in 2021</span>,
                        Stylish Wear Aesthetics began as a small digital store
                        focused on providing premium quality apparel at affordable prices.
                        Today, we are one of India’s fastest-growing fashion & lifestyle platforms.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        Our journey started with a team of just **three passionate developers and designers**
                        who believed that fashion should be effortless, accessible, and sustainable.
                        From a single-room workspace in Bengaluru, we expanded into a multi-office company
                        serving customers across India.
                    </p>

                    <h3 className="text-xl font-semibold text-blue-300 mt-6 mb-2">
                        Corporate Information
                    </h3>

                    <ul className="text-gray-300 space-y-2">
                        <li>🏢 <strong>Company:</strong> Stylish Wear Aesthetics Pvt. Ltd.</li>
                        <li>📍 <strong>Head Office:</strong> Orion Tech Park, Electronic City, Bengaluru</li>
                        <li>📅 <strong>Founded:</strong> March 2021</li>
                        <li>👥 <strong>Team Size:</strong> 120+ Employees</li>
                        <li>🛍️ <strong>Categories:</strong> Men, Women, Kids, Accessories</li>
                        <li>🚚 <strong>Logistics Partners:</strong> Delhivery, BlueDart, Ekart</li>
                        <li>🎯 <strong>Mission:</strong> Modern fashion made simple and affordable.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
