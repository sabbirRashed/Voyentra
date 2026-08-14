'use client'

import { motion } from 'framer-motion'
import {
    MdOutlineExplore,
    MdOutlineVerifiedUser,
    MdOutlineSupportAgent,
    MdOutlinePayments,
    MdOutlineStarRate,
    MdOutlineFlightTakeoff,
} from 'react-icons/md'

const features = [
    {
        icon: MdOutlineExplore,
        title: 'Curated Destinations',
        desc: 'Every location is handpicked and verified by our travel experts, so you never end up somewhere that looks nothing like the photos.',
    },
    {
        icon: MdOutlinePayments,
        title: 'Best Price Guarantee',
        desc: 'We match you with the most competitive rates across our partner network — no hidden fees, no last-minute surprises.',
    },
    {
        icon: MdOutlineSupportAgent,
        title: '24/7 Travel Support',
        desc: 'From booking to boarding, our support team is one message away, wherever you are in the world.',
    },
    {
        icon: MdOutlineVerifiedUser,
        title: 'Secure Booking',
        desc: 'Your payments and personal data are protected with industry-standard encryption on every transaction.',
    },
    {
        icon: MdOutlineStarRate,
        title: 'Verified Reviews',
        desc: 'Real feedback from real travelers helps you plan with confidence, not guesswork.',
    },
    {
        icon: MdOutlineFlightTakeoff,
        title: 'Effortless Planning',
        desc: 'Search, compare, and book your entire trip in minutes with our streamlined planning tools.',
    },
]

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function WhyChooseUs() {
    return (
        <section className="bg-cyan-300/10 py-30">
            <div className="w-11/12 max-w-360 mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-500 font-semibold">
                        Why Voyentra
                    </span>
                    <h2 className="text-2xl md:text-4xl font-medium font-playFair mt-1">
                        Why Choose Voyentra
                    </h2>
                    <p className="text-sm md:text-base text-[#6C696D] mt-2">
                        We handle the details so you can focus on the experience — from planning to landing.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-14"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group p-6 md:p-8 border border-gray-200 bg-white hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
                            >
                                <div className="w-12 h-12 flex items-center justify-center border border-cyan-500/30 bg-cyan-50 group-hover:bg-cyan-500 transition-colors duration-300">
                                    <Icon className="text-2xl text-cyan-500 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg md:text-xl font-medium font-playFair mt-5">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[#6C696D] mt-2 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}