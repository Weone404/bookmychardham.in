"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
    Shield,
    Award,
    Users,
    Target,
    Heart,
    TrendingUp,
} from "lucide-react";

export default function About() {
    const values = [
        {
            icon: Shield,
            title: "Safety First",
            description:
                "Uncompromising commitment to safety standards and regular maintenance",
        },
        {
            icon: Award,
            title: "Excellence",
            description:
                "Delivering exceptional service quality in every flight we operate",
        },
        {
            icon: Heart,
            title: "Customer Care",
            description:
                "Personalized attention and support for every client",
        },
        {
            icon: TrendingUp,
            title: "Innovation",
            description:
                "Adopting latest technology and best practices in aviation",
        },
    ];

    const stats = [
        { number: "10+", label: "Years Experience" },
        { number: "5000+", label: "Successful Flights" },
        { number: "100%", label: "Safety Record" },
        { number: "24/7", label: "Customer Support" },
    ];

    return (
        <>
            {/* SEO */}
            <Head>
                <title>
                    About Book My Charter | Professional Helicopter Charter Services
                </title>
                <meta
                    name="description"
                    content="Book My Charter is a leading helicopter charter service provider in Delhi with over 10 years of experience."
                />
                <meta
                    name="keywords"
                    content="about Book My Charter, helicopter charter company Delhi, professional helicopter services"
                />
            </Head>

            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                                About
                            </span>{" "}
                            <span className="text-white">Book My Charter</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            India&apos;s trusted partner for premium helicopter charter
                            services, delivering excellence since 2015.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <p className="text-slate-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Story */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">
                            Our <span className="text-amber-400">Story</span>
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Book My Charter was founded to make premium helicopter services
                                accessible and reliable across India.
                            </p>
                            <p>
                                From pilgrimages and weddings to corporate travel and emergency
                                evacuations, we serve diverse aviation needs.
                            </p>
                            <p>
                                Our modern fleet and experienced pilots ensure every journey is
                                safe, comfortable, and memorable.
                            </p>
                        </div>
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        src="https://images.unsplash.com/photo-1576948238627-b4bf82824ea6"
                        alt="Book My Charter team and helicopter fleet"
                        className="rounded-2xl shadow-2xl"
                    />
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
                                >
                                    <Icon className="w-8 h-8 text-blue-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        src="https://images.unsplash.com/photo-1703902641446-130c6b6b1d42"
                        alt="Helicopter maintenance and operations"
                        className="rounded-2xl shadow-2xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-6">
                            <Target className="w-12 h-12 text-blue-400 mr-4" />
                            <h2 className="text-4xl font-bold text-white">
                                Our <span className="text-amber-400">Mission</span>
                            </h2>
                        </div>
                        <p className="text-slate-300 text-lg mb-6">
                            To deliver safe, reliable, and exceptional helicopter charter
                            services while exceeding customer expectations.
                        </p>
                        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                            <div className="flex items-center mb-4">
                                <Users className="w-10 h-10 text-amber-400 mr-4" />
                                <h3 className="text-2xl font-bold text-white">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-slate-300">
                                To be India&apos;s most trusted helicopter charter service
                                provider.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
