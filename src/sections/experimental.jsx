import { motion } from "framer-motion";
import thisWeekVideo from "/videos/this-week-video.mp4";
import { CustomVideoPlayer2 } from "@/components/custom/CustomVideoPlayer2"; // ✅ Make sure this path matches where you put the component

export function Experimental() {
    return (
        <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute right-0 ml-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>

            <div className="px-4 py-10 md:py-20 w-full flex md:flex-row flex-col gap-10">
                <div>
                    <h1 className="relative z-10 mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl lg:text-6xl font-extrabold text-blue-500 dark:text-blue-400 blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,1)]"
                        >
                            Experiment
                            <br />
                            <span className="inline-block pt-2">
                                This Week
                            </span>
                        </motion.div>
                    </h1>
                    <p className="text-lg pt-8 max-w-2xl mx-auto">
                        Every week or two, I experiment with new styles and techniques. This week, with Coca-Cola making waves in their campaigns, I thought, why not create an ad that fits their vibe?
                    </p>
                </div>
                <div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1,
                        }}
                        className="relative z-10 rounded-3xl border border-neutral-200 bg-neutral-100 p-2 md:p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                        <div
                            className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
                            <CustomVideoPlayer2 videoUrl={thisWeekVideo} posterUrl={`  /videos/this-week-video-thumbnail.png`} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
