import React from 'react'
import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

const TaskInsightCard = () => {
    // Analytics bar data
    const chartData = [40, 70, 45, 60, 75, 50, 30, 65, 55, 70, 65];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="  p-6  relative overflow-hidden"
        >



            {/* Bottom: Analytics Bar Chart */}
            <div className="bg-white rounded-2xl p-5 ">
                <div className="flex items-center justify-between gap-12 mb-6">
                    <h5 className="text-slate-800 font-medium text-xs">Analytics Bar</h5>
                    <span className="text-slate-900 text-[9px] font-medium uppercase">Mar 25 - Apr 20</span>
                </div>

                <div className="flex items-end justify-between h-24 gap-1.5 px-1">
                    {chartData.map((height, index) => (
                        <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            transition={{ delay: 0.2 + index * 0.05, duration: 0.8 }}
                            className="flex-1 bg-indigo-500 rounded-full min-w-[6px]"
                        />
                    ))}
                </div>
            </div>

            {/* Subtle bottom gradient glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-200/20 blur-3xl -z-10 rounded-full"></div>
        </motion.div>
    )
}

export default TaskInsightCard
