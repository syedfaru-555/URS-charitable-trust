import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (items.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
      {/* Main Carousel Container */}
      <div className="relative h-96 md:h-[500px]">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 transform translate-x-0'
                : index < currentIndex
                ? 'opacity-0 transform -translate-x-full'
                : 'opacity-0 transform translate-x-full'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              {item.category && (
                <span className="inline-block bg-blue-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {item.category}
                </span>
              )}
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-poppins">
                {item.title}
              </h3>
              <p className="text-lg opacity-90 max-w-2xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Play/Pause Button */}
      {autoPlay && (
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
      )}

      {/* Dots Indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-blue-500 transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % autoPlayInterval) / autoPlayInterval) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;