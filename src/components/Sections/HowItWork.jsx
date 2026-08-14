'use client'

import { motion } from 'framer-motion'
import {
    MdOutlineSearch,
    MdOutlineTune,
    MdOutlineCreditCard,
    MdOutlineLuggage,
} from 'react-icons/md'

const steps = [
    {
        icon: MdOutlineSearch,
        number: '01',
        title: 'Search',
        desc: 'Tell us where, when, and how many — we surface destinations that match your plan.',
    },
    {
        icon: MdOutlineTune,
        number: '02',
        title: 'Customize',
        desc: 'Filter by budget, duration, and interests to shape the trip around you.',
    },
    {
        icon: MdOutlineCreditCard,
        number: '03',
        title: 'Book Securely',
        desc: 'Confirm your dates and pay safely — no hidden charges, ever.',
    },
    {
        icon: MdOutlineLuggage,
        number: '04',
        title: 'Travel',
        desc: 'Pack your bags — we handle the rest, with support available around the clock.',
    },
]

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const stepVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HowItWorks() {
    return (
        <section className=" py-30">
            <div className="w-11/12 max-w-360 mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-500 font-semibold">
                        Simple Process
                    </span>
                    <h2 className="text-2xl md:text-4xl font-medium font-playFair mt-1">
                        How It Works
                    </h2>
                    <p className="text-sm md:text-base text-[#6C696D] mt-2">
                        Four simple steps between you and your next adventure.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-16"
                >
                    {/* connecting line - desktop only */}
                    <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gray-300" />

                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={index}
                                variants={stepVariants}
                                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                            >
                                <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500 text-white shrink-0">
                                    <Icon className="text-xl" />
                                </div>

                                <span className="text-xs font-mono text-cyan-500 tracking-widest mt-4">
                                    STEP {step.number}
                                </span>
                                <h3 className="text-lg md:text-xl font-medium font-playFair mt-1">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[#6C696D] mt-2 leading-relaxed max-w-[220px] lg:max-w-none">
                                    {step.desc}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}