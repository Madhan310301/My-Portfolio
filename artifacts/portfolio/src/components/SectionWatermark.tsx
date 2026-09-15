const sectionNumbers: Record<string, string> = { ABOUT: '01', WORK: '02', SKILLS: '03', SERVICES: '04', PROOF: '05', HACK: '06', EDUCATION: '07', CONTACT: '08' };

export default function SectionWatermark({ word, className = '' }: { word: string; className?: string }) {
  return <div className={`section-watermark ${className}`} aria-hidden="true"><span>{sectionNumbers[word] ?? '—'}</span><span>{word}</span></div>;
}
