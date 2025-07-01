import { motion } from "motion/react";
import Carousel from "@/components/custom/Carousal";

export function BestWork() {
    return (
        <div
            className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
            <div
                className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div
                    className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="px-4 py-10 md:py-20 w-full">
                <h1 className="relative z-10 mx-auto max-w-4xl text-center">
                    {/* Top line: THE EDITOR */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl lg:text-6xl font-extrabold text-blue-500 dark:text-blue-400 blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,1)]"
                    >
                        My Best Work
                    </motion.div>
                </h1>

                <div className="px-4 mt-10 md:mt-16 w-full flex justify-center">
                    <Carousel />
                </div>
            </div>
        </div>
    )
}