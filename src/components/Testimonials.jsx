import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "IT Manager",
            company: "TechCorp Solutions",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            rating: 5,
            text: "SoftSell made selling our unused Microsoft licenses incredibly easy. The process was smooth, and we received payment within 24 hours. Highly recommended!",
            color: "from-blue-500 to-blue-600"
        },
        {
            name: "Michael Chen",
            role: "Director of Operations",
            company: "Global Innovations",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            rating: 5,
            text: "The platform's security features and transparent pricing gave us confidence in selling our software licenses. Excellent service and support!",
            color: "from-purple-500 to-purple-600"
        },
        {
            name: "Emily Rodriguez",
            role: "Finance Director",
            company: "Future Systems",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            rating: 5,
            text: "We recovered significant value from our unused licenses. The team was professional and responsive throughout the entire process.",
            color: "from-green-500 to-green-600"
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
                        What Our Customers Say
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Trusted by businesses worldwide for secure and efficient software license trading
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative">
                                <div className="absolute -top-4 left-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="mt-8">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                                        ))}
                                    </div>
                                    <FaQuoteLeft className="text-4xl text-gray-200 dark:text-gray-600 mb-4" />
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                        {testimonial.text}
                                    </p>
                                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {testimonial.role} at {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                Trusted by 10,000+ Businesses
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Join our growing community of satisfied customers
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                            >
                                Read More Reviews
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;