'use client'

import { motion } from 'framer-motion'

export default function LoadingSpinner({ fullScreen = true, size = 'md' }) {
    const sizes = {
        sm: { wrapper: 'w-12 h-12', ring: 'border-2', text: 'text-xs' },
        md: { wrapper: 'w-20 h-20', ring: 'border-3', text: 'text-sm' },
        lg: { wrapper: 'w-28 h-28', ring: 'border-4', text: 'text-lg' },
    }
    const s = sizes[size]

    const spinner = (
        <div className="flex flex-col items-center gap-4">
            <div className={`relative ${s.wrapper} flex items-center justify-center`}>
                {/* static track */}
                <div className={`absolute inset-0 rounded-full ${s.ring} border-gray-200`} />

                {/* spinning ring */}
                <motion.div
                    className={`absolute inset-0 rounded-full ${s.ring} border-transparent border-t-cyan-500 border-r-cyan-500`}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {/* static logo mark */}
                <span className={`font-playFair font-semibold text-cyan-500 ${s.text}`}>
                    V
                </span>
            </div>

            {fullScreen && (
                <span className="text-xs uppercase tracking-[0.25em] text-[#6C696D] font-semibold">
                    Loading
                </span>
            )}
        </div>
    )

    if (!fullScreen) return spinner

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            {spinner}
        </div>
    )
}