"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Camera, Music, Sparkles, Check, Phone } from "lucide-react";
import { Button } from "../../component/iu/button";

export default function WeddingServices() {
    const services = [
        {
            icon: Heart,
            title: "Grand Entrance",
            description:
                "Make a spectacular entrance at your wedding venue with our luxury helicopters",
        },
        {
            icon: Camera,
            title: "Aerial Photography",
            description:
                "Capture stunning aerial shots of your special day from unique perspectives",
        },
        {
            icon: Music,
            title: "Pre-Wedding Shoots",
            description:
                "Elevate your pre-wedding photography with helicopter backdrop shoots",
        },
        {
            icon: Sparkles,
            title: "Couple Transport",
            description:
                "Private helicopter transfers for bride, groom, and VIP guests",
        },
    ];

    const packages = [
        {
            name: "Basic Wedding Package",
            price: "Starting from ₹2,50,000",
            features: [
                "Helicopter arrival or departure",
                "30 minutes flight time",
                "Red carpet landing arrangement",
                "Professional photography coordination",
                "Decorated helicopter interior",
            ],
        },
        {
            name: "Premium Wedding Package",
            price: "Starting from ₹4,50,000",
            features: [
                "Round trip helicopter service",
                "Multiple location transfers",
                "Aerial photography session",
                "Flower petal dropping ceremony",
                "Luxury interior decoration",
                "Champagne service onboard",
            ],
        },
        {
            name: "Luxury Wedding Package",
            price: "Custom Pricing",
            features: [
                "Full-day helicopter availability",
                "Multiple helicopters for guests",
                "Professional videography crew",
                "Customized flight routes",
                "Premium decoration and setup",
                "Dedicated event coordinator",
            ],
        },
    ];

    return (
        <>
            {/* SEO */}
            <Head>
                <title>
                    Wedding Helicopter Services | Luxury Wedding Charter | Book My Charter
                </title>
                <meta
                    name="description"
                    content="Make your wedding unforgettable with luxury helicopter services. Grand entrances, aerial photography, VIP guest transport, and pre-wedding shoots."
                />
                <meta
                    name="keywords"
                    content="wedding helicopter services, luxury wedding helicopter, wedding helicopter rental, aerial wedding photography"
                />
            </Head>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-pink-950/30 to-slate-950" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                                Wedding Helicopter
                            </span>
                            <br />
                            <span className="text-white">Services</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Make your special day truly unforgettable with luxury helicopter
                            services.
                        </p>
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        src="https://images.unsplash.com/photo-1632990603137-06a1085e6c8e"
                        alt="Wedding helicopter"
                        className="mt-12 w-full h-[500px] object-cover rounded-2xl"
                    />
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
                            >
                                <Icon className="w-8 h-8 text-pink-400 mb-4" />
                                <h3 className="text-xl font-bold text-white">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-sm mt-2">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Packages */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {pkg.name}
                            </h3>
                            <p className="text-3xl font-bold text-rose-400 mb-6">
                                {pkg.price}
                            </p>

                            <ul className="space-y-2 mb-6">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex text-slate-300 text-sm">
                                        <Check className="w-4 h-4 text-green-400 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/booking">
                                <Button className="w-full">
                                    Book This Package
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Make Your Wedding Day Extraordinary
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
            </section>
        </>
    );
}
