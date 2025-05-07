import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        Maximize the Value of Your Unused Software Licenses
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-300 mb-8"
                    >
                        Turn unused software into working capital in just a few clicks. Fast, secure, and hassle-free.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                        >
                            Sell My Licenses
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
                >
                    {[
                        { number: "10K+", label: "Licenses Sold" },
                        { number: "$5M+", label: "Value Recovered" },
                        { number: "98%", label: "Customer Satisfaction" },
                        { number: "24/7", label: "Support" },
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;