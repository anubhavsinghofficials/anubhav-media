import { useState, useRef, useEffect } from 'react';
// import { CustomVideoPlayer } from "@/components/custom/CustomVideoPlayer"; // ✅ Make sure this path matches where you put the component
import { CustomVideoPlayer2 } from "@/components/custom/CustomVideoPlayer2"; // ✅ Make sure this path matches where you put the component

import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaTrigger,
} from "@/components/ui/credenza"

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const containerRef = useRef(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Sample data - replace with your content
  const items = [
    { title: 'Health & Fitness', subtitle: 'Youtube Short', image: '/videos/health-thumbnail.png', videoUrl: '/videos/health.mp4' },
    { title: 'Motivational', subtitle: 'Instagram Reel', image: '/videos/motivational-thumbnail.png', videoUrl: '/videos/motivational.mp4' },
    { title: 'Business Promo', subtitle: 'Facebook Advertisement', image: '/videos/business-promo-thumbnail.png', videoUrl: '/videos/business-promo.mp4' },
    { title: 'Channel Trailer', subtitle: 'Youtube Video', image: '/videos/channel-trailer-thumbnail.png', videoUrl: '/videos/channel-trailer.mp4' },
    { title: 'Festival Promo', subtitle: 'Instagram Reel', image: '/videos/festival-promo-thumbnail.png', videoUrl: '/videos/festival-promo.mp4' },
    { title: 'Tech & Ai', subtitle: 'TikTok Video', image: '/videos/tech-thumbnail.png', videoUrl: '/videos/tech.mp4' },
    { title: 'Travel Advertisement', subtitle: 'Facebook Advertisement', image: '/videos/travel-ad-thumbnail.png', videoUrl: '/videos/travel-ad.mp4' },
  ];

  // Get the actual item width including margin
  const getItemWidth = () => {
    if (!containerRef.current) return 256 + 16; // fallback
    const firstItem = containerRef.current.querySelector('.carousel-item');
    if (!firstItem) return 256 + 16; // fallback
    const styles = window.getComputedStyle(firstItem);
    const width = firstItem.offsetWidth;
    const marginRight = parseFloat(styles.marginRight);
    return width + marginRight;
  };

  // Update scroll position indicators
  const updateScrollPosition = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const itemWidth = getItemWidth();

    // Calculate current index based on scroll position
    const calculatedIndex = Math.round(scrollLeft / itemWidth);

    setCurrentIndex(calculatedIndex);
    setIsAtStart(scrollLeft <= 5); // Small threshold for floating point precision
    setIsAtEnd(scrollLeft >= maxScrollLeft - 5);
  };

  // Add scroll event listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollPosition);
    // Initial position check
    updateScrollPosition();

    return () => {
      container.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    const x = e.touches[0].clientX;
    const walk = (startX.current - x) * 2;
    containerRef.current.scrollLeft = scrollLeft.current + walk;
  };

  const handleTouchEnd = () => {
    if (!containerRef.current) return;
    const itemWidth = getItemWidth();
    const newIndex = Math.round(containerRef.current.scrollLeft / itemWidth);
    const clampedIndex = Math.max(0, Math.min(newIndex, items.length - 1));

    containerRef.current.scrollTo({
      left: clampedIndex * itemWidth,
      behavior: 'smooth'
    });
  };

  const goToSlide = (index) => {
    if (!containerRef.current) return;
    const itemWidth = getItemWidth();
    containerRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  };

  const goNext = () => {
    if (currentIndex < items.length - 1) {
      goToSlide(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[16rem] mr-4 snap-start carousel-item"
          >
            <Credenza>
              <CredenzaTrigger asChild>
                <div
                  className="w-full h-[24rem] rounded-2xl relative overflow-hidden bg-cover bg-center group cursor-pointer"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1 drop-shadow-lg">{item.title}</h3>
                    <p className="text-sm opacity-90 drop-shadow-md">{item.subtitle}</p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CredenzaTrigger>
              <CredenzaContent>
                <CredenzaBody>
                  <div className='mt-8'>

                  <CustomVideoPlayer2 videoUrl={item.videoUrl} posterUrl={item.image} />
                  </div>

                  <div className='mt-4 mb-20 md:mb-0 flex flex-col justify-center items-center'>
                    <p className='text-2xl font-bold text-sky-400'>{item.title}</p>
                    <p className='text-lg'>{item.subtitle}</p>
                  </div>
                </CredenzaBody>
              </CredenzaContent>
            </Credenza>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={goPrev}
          disabled={isAtStart}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2E8EFF] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Optional: Current slide indicator */}
        <div className="text-sm text-gray-500">
          {currentIndex + 1} / {items.length}
        </div>

        <button
          onClick={goNext}
          disabled={isAtEnd}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2E8EFF] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}