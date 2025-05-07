import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        alert("Thank you for your message. We'll get back to you soon!");
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: ""
        });
    };

    const contactInfo = [
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            title: "Email Us",
            details: ["support@softsell.com", "sales@softsell.com"],
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <FaPhone className="w-6 h-6" />,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <FaMapMarkerAlt className="w-6 h-6" />,
            title: "Visit Us",
            details: ["123 Business Street", "New York, NY 10001"],
            color: "from-green-500 to-green-600"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Contact Us
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Get in touch with our team for any questions about selling your software licenses
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    {info.title}
                                </h3>
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600 dark:text-gray-300">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                            Send Us a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Company"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                    Your Message
                                </label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Why Contact Us?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    ✓
                                </div>
                                <p>Get personalized assistance with selling your software licenses</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    ✓
                                </div>
                                <p>Learn about our competitive pricing and market rates</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    ✓
                                </div>
                                <p>Understand our secure transaction process</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    ✓
                                </div>
                                <p>Get answers to your questions about license verification</p>
                            </li>
                        </ul>
                        <div className="mt-8 p-6 bg-white/10 rounded-xl">
                            <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
                            <div className="space-y-2">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;