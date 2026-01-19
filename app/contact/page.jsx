"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageSquare,
} from "lucide-react";

export default function Contact() {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Office Address",
            content: ["C705 Dwarka Sec 7", "Delhi 110077", "India"],
            link: "https://maps.google.com/?q=C705+Dwarka+Sec+7+Delhi+110077",
        },
        {
            icon: Phone,
            title: "Phone Number",
            content: ["+91 9667370747"],
            link: "tel:+919667370747",
        },
        {
            icon: Mail,
            title: "Email Address",
            content: ["info@bookmycharter.com"],
            link: "mailto:info@bookmycharter.com",
        },
        {
            icon: Clock,
            title: "Working Hours",
            content: ["24/7 Emergency Services", "Office: 9 AM - 6 PM (Mon-Sat)"],
            link: null,
        },
    ];

    return (
        <>
            {/* SEO */}
            <Head>
                <title>
                    Contact Book My Charter | Helicopter Booking Delhi | +91 9667370747
                </title>
                <meta
                    name="description"
                    content="Contact Book My Charter for helicopter booking and charter services in Delhi. Call +91 9667370747 or email info@bookmycharter.com."
                />
                <meta
                    name="keywords"
                    content="contact Book My Charter, helicopter booking Delhi, helicopter charter contact"
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
                                Contact
                            </span>{" "}
                            <span className="text-white">Us</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Get in touch with us for helicopter booking inquiries, quotes, or
                            service details.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
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
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {info.title}
                                    </h3>

                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            target={
                                                info.link.startsWith("http")
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300"
                                        >
                                            {info.content.map((line, idx) => (
                                                <p key={idx} className="text-sm">
                                                    {line}
                                                </p>
                                            ))}
                                        </a>
                                    ) : (
                                        info.content.map((line, idx) => (
                                            <p key={idx} className="text-slate-400 text-sm">
                                                {line}
                                            </p>
                                        ))
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Map & Quick Contact */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                                Find Us on Map
                            </h2>
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=77.0200%2C28.5800%2C77.0300%2C28.5900&layer=mapnik&marker=28.5850%2C77.0250"
                                    className="w-full h-full grayscale"
                                    loading="lazy"
                                    title="Book My Charter Location"
                                />
                            </div>
                            <p className="text-slate-400 text-sm mt-4">
                                C705 Dwarka Sec 7, Delhi 110077, India
                            </p>
                        </motion.div>

                        {/* Quick Contact */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                <MessageSquare className="w-6 h-6 text-amber-400 mr-3" />
                                Quick Contact
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        For Bookings & Inquiries
                                    </h3>
                                    <a
                                        href="tel:+919667370747"
                                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent"
                                    >
                                        +91 9667370747
                                    </a>
                                </div>

                                <div className="border-t border-slate-700 pt-6">
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        Email Us
                                    </h3>
                                    <a
                                        href="mailto:info@bookmycharter.com"
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        info@bookmycharter.com
                                    </a>
                                </div>

                                <div className="border-t border-slate-700 pt-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">
                                        Emergency Services
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-3">
                                        Available 24/7 for urgent medical evacuations.
                                    </p>
                                    <a
                                        href="tel:+919667370747"
                                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg"
                                    >
                                        Emergency Hotline
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-950 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Ready to Book Your Flight?
                </h2>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a href="tel:+919667370747">
                        <button className="bg-white text-blue-600 px-8 py-6 rounded-lg font-semibold">
                            <Phone className="inline w-5 h-5 mr-2" />
                            Call Now
                        </button>
                    </a>
                    <a href="mailto:info@bookmycharter.com">
                        <button className="border-2 border-white text-white px-8 py-6 rounded-lg font-semibold">
                            <Mail className="inline w-5 h-5 mr-2" />
                            Send Email
                        </button>
                    </a>
                </div>
            </section>
        </>
    );
}
