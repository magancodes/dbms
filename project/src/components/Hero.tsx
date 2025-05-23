import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ViewPPT from './ViewPPT';
import ViewButton from './ViewPPT';

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById('bento-grid');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-netflix-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-12 w-full h-full opacity-10">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-netflix-red/20"
            />
          ))}
        </div>
      </div>

      <div
        className={`text-center transform transition-all duration-1000 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <h1 className="text-netflix-red font-mono font-bold tracking-tight">
          <span className="block text-xl md:text-3xl mb-2 text-netflix-light">&lt;DATABASE&gt;</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] leading-none">DBMS</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl">PROJECT</span>
          <span className="block text-xl md:text-3xl mt-2 text-netflix-light">&lt;/DATABASE&gt;</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
        <ViewButton link="https://drive.google.com/file/d/1qlj9rvQsZLwXvACDJqBY4U93rkHQCG3B/view?usp=sharing" icon = "ppt" />
        <ViewButton link="https://github.com/thefcraft/Efficia" icon = "github" />
        </div>

      </div>

      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <ChevronDown className="w-10 h-10 text-netflix-light" />
      </div>

      <div className="absolute top-0 right-0 m-6 text-netflix-light font-mono text-xs">
        <span className="block">//*%^%@^%^@$//</span>
        <span className="block">//#%@@$%$@%^$@^//</span>
      </div>
    </div>
  );
};

export default Hero;