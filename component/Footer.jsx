"use client";

import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
    Plane,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-gradient-to-br from-blue-600 to-amber-600 p-2 rounded-full">
                                <Plane className="w-5 h-5 text-white -rotate-45" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                                Book My Charter
                            </span>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Your trusted partner for premium helicopter charter services in
                            India. Experience luxury travel with safety and comfort.
                        </p>

                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <span className="text-lg font-semibold text-white mb-4 block">
                            Quick Links
                        </span>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/chardham-kedarnath"
                                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    Chardham & Kedarnath Tours
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/wedding-services"
                                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    Wedding Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/flower-dropping"
                                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    Flower Dropping
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/charter-services"
                                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    Charter Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <span className="text-lg font-semibold text-white mb-4 block">
                            Our Services
                        </span>
                        <ul className="space-y-2">
                            <li className="text-slate-400 text-sm">
                                Helicopter Booking Delhi
                            </li>
                            <li className="text-slate-400 text-sm">
                                Chardham Yatra by Helicopter
                            </li>
                            <li className="text-slate-400 text-sm">
                                Kedarnath Helicopter Services
                            </li>
                            <li className="text-slate-400 text-sm">
                                Wedding Helicopter Charter
                            </li>
                            <li className="text-slate-400 text-sm">
                                Corporate Charter Flights
                            </li>
                            <li className="text-slate-400 text-sm">
                                Aerial Photography
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <span className="text-lg font-semibold text-white mb-4 block">
                            Contact Us
                        </span>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                                <span className="text-slate-400 text-sm">
                                    C705 Dwarka Sec 7
                                    <br />
                                    Delhi 110077, India
                                </span>
                            </li>

                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <a
                                    href="tel:+919667370747"
                                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    +91 9667370747
                                </a>
                            </li>

                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <a
                                    href="mailto:info@bookmycharter.com"
                                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    info@bookmycharter.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm text-center md:text-left">
                            © 2025 Book My Charter. All rights reserved.
                        </p>

                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
