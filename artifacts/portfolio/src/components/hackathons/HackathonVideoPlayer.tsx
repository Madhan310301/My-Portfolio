import React, { useState } from 'react';
import { Film, Video } from 'lucide-react';

interface HackathonVideoPlayerProps {
  videos?: string[];
  eventName: string;
}

export const HackathonVideoPlayer: React.FC<HackathonVideoPlayerProps> = ({ videos, eventName }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  if (!videos || videos.length === 0) {
    return null;
  }

  const currentVideo = videos[activeVideoIndex];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Film size={15} className="text-[#C9972E]" />
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#C9972E] font-bold">
            PROTOTYPE DEMONSTRATION & RUN
          </h4>
        </div>

        {videos.length > 1 && (
          <div className="flex gap-1.5">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveVideoIndex(idx)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-all cursor-pointer ${
                  activeVideoIndex === idx
                    ? 'bg-[#C9972E] text-white shadow-sm'
                    : 'bg-[#FAF6EC] border border-[#C9972E]/30 text-[#7A6B55] hover:text-[#241B10]'
                }`}
              >
                Clip {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative rounded-xl overflow-hidden border-2 border-[#C9972E]/40 bg-[#16120C] shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <video
          key={currentVideo}
          controls
          preload="metadata"
          playsInline
          className="w-full max-h-[380px] object-contain mx-auto bg-black"
          aria-label={`Demo video for ${eventName}`}
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support HTML5 video playback.
        </video>

        <div className="px-4 py-2 bg-[#1C160E] border-t border-[#C9972E]/25 flex items-center justify-between text-[11px] font-mono text-[#D8C7A5]">
          <span className="flex items-center gap-1.5 truncate max-w-[70%]">
            <Video size={12} className="text-[#C9972E] shrink-0" />
            <span className="truncate">{currentVideo.split('/').pop()}</span>
          </span>
          <span className="text-[#C9972E] font-semibold shrink-0">Live Demo</span>
        </div>
      </div>
    </div>
  );
};