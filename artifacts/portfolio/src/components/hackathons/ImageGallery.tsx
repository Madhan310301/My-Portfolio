import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera, Image as ImageIcon } from 'lucide-react';

interface ImageGalleryProps {
  photos: string[];
  eventName: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, eventName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when photos array changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [photos]);

  const hasPhotos = photos && photos.length > 0;

  const handlePrev = () => {
    if (!hasPhotos) return;
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!hasPhotos) return;
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation when focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  if (!hasPhotos) {
    return null;
  }

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden border border-[#C9972E]/30 bg-[#241B10] flex flex-col group"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`Photo gallery for ${eventName}`}
    >
      {/* Active Photo Container */}
      <div className="relative w-full h-[260px] sm:h-[320px] overflow-hidden flex items-center justify-center bg-black/40">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={photos[currentIndex]}
            alt={`${eventName} gallery photo ${currentIndex + 1} of ${photos.length}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full h-full object-cover select-none"
            loading="lazy"
          />
        </AnimatePresence>

        {/* Counter Overlay */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#241B10]/70 backdrop-blur-md border border-[#C9972E]/30 font-mono text-[11px] text-[#FAF6EC] font-bold">
          <span>{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="mx-1 text-[#C9972E]">/</span>
          <span>{String(photos.length).padStart(2, '0')}</span>
        </div>

        {/* Prev / Next Controls */}
        {photos.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FAF6EC]/85 hover:bg-[#FFFDF8] text-[#241B10] border border-[#C9972E]/40 flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer opacity-90 group-hover:opacity-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FAF6EC]/85 hover:bg-[#FFFDF8] text-[#241B10] border border-[#C9972E]/40 flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer opacity-90 group-hover:opacity-100"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {photos.length > 1 && (
        <div className="flex gap-2 p-3 bg-[#FFFDF8] border-t border-[#C9972E]/20 overflow-x-auto no-scrollbar">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to photo ${idx + 1}`}
              className={`relative flex-shrink-0 w-14 h-10 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'border-[#C9972E] ring-2 ring-[#C9972E]/30 scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={photo}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
