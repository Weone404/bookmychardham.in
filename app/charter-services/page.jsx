"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Briefcase,
    Building2,
    Camera,
    Headphones,
    Check,
    Phone,
} from "lucide-react";
import { Button } from "../../component/iu/button";

export default function CharterServices() {
    const services = [
        {
            icon: Briefcase,
            title: "Corporate Charter",
            description:
                "Executive transport for business meetings, conferences, and site visits",
        },
        {
            icon: Building2,
            title: "VIP Transport",
            description:
                "Premium helicopter services for dignitaries and VIP guests",
        },
        {
            icon: Camera,
            title: "Aerial Photography",
            description:
                "Professional aerial filming for movies, advertisements, and events",
        },
        {
            icon: Headphones,
            title: "Emergency Services",
            description:
                "Medical evacuation and emergency response helicopter services",
        },
    ];

    const features = [
        "Flexible scheduling and routing",
        "Modern, well-maintained fleet",
        "Experienced and certified pilots",
        "Premium in-flight amenities",
        "Competitive pricing packages",
        "24/7 customer support",
    ];

    return (
        <>
            {/* SEO */}
            <Head>
                <title>
                    Helicopter Charter Services Delhi | Corporate & VIP Helicopter Rental
                </title>
                <meta
                    name="description"
                    content="Premium helicopter charter services in Delhi for corporate travel, VIP transport, aerial photography, and emergency medical services."
                />
                <meta
                    name="keywords"
                    content="helicopter charter Delhi, corporate helicopter rental, VIP helicopter services, emergency helicopter services"
                />
            </Head>

            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Professional Charter
                            </span>
                            <br />
                            <span className="text-white">Services</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Comprehensive helicopter charter solutions for business,
                            emergencies, and specialized requirements.
                        </p>
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        src="https://images.unsplash.com/photo-1558597576-f1a962543f35"
                        alt="Corporate helicopter charter"
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
                                <Icon className="w-8 h-8 text-indigo-400 mb-4" />
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

            {/* Corporate */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">
                            Corporate Helicopter Charter Solutions
                        </h2>
                        <ul className="space-y-3 mb-6">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex text-slate-300">
                                    <Check className="w-5 h-5 text-green-400 mr-3" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/booking">
                            <Button size="lg">
                                Request Corporate Quote
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        src="https://images.unsplash.com/flagged/photo-1568098528295-ba158ae650d2"
                        alt="Corporate helicopter travel"
                        className="rounded-2xl shadow-2xl"
                    />
                </div>
            </section>

            {/* Emergency CTA */}
            <section className="py-20 bg-slate-900 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                    24/7 Emergency Medical Evacuation
                </h2>
                <a href="tel:+919667370747">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                        <Phone className="w-5 h-5 mr-2" />
                        Emergency Hotline
                    </Button>
                </a>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-slate-950 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Get Your Custom Charter Quote
                </h2>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Link href="/booking">
                        <Button size="lg">Request a Quote</Button>
                    </Link>
                    <a href="tel:+919667370747">
                        <Button variant="outline" size="lg">
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                        </Button>
                    </a>
                </div>
            </section>
        </>
    );
}
