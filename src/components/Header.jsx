import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import QuoteModal from "./QuoteModal";

const Header = ({ darkMode, toggleDarkMode }) => {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            SoftSell
                        </span>
                    </motion.div>
                    <div className="flex items-center gap-6">
                        <motion.button
                            onClick={toggleDarkMode}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            {darkMode ? (
                                <FaSun className="text-yellow-400 w-5 h-5" />
                            ) : (
                                <FaMoon className="text-gray-600 w-5 h-5" />
                            )}
                        </motion.button>
                        <motion.button
                            onClick={() => setIsQuoteModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                        >
                            Get a Quote
                        </motion.button>
                    </div>
                </div>
            </header>
            <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        </>
    );
};

export default Header; 