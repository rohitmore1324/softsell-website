import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: "bot" },
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setMessages([...messages, { text: message, sender: "user" }]);
            setMessage("");
            // Simulate bot response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    text: "Thank you for your message. Our team will get back to you soon!",
                    sender: "bot"
                }]);
            }, 1000);
        }
    };

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaComments className="w-6 h-6" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
                    >
                        <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <FaRobot className="w-5 h-5" />
                                <h3 className="font-semibold">Chat with us</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:text-gray-200 transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === "user"
                                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                            : "bg-white dark:bg-gray-800 shadow-md"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 p-3 rounded-full border dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all"
                                >
                                    <FaPaperPlane />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;