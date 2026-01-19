"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "./iu/button";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/chardham-kedarnath", label: "Chardham & Kedarnath" },
        { path: "/wedding-services", label: "Wedding Services" },
        { path: "/flower-dropping", label: "Flower Dropping" },
        { path: "/charter-services", label: "Charter Services" },
        { path: "/about-us", label: "About Us" },
        { path: "/contact", label: "Contact" },
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative bg-gradient-to-br from-blue-600 to-amber-600 p-2.5 rounded-full">
                                <Plane className="w-6 h-6 text-white -rotate-45" />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                                Book My Charter
                            </span>
                            <span className="text-xs text-slate-400">
                                Premium Helicopter Services
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(item.path)
                                    ? "bg-gradient-to-r from-blue-600 to-amber-600 text-white"
                                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link href="/booking">
                            <Button className="ml-4 bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300">
                                Book Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(item.path)
                                            ? "bg-gradient-to-r from-blue-600 to-amber-600 text-white"
                                            : "text-slate-300 hover:text-white hover:bg-slate-800"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                <Link href="/booking" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white font-semibold">
                                        Book Now
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navigation;
