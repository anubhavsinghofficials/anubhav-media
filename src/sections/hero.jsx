import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "motion/react";
import vslVideoUrl from "@/assets/anubhav_vsl.mp4";
import { CustomVideoPlayer } from "@/components/custom/CustomVideoPlayer"; // ✅ Make sure this path matches where you put the component

export function HeroSectionOne() {
  return (
    <div
      className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <Navbar />
      <div
        className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div
          className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div
        className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div
          className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div
          className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Top line: THE EDITOR */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-500 dark:text-blue-400 blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,1)]"
          >
            THE EDITOR
            <Spotlight />

          </motion.div>

          <motion.svg
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewBox="0 0 180 10"
            className="mx-auto -mt-1 w-[80%] md:w-[60%] lg:w-[50%] blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,1)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 5 C45 14, 135 0, 175 5"
              stroke="url(#paint0_linear)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </motion.svg>


          {/* Bottom line: you wish you found sooner !! */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-1 md:mt-2 text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300"
          >
            you wish you found sooner..
          </motion.div>
        </h1>

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
          className="relative z-10 mt-8 md:mt-16 rounded-3xl border border-neutral-200 bg-neutral-100 p-2 md:p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <div
            className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <CustomVideoPlayer videoUrl={vslVideoUrl} posterUrl={`/src/assets/vsl-thumbnail-2.png`} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav
      className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="/src/assets/anubhav-profile-pic.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-base font-bold md:text-2xl">Anubhav Singh</h1>
      </div>
    </nav>
  );
};
