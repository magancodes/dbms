import React from 'react';
import { Presentation, Github } from 'lucide-react';

interface ButtonProps {
  link: string;
  icon: 'ppt' | 'github';
}

const ViewButton: React.FC<ButtonProps> = ({ link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center gap-5 px-8 py-4
        bg-netflix-red text-netflix-light font-mono text-xl md:text-2xl
        border-4 border-netflix-red
        transition-all duration-300
        hover:bg-netflix-black hover:scale-105
        animate-pulse hover:animate-none"
    >
      {icon === 'ppt' ? (
        <Presentation className="w-6 h-6 transition-transform group-hover:rotate-12" />
      ) : (
        <Github className="w-6 h-6 transition-transform group-hover:rotate-12" />
      )}
      {icon === 'ppt' ? 'VIEW PPT' : 'GITHUB'}
      <div className="absolute inset-0 border-4 border-netflix-red/50 translate-x-2 translate-y-2 -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
    </a>
  );
};

export default ViewButton;