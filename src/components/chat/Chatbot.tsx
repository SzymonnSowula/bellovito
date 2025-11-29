"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, MapPin, Clock, Utensils, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component, otherwise I'll use standard button
import { cn } from "@/lib/utils"; // Assuming standard shadcn utils

// Fallback if Button/cn are missing, but usually they are present in modern Next.js setups. 
// I'll write self-contained styles just in case to avoid import errors if those specific paths don't exist, 
// but I'll try to use standard Tailwind classes.

type Message = {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
};

const INITIAL_MESSAGE: Message = {
    id: "1",
    text: "Buongiorno! Witaj w Bellovito. W czym mogę Ci pomóc?",
    sender: "bot",
    timestamp: new Date(),
};

const QUICK_REPLIES = [
    { label: "Menu", icon: Utensils, text: "Chciałbym zobaczyć menu." },
    { label: "Godziny", icon: Clock, text: "W jakich godzinach jesteście otwarci?" },
    { label: "Adres", icon: MapPin, text: "Gdzie się znajdujecie?" },
    { label: "Rezerwacja", icon: Calendar, text: "Chcę zarezerwować stolik." },
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async (text: string) => {
        if (!text.trim()) return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: text,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot thinking and response
        setTimeout(() => {
            const botResponse = getBotResponse(text);
            const newBotMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, newBotMessage]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000); // Random delay 1-2s
    };

    const getBotResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes("menu") || lowerInput.includes("jedzenie") || lowerInput.includes("karta")) {
            return "Nasze menu to esencja włoskich smaków! Znajdziesz u nas pyszną pizzę, makarony i owoce morza. Zapraszamy do sekcji Menu na stronie.";
        }
        if (lowerInput.includes("godzin") || lowerInput.includes("otwart") || lowerInput.includes("kiedy")) {
            return "Jesteśmy otwarci codziennie od 12:00 do 22:00. Zapraszamy!";
        }
        if (lowerInput.includes("adres") || lowerInput.includes("gdzie") || lowerInput.includes("lokalizacja") || lowerInput.includes("dojazd")) {
            return "Znajdziesz nas w sercu miasta przy ulicy Włoskiej 5. Czekamy na Ciebie!";
        }
        if (lowerInput.includes("rezerwac") || lowerInput.includes("stolik")) {
            return "Rezerwacji możesz dokonać bezpośrednio przez naszą stronę, klikając przycisk 'Zarezerwuj' w menu głównym, lub dzwoniąc do nas.";
        }
        if (lowerInput.includes("cześć") || lowerInput.includes("hej") || lowerInput.includes("dzień dobry")) {
            return "Ciao! Jak mogę Ci dzisiaj umilić dzień?";
        }

        return "Przepraszam, nie jestem pewien jak odpowiedzieć. Czy możesz zapytać o menu, godziny otwarcia lub rezerwację?";
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSendMessage(inputValue);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-[350px] h-[500px] bg-background border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Bellovito Chat</h3>
                                    <p className="text-xs opacity-80">Zawsze do usług</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 p-1 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex w-full",
                                        msg.sender === "user" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[80%] p-3 rounded-2xl text-sm shadow-sm",
                                            msg.sender === "user"
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-white dark:bg-zinc-800 border border-border rounded-tl-none"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start w-full">
                                    <div className="bg-white dark:bg-zinc-800 border border-border p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                                        <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies (only show if last message was from bot) */}
                        {!isTyping && messages[messages.length - 1].sender === 'bot' && (
                            <div className="p-2 bg-background border-t border-border/50 flex gap-2 overflow-x-auto no-scrollbar">
                                {QUICK_REPLIES.map((reply) => (
                                    <button
                                        key={reply.label}
                                        onClick={() => handleSendMessage(reply.text)}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/10 hover:bg-secondary/20 text-secondary-foreground text-xs rounded-full whitespace-nowrap transition-colors border border-secondary/20"
                                    >
                                        <reply.icon className="w-3 h-3" />
                                        {reply.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-3 bg-background border-t border-border flex gap-2 items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Napisz wiadomość..."
                                className="flex-1 bg-muted/50 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
                            />
                            <button
                                onClick={() => handleSendMessage(inputValue)}
                                disabled={!inputValue.trim() || isTyping}
                                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors relative"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-7 h-7" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle className="w-7 h-7" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Badge (optional, maybe shows initially) */}
                {!isOpen && messages.length === 1 && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
                )}
            </motion.button>
        </div>
    );
}
