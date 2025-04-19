import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'DBMS PROJECT';
  }, []);

  return (
    <div className="min-h-screen bg-netflix-black text-netflix-light">
      <Hero />
      <BentoGrid />
    </div>
  );
};

export default HomePage;