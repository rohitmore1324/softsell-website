import { motion } from "framer-motion";
import { FaSearch, FaCalculator, FaHandshake, FaMoneyBillWave } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaSearch className="w-8 h-8" />,
            title: "List Your Licenses",
            description: "Enter details about your unused software licenses, including type, quantity, and version.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <FaCalculator className="w-8 h-8" />,
            title: "Get Instant Quote",
            description: "Our AI-powered system calculates the best value for your licenses in seconds.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <FaHandshake className="w-8 h-8" />,
            title: "Accept Offer",
            description: "Review and accept our competitive offer for your software licenses.",
            color: "from-green-500 to-green-600"
        },
        {
            icon: <FaMoneyBillWave className="w-8 h-8" />,
            title: "Get Paid",
            description: "Receive payment within 24 hours through your preferred payment method.",
            color: "from-yellow-500 to-yellow-600"
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Selling your unused software licenses is simple and secure with our streamlined process
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow h-full">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {step.description}
                                </p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                    >
                        Start Selling Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;