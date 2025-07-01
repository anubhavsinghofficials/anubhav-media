import { motion } from "motion/react";

export function ContactMe() {
    return (
        <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>

            <div className="px-4 py-10 md:py-20 w-full">
                <h1 className="relative z-10 mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl lg:text-6xl font-extrabold text-blue-500 dark:text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,1)]"
                    >
                        Ready to take your content to a new level?
                    </motion.div>
                </h1>

                {/* Button Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto px-4 py-8 mt-8">
                    {/* X Button */}
                    <a
                        href="https://x.com/yourhandle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-neutral-800 text-white shadow-md hover:shadow-lg transition-all"
                    >
                        <img src="/src/assets/icons/x.png" alt="X" className="w-5 h-5" />
                        <span className="font-semibold">DM me on X</span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/yourwhatsapplink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-green-500 text-white shadow-md hover:shadow-lg transition-all"
                    >
                        <img src="/src/assets/icons/whatsapp.png" alt="Whatsapp" className="w-5 h-5" />
                        <span className="font-semibold">DM me on WhatsApp</span>
                    </a>

                    {/* Calendly Button */}
                    <a
                        href="https://calendly.com/yourmeetinglink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#006BFF] text-white shadow-md hover:shadow-lg transition-all"
                    >
                        <img src="/src/assets/icons/calendly.png" alt="Calendly" className="w-5 h-5" />
                        <span className="font-semibold">Schedule a Meeting</span>
                    </a>

                    {/* Email Button */}
                    <a
                        href="mailto:youremail@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-red-600 text-white shadow-md hover:shadow-lg transition-all"
                    >
                        <img src="/src/assets/icons/gmail.png" alt="Email" className="w-5 h-5" />
                        <span className="font-semibold">Reach out to me on Email</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
