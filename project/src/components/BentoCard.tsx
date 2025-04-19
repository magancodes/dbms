import React from 'react';
import type { DiagramLink } from '../data/diagramLinks';

interface BentoCardProps {
  item: DiagramLink;
  size?: 'small' | 'medium' | 'large';
  index: number;
}

const BentoCard: React.FC<BentoCardProps> = ({ item, size = 'medium', index }) => {
  const variants = [
    'border-l-4 border-t-4',
    'border-r-4 border-t-4',
    'border-l-4 border-b-4',
    'border-r-4 border-b-4',
    'border-l-4 border-r-4',
    'border-t-4 border-b-4',
    'border-l-4 border-t-4 border-r-4',
    'border-l-4 border-b-4 border-r-4',
  ];

  const borderVariant = variants[index % variants.length];

  return (
    <div 
      className={`
        relative bg-netflix-gray 
        ${borderVariant} border-netflix-red
        transition-all duration-300 
        hover:bg-netflix-black hover:scale-[1.02] 
        flex flex-col
        p-6 lg:p-8
      `}
    >
      <div className="absolute top-2 right-3 text-xs font-mono text-netflix-light/50">
        {`<${item.id}>`}
      </div>
      
      <h3 className="text-xl md:text-2xl font-mono font-bold text-netflix-light mb-3 mt-2">
        {item.title}
      </h3>
      
      <p className="text-netflix-light/70 font-mono text-sm mb-4">
        {item.description}
      </p>
      
      <div className="mt-auto">
        <a 
          href={item.link || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`
            inline-block py-2 px-4
            border-2 border-netflix-red
            text-netflix-light font-mono
            hover:bg-netflix-red 
            transition-colors duration-300
            ${!item.link && 'opacity-50 cursor-not-allowed'}
          `}
        >
          {item.link ? 'VIEW DIAGRAM' : 'LINK PENDING'}
        </a>
      </div>
    </div>
  );
};

export default BentoCard;