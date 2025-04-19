import React, { useEffect, useRef } from 'react';
import BentoCard from './BentoCard';
import diagramLinks from '../data/diagramLinks';

const BentoGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const gridItems = document.querySelectorAll('.bento-card');
    gridItems.forEach((item) => observer.observe(item));

    return () => {
      gridItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section 
      id="bento-grid" 
      ref={sectionRef}
      className="container mx-auto px-4 py-20 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {diagramLinks.map((item, index) => (
          <div 
            key={item.id}
            className={`bento-card opacity-0 ${
              index === 0 ? 'lg:col-span-2 lg:row-span-2' : 
              index === 7 ? 'lg:col-span-3' : ''
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <BentoCard 
              item={item} 
              index={index} 
              size={index === 0 ? 'large' : index === 7 ? 'large' : 'medium'}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-20 border-t-2 border-netflix-red/50 pt-8 text-netflix-light font-mono text-xs">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0 space-y-1">
            <p>// MAGANJOT SINGH //</p>
            <p>// LAKSH KUMAR //</p>
            <p>// SUNNY KUMAR //</p>
            <p>// ANUJ KUMAR //</p>
            <p>// RAVINDRA BHATI //</p>
          </div>
          <div className="text-right">
            <p>{new Date().getFullYear()} // ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;