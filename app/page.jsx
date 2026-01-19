"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Plane,
    Shield,
    Clock,
    Award,
    Phone,
    Mountain,
    Heart,
    Sparkles,
} from "lucide-react";
import { Button } from "../component/iu/button.jsx";

/* ===============================
   DATA
================================ */
const services = [
    {
        icon: Mountain,
        title: "Chardham & Kedarnath Tours",
        description:
            "Experience divine journeys with our premium helicopter services to sacred pilgrimage sites.",
        link: "/chardham-kedarnath",
        gradient: "from-blue-600 to-cyan-600",
    },
    {
        icon: Heart,
        title: "Wedding Services",
        description:
            "Make your special day unforgettable with grand helicopter entrances and exits.",
        link: "/wedding-services",
        gradient: "from-pink-600 to-rose-600",
    },
    {
        icon: Sparkles,
        title: "Flower Dropping",
        description:
            "Aerial flower dropping ceremonies for special occasions and memorial services.",
        link: "/flower-dropping",
        gradient: "from-amber-600 to-orange-600",
    },
    {
        icon: Plane,
        title: "Charter Services",
        description:
            "Corporate charters, emergency medical evacuations, and custom flight solutions.",
        link: "/charter-services",
        gradient: "from-indigo-600 to-purple-600",
    },
];

const features = [
    {
        icon: Shield,
        title: "Safety First",
        description:
            "Certified pilots and well-maintained fleet ensuring maximum safety",
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description:
            "Round-the-clock service for emergency and scheduled flights",
    },
    {
        icon: Award,
        title: "Experienced Team",
        description:
            "Decades of combined experience in helicopter charter services",
    },
];

/* ===============================
   PAGE COMPONENT
================================ */
export default function HomePage() {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950" />

                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* TEXT */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
                                    Premium Helicopter
                                </span>
                                <br />
                                <span className="text-white">Charter Services</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8">
                                Experience luxury air travel with India&apos;s trusted helicopter
                                charter service.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/booking">
                                    <Button className="bg-gradient-to-r from-blue-600 to-amber-600 text-white px-8 py-6 text-lg">
                                        Book Your Flight
                                    </Button>
                                </Link>

                                <a href="tel:+919667370747">
                                    <Button
                                        variant="outline"
                                        className="border-2 border-blue-400 text-blue-400 px-8 py-6 text-lg"
                                    >
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Now
                                    </Button>
                                </a>
                            </div>
                        </motion.div>

                        {/* IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1684482609354-e0becc66f95e"
                                    alt="Luxury helicopter"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-amber-600 p-6 rounded-2xl text-white">
                                <p className="text-4xl font-bold">10+</p>
                                <p className="text-sm">Years Experience</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">
                        Our Premium Services
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <Link href={service.link}>
                                        <div className="bg-slate-800 rounded-2xl p-6 hover:border-blue-500 border border-slate-700 transition">
                                            <div
                                                className={`bg-gradient-to-br ${service.gradient} p-4 rounded-xl w-fit mb-4`}
                                            >
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm">
                                                {service.description}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                    <Image
                        src="https://images.unsplash.com/photo-1529100666390-42029dd2236d"
                        alt="Helicopter pilot"
                        width={600}
                        height={400}
                        className="rounded-2xl"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-white">
                            Why Choose{" "}
                            <span className="text-blue-400">Book My Charter?</span>
                        </h2>

                        <div className="space-y-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex gap-4 bg-slate-800 p-4 rounded-xl"
                                    >
                                        <div className="bg-gradient-to-br from-blue-600 to-amber-600 p-3 rounded-lg">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-amber-600 p-16 rounded-3xl">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Take Flight?
                    </h2>
                    <p className="text-white/90 mb-8">
                        Contact us today to book your helicopter charter.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/booking">
                            <Button className="bg-white text-blue-600 px-8 py-6">
                                Request a Quote
                            </Button>
                        </Link>

                        <a href="tel:+919667370747">
                            <Button variant="outline" className="border-white text-white px-8 py-6">
                                <Phone className="w-5 h-5 mr-2" />
                                +91 9667370747
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
