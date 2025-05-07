import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/logo.png" alt="SoftSell Logo" className="h-8" />
                    <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        SoftSell
                    </span>
                </motion.div>
                <motion.button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {darkMode ? (
                        <FaSun className="text-yellow-400 w-5 h-5" />
                    ) : (
                        <FaMoon className="text-gray-600 w-5 h-5" />
                    )}
                </motion.button>
            </div>
        </nav>
    );
}