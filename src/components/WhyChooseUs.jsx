import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaClock, FaHeadset, FaLock, FaGlobe } from "react-icons/fa";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            title: "Secure Transactions",
            description: "Bank-level security for all transactions and data protection.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <FaChartLine className="w-8 h-8" />,
            title: "Best Market Rates",
            description: "Get the highest value for your licenses with our competitive pricing.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <FaClock className="w-8 h-8" />,
            title: "Fast Processing",
            description: "Quick verification and payment within 24 hours.",
            color: "from-green-500 to-green-600"
        },
        {
            icon: <FaHeadset className="w-8 h-8" />,
            title: "24/7 Support",
            description: "Round-the-clock customer support for all your queries.",
            color: "from-yellow-500 to-yellow-600"
        },
        {
            icon: <FaLock className="w-8 h-8" />,
            title: "Verified Buyers",
            description: "All buyers are thoroughly verified for your peace of mind.",
            color: "from-red-500 to-red-600"
        },
        {
            icon: <FaGlobe className="w-8 h-8" />,
            title: "Global Reach",
            description: "Connect with buyers worldwide for better deals.",
            color: "from-indigo-500 to-indigo-600"
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
                        Why Choose Us
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Experience the most trusted platform for selling your software licenses
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
                >
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who have successfully sold their software licenses with us
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                    >
                        Start Selling Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs; 