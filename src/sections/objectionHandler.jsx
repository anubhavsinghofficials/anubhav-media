import { motion } from "framer-motion";

export function ObjectionHandler() {
    const objections = [
        "who don't deliver on time.",
        "who don't get my vision and keep asking too many questions.",
        "whose videos get zero views after uploading.",
    ];

    const response = [
        "Don’t you worry 😊 I get your vision and deliver fast - with videos that actually perform, not just exist ✅",
        "And don't take my word for it... Ask my clients 👇🏼",
    ];

    return (
        <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute right-0 ml-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>

            <div className="px-4 py-10 md:py-20 w-full">
                <div className="absolute inset-0 z-0">
                    <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <h1 className="relative z-10 mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl lg:text-6xl font-extrabold text-blue-500 dark:text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,1)]"
                    >
                        But Anubhav...
                    </motion.div>
                </h1>

                {/* Objection Chat Box */}
                <div className="mt-10 md:mt-20 flex flex-col items-start space-y-4 px-4 sm:px-8 md:px-16 lg:px-24">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-[80%] md:max-w-[60%] rounded-xl bg-[#1C1F22] px-5 py-4 text-sm md:text-lg text-white shadow-md backdrop-blur-md"
                    >
                        <div className="absolute left-2 top-0 h-0 w-0 -translate-y-[0.55rem] -translate-x-2 border-r-[18px] border-t-[18px] border-b-[18px] border-r-[#1C1F22] border-t-transparent border-b-transparent -rotate-90" />

                        😭 I'm tired of Editors
                    </motion.div>
                    {objections.map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="max-w-[80%] md:max-w-[60%] rounded-xl  bg-[#1C1F22] px-5 py-4 text-sm md:text-lg text-white shadow-md backdrop-blur-md"
                        >
                            <div className="absolute left-2 top-0 h-0 w-0 -translate-y-[0.55rem] -translate-x-2 border-r-[18px] border-t-[18px] border-b-[18px] border-r-[#1C1F22] border-t-transparent border-b-transparent -rotate-90" />

                            ❌ {text}
                        </motion.div>
                    ))}
                    {response.map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (objections.length + index) * 0.2 }}
                            className="self-end max-w-[80%] md:max-w-[60%] rounded-xl bg-[#114AC9] px-5 py-4 text-sm md:text-lg text-white shadow-md backdrop-blur-md"
                        >
                            <div className="absolute right-2 top-0 h-0 w-0 -translate-y-[0.55rem] translate-x-2 border-l-[18px] border-t-[18px] border-b-[18px] border-l-[#114AC9] border-t-transparent border-b-transparent rotate-90" />
                            {text}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
