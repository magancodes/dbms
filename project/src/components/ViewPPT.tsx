import React from 'react';
import { Presentation } from 'lucide-react';

interface ViewPPTProps {
  link: string;
}

const ViewPPT: React.FC<ViewPPTProps> = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 mt-8
        bg-netflix-red text-netflix-light font-mono text-xl md:text-2xl
        border-4 border-netflix-red
        transition-all duration-300
        hover:bg-netflix-black hover:scale-105
        animate-pulse hover:animate-none"
    >
      <Presentation className="w-6 h-6 transition-transform group-hover:rotate-12" />
      VIEW PPT
      <div className="absolute inset-0 border-4 border-netflix-red/50 translate-x-2 translate-y-2 -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
    </a>
  );
};

export default ViewPPT;