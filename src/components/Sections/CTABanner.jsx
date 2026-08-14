'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@heroui/react'
import { MdOutlineArrowForward } from 'react-icons/md'

export default function CtaBanner() {
    return (
        <section className="relative bg-[url('/assets/CTA_Banner.jpg')] bg-cover bg-center bg-no-repeat  overflow-hidden">
             {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-cyan-950/60 to-slate-950/85" />

            <div className="relative h-[380px] md:h-[520px] w-full">
             
                {/* content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
                >
                    <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                        Limited Time Offer
                    </span>
                    <h2 className="text-2xl md:text-4xl font-medium font-playFair mt-2 text-white max-w-2xl">
                        Your Next Adventure Is One Click Away
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 mt-3 max-w-xl">
                        Join thousands of travelers who've discovered their perfect getaway with Voyentra.
                    </p>

                    <div className=" mt-8">
                        <Link href="/destinations">
                            <Button className="rounded-none bg-cyan-500 text-white hover:bg-cyan-600 group">
                                Book Your Trip Today
                                <MdOutlineArrowForward className="transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}