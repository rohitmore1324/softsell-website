import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaWindows, FaMicrosoft, FaShieldAlt } from "react-icons/fa";

const QuoteModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        licenseType: "",
        quantity: "",
        email: "",
        company: "",
        additionalInfo: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        alert("Thank you! We'll send your quote shortly.");
        onClose();
    };

    const licenseTypes = [
        { id: "windows", name: "Windows", icon: <FaWindows /> },
        { id: "office", name: "Microsoft Office", icon: <FaMicrosoft /> },
        { id: "antivirus", name: "Antivirus", icon: <FaShieldAlt /> }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
                    >
                        <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Get Your Quote</h2>
                            <button
                                onClick={onClose}
                                className="hover:text-gray-200 transition-colors"
                            >
                                <FaTimes className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            {step === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h3 className="text-xl font-semibold mb-4">Select License Type</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        {licenseTypes.map((type) => (
                                            <motion.button
                                                key={type.id}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => {
                                                    setFormData({ ...formData, licenseType: type.id });
                                                    setStep(2);
                                                }}
                                                className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors text-left"
                                            >
                                                <div className="text-2xl text-blue-600 dark:text-blue-400 mb-2">
                                                    {type.icon}
                                                </div>
                                                <div className="font-medium">{type.name}</div>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.form
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Number of Licenses</label>
                                        <input
                                            type="number"
                                            required
                                            min="1"
                                            value={formData.quantity}
                                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                            className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter quantity"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter company name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Additional Information</label>
                                        <textarea
                                            value={formData.additionalInfo}
                                            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                                            className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                                            placeholder="Any additional details about your licenses..."
                                        />
                                    </div>
                                    <div className="flex justify-between pt-4">
                                        <motion.button
                                            type="button"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setStep(1)}
                                            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            Back
                                        </motion.button>
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                                        >
                                            Get Quote
                                        </motion.button>
                                    </div>
                                </motion.form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default QuoteModal; 