"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Sparkles,
    Heart,
    Cloud,
    Calendar,
    Check,
    Phone,
} from "lucide-react";
import { Button } from "../../component/iu/button";

export default function FlowerDropping() {
    const occasions = [
        {
            icon: Heart,
            title: "Memorial Services",
            description:
                "Respectful aerial flower tributes for memorial ceremonies",
        },
        {
            icon: Calendar,
            title: "Special Events",
            description:
                "Grand openings, festivals, and celebration ceremonies",
        },
        {
            icon: Sparkles,
            title: "Religious Ceremonies",
            description:
                "Devotional flower offerings from the sky",
        },
        {
            icon: Cloud,
            title: "Custom Requests",
            description:
                "Personalized flower dropping for any special occasion",
        },
    ];

    const packages = [
        {
            name: "Basic Package",
            price: "Starting from ₹75,000",
            features: [
                "Single helicopter service",
                "Up to 50kg fresh flowers",
                "15 minutes flight duration",
                "Standard flower varieties",
                "Basic photography coordination",
            ],
        },
        {
            name: "Premium Package",
            price: "Starting from ₹1,50,000",
            features: [
                "Single helicopter service",
                "Up to 150kg premium flowers",
                "30 minutes flight duration",
                "Choice of exotic flowers",
                "Professional videography",
                "Custom flight patterns",
            ],
        },
        {
            name: "Grand Package",
            price: "Custom Pricing",
            features: [
                "Multiple helicopters",
                "Unlimited fresh flowers",
                "Extended flight time",
                "Designer flower arrangements",
                "Full media coverage",
                "Synchronized dropping ceremony",
            ],
        },
    ];

    return (
        <>
            {/* SEO */}
            <Head>
                <title>
                    Aerial Flower Dropping Services | Helicopter Flower Ceremony | Book My Charter
                </title>
                <meta
                    name="description"
                    content="Professional aerial flower dropping services for memorial ceremonies, special events, and religious occasions."
                />
                <meta
                    name="keywords"
                    content="flower dropping helicopter, aerial flower ceremony, memorial flower dropping, helicopter flower service"
                />
            </Head>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-950" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                                Aerial Flower Dropping
                            </span>
                            <br />
                            <span className="text-white">Services</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Create breathtaking moments with professional aerial flower
                            dropping services.
                        </p>
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        src="https://images.unsplash.com/photo-1500777455000-fb215fd0eb62"
                        alt="Helicopter flower dropping"
                        className="mt-12 w-full h-[500px] object-cover rounded-2xl"
                    />
                </div>
            </section>

            {/* Occasions */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {occasions.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
                            >
                                <Icon className="w-8 h-8 text-amber-400 mb-4" />
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
                            <p className="text-3xl font-bold text-orange-400 mb-6">
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
                    Create a Memorable Ceremony
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
