"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Mountain,
    Clock,
    MapPin,
    Users,
    Check,
    Phone,
} from "lucide-react";
import { Button } from "../../component/iu/button";

export default function ChardharnKedarnath() {
    const packages = [
        {
            name: "Kedarnath Helicopter Tour",
            duration: "1 Day",
            route: "Delhi → Kedarnath → Delhi",
            price: "Starting from ₹1,25,000",
            features: [
                "Round trip helicopter service",
                "VIP darshan arrangements",
                "Experienced pilot and crew",
                "All safety equipment included",
                "Flexible timing options",
            ],
        },
        {
            name: "Chardham Yatra Package",
            duration: "3-4 Days",
            route: "Complete Chardham Circuit",
            price: "Starting from ₹3,50,000",
            features: [
                "Visit all four dhams by helicopter",
                "Premium accommodation included",
                "VIP temple access arrangements",
                "Professional tour guide",
                "Meals and refreshments",
            ],
        },
        {
            name: "Badrinath Helicopter Service",
            duration: "1 Day",
            route: "Delhi → Badrinath → Delhi",
            price: "Starting from ₹1,15,000",
            features: [
                "Direct helicopter transfer",
                "Temple visit coordination",
                "Weather monitoring and support",
                "Comfortable seating arrangements",
                "Photo opportunities",
            ],
        },
    ];

    const highlights = [
        {
            icon: Clock,
            title: "Save Time",
            description: "Complete your pilgrimage in days instead of weeks",
        },
        {
            icon: Mountain,
            title: "Scenic Views",
            description: "Breathtaking aerial views of the Himalayas",
        },
        {
            icon: Users,
            title: "Group Bookings",
            description: "Special packages for families and groups",
        },
        {
            icon: MapPin,
            title: "Multiple Routes",
            description: "Flexible itineraries to suit your needs",
        },
    ];

    return (
        <>
            {/* SEO */}
            <Head>
                <title>
                    Chardham Yatra & Kedarnath Helicopter Booking | Book My Charter
                </title>
                <meta
                    name="description"
                    content="Book helicopter services for Chardham Yatra and Kedarnath darshan. Experience divine journeys with premium helicopter charter services."
                />
                <meta
                    name="keywords"
                    content="Chardham yatra helicopter, Kedarnath helicopter booking, Badrinath helicopter service"
                />
            </Head>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Chardham Yatra &
                            </span>
                            <br />
                            <span className="text-white">
                                Kedarnath Helicopter Services
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Experience divine journeys with comfort and convenience.
                        </p>
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        src="https://images.unsplash.com/photo-1589907915524-b7375479c569"
                        alt="Kedarnath helicopter view"
                        className="mt-12 w-full h-[500px] object-cover rounded-2xl"
                    />
                </div>
            </section>

            {/* Highlights */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
                            >
                                <Icon className="w-8 h-8 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm mt-2">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Packages */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {pkg.name}
                            </h3>

                            <p className="text-blue-400 flex items-center mb-2">
                                <Clock className="w-4 h-4 mr-2" /> {pkg.duration}
                            </p>

                            <p className="text-slate-400 flex items-center text-sm mb-4">
                                <MapPin className="w-4 h-4 mr-2" /> {pkg.route}
                            </p>

                            <p className="text-3xl font-bold text-cyan-400 mb-6">
                                {pkg.price}
                            </p>

                            <ul className="space-y-2 mb-6">
                                {pkg.features.map((f, idx) => (
                                    <li
                                        key={idx}
                                        className="flex text-slate-300 text-sm"
                                    >
                                        <Check className="w-4 h-4 text-green-400 mr-2" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/booking">
                                <Button className="w-full">
                                    Book Now
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Begin Your Spiritual Journey Today
                    </h2>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/booking">
                            <Button size="lg">Request a Quote</Button>
                        </Link>
                        <a href="tel:+919667370747">
                            <Button variant="outline" size="lg">
                                <Phone className="w-5 h-5 mr-2" /> Call Now
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
