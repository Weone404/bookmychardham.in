"use client";

import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
    Calendar,
    Users,
    MapPin,
    Phone,
    Mail,
    User,
    MessageSquare,
    Send,
} from "lucide-react";
import { Button } from "../../component/iu/button";
import { useToast } from "../../component/iu/use-toast";

export default function Booking() {
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        passengers: "",
        pickup: "",
        destination: "",
        message: "",
    });

    const services = [
        "Chardham & Kedarnath Tours",
        "Wedding Helicopter Services",
        "Flower Dropping",
        "Corporate Charter",
        "VIP Transport",
        "Emergency Medical Services",
        "Aerial Photography",
        "Other",
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

        bookings.push({
            ...formData,
            id: Date.now(),
            submittedAt: new Date().toISOString(),
        });

        localStorage.setItem("bookings", JSON.stringify(bookings));

        toast({
            title: "Request Submitted!",
            description:
                "Our team will contact you within 24 hours with a custom quote.",
        });

        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            date: "",
            passengers: "",
            pickup: "",
            destination: "",
            message: "",
        });
    };

    return (
        <>
            {/* SEO */}
            <Head>
                <title>Request Helicopter Quote | Book My Charter</title>
                <meta
                    name="description"
                    content="Request a helicopter charter quote for Chardham, weddings, corporate travel, emergency services and more. Fast response within 24 hours."
                />
            </Head>

            {/* HERO */}
            <section className="relative py-24 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 to-slate-950" />
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        Request a{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                            Helicopter Quote
                        </span>
                    </motion.h1>
                    <p className="text-slate-300 text-xl max-w-3xl mx-auto">
                        Share your travel details and receive a personalized helicopter
                        charter quote within 24 hours.
                    </p>
                </div>
            </section>

            {/* REQUEST A QUOTE */}
            <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl shadow-2xl p-8 md:p-12"
                    >
                        {/* Glow */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />

                        {/* Header */}
                        <div className="text-center mb-10">
                            <span className="inline-block mb-4 rounded-full bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
                                Helicopter Booking
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Request a{" "}
                                <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                                    Custom Quote
                                </span>
                            </h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                Our aviation experts will analyze your route and aircraft
                                options to give you the best price.
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            {[
                                { step: "01", title: "Fill Details" },
                                { step: "02", title: "Expert Review" },
                                { step: "03", title: "Get Quote" },
                            ].map((s) => (
                                <div
                                    key={s.step}
                                    className="rounded-2xl bg-slate-800/60 border border-slate-700 p-5 text-center"
                                >
                                    <div className="text-2xl font-bold text-blue-400 mb-2">
                                        {s.step}
                                    </div>
                                    <p className="text-white font-semibold">{s.title}</p>
                                </div>
                            ))}
                        </div>

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    icon={<User />}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                />
                                <Input
                                    icon={<Phone />}
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                />
                            </div>

                            <Input
                                icon={<Mail />}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                            />

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white"
                            >
                                <option value="">Select Service</option>
                                {services.map((s) => (
                                    <option key={s}>{s}</option>
                                ))}
                            </select>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    icon={<Calendar />}
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                                <Input
                                    icon={<Users />}
                                    type="number"
                                    name="passengers"
                                    value={formData.passengers}
                                    onChange={handleChange}
                                    placeholder="Passengers"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    icon={<MapPin />}
                                    name="pickup"
                                    value={formData.pickup}
                                    onChange={handleChange}
                                    placeholder="Pickup Location"
                                />
                                <Input
                                    icon={<MapPin />}
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    placeholder="Destination"
                                />
                            </div>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Additional details"
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white resize-none"
                            />

                            <Button
                                type="submit"
                                className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 shadow-xl shadow-blue-500/30"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Get My Quote
                            </Button>

                            <p className="text-center text-sm text-slate-400">
                                🔒 No spam. Your information is safe.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="py-20 bg-slate-950 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Need Immediate Assistance?
                </h2>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a href="tel:+919667370747">
                        <Button size="lg">
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                        </Button>
                    </a>
                    <a href="mailto:info@bookmycharter.com">
                        <Button size="lg" variant="outline">
                            <Mail className="w-5 h-5 mr-2" />
                            Email Us
                        </Button>
                    </a>
                </div>
            </section>
        </>
    );
}

/* Reusable Input */
function Input({ icon, ...props }) {
    return (
        <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
                {icon}
            </span>
            <input
                {...props}
                required
                className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 outline-none"
            />
        </div>
    );
}
