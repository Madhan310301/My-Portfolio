import React from 'react';

interface SectionWatermarkProps {
  word: string;
  className?: string;
}

const SectionWatermark: React.FC<SectionWatermarkProps> = ({ word, className = '' }) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden ${className}`}>
      <span className="text-[20vw] font-display font-black text-[#241B10] opacity-[0.03] tracking-tighter leading-none uppercase">
        {word}
      </span>
    </div>
  );
};

export default SectionWatermark;
