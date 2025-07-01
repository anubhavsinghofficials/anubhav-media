import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function CustomVideoPlayer2({ videoUrl, posterUrl }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [progress, setProgress] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const hideTimeout = useRef(null);

    // Track fullscreen status (optional, not used directly)
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    // useEffect(() => {
    //     const handleKeyDown = (e) => {
    //         if (e.code === "Space") {
    //             e.preventDefault();
    //             togglePlay();
    //         }
    //     };

    //     window.addEventListener("keydown", handleKeyDown);
    //     return () => window.removeEventListener("keydown", handleKeyDown);
    // }, []);


    const handleMouseMove = () => {
        setShowControls(true);
        clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => {
            setShowControls(false);
        }, 2000); // 3 seconds
    };

    const toggleFullscreen = () => {
        const video = videoRef.current;
        if (!video) return;

        const wrapper = video.parentElement;

        if (!document.fullscreenElement) {
            wrapper.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;

        const current = (video.currentTime / video.duration) * 100;
        setProgress(current || 0);
    };

    const handleSeek = (e) => {
        const video = videoRef.current;
        if (!video) return;

        const newTime = (e.target.value / 100) * video.duration;
        video.currentTime = newTime;
    };

    const handleVolume = (e) => {
        const vol = parseFloat(e.target.value);
        setVolume(vol);
        if (videoRef.current) videoRef.current.volume = vol;
    };

    const handleVideoEnd = () => {
        const video = videoRef.current;
        if (!video) return;

        video.currentTime = 0;  // rewind to beginning
        video.pause();          // pause to trigger poster
        video.load();             // ← this reloads poster image
        setIsPlaying(false);    // update UI
    };


    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]);

    return (
        <div className="relative">
            <div
                onMouseMove={handleMouseMove}
                className={`relative w-full h-96 md:h-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 aspect-[16/9] ${showControls ? "" : "cursor-none"
                    }`}
            >
                <video
                    ref={videoRef}
                    src={videoUrl}
                    onClick={togglePlay}
                    onTimeUpdate={handleTimeUpdate}
                    playsInline
                    onEnded={handleVideoEnd}
                    poster={posterUrl}
                    className="h-full w-full object-contain"
                />

                {/* Custom Controls */}
                <div
                    className={`absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-white/10 backdrop-blur-sm p-4 flex items-center justify-between gap-4 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Play/Pause */}
                    <button
                        onClick={togglePlay}
                        className="text-white dark:text-white hover:scale-110 transition-transform"
                    >
                        {isPlaying ? <Pause size={22} /> : <Play size={22} />}
                    </button>

                    {/* Progress */}
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={progress}
                        onChange={handleSeek}
                        className="w-full h-1 accent-blue-500 cursor-pointer"
                    />

                    {/* Volume */}
                    <div className="flex items-center gap-2">
                        {volume > 0 ? (
                            <Volume2 size={20} className="text-white dark:text-white" />
                        ) : (
                            <VolumeX size={20} className="text-white dark:text-white" />
                        )}
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                            value={volume}
                            onChange={handleVolume}
                            className="w-24 accent-blue-500 cursor-pointer"
                        />
                    </div>

                    {/* Fullscreen */}
                    <button
                        onClick={toggleFullscreen}
                        className="cursor-pointer text-white dark:text-white hover:scale-110 transition-transform"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 3H5a2 2 0 00-2 2v3m0 8v3a2 2 0 002 2h3m8-18h3a2 2 0 012 2v3m0 8v3a2 2 0 01-2 2h-3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
