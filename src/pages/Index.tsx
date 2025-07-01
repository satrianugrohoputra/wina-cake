
import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import OrderSection from '@/components/OrderSection';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-vanilla font-inter">
      <Navigation />
      
      <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <MenuSection />
        <OrderSection />
        <Gallery />
        <Contact />
      </main>

      <footer className="bg-peach py-6 text-center">
        <p className="text-gray-700 text-sm">
          © 2024 Wina Cake. All rights reserved. Sweet moments delivered with love.
        </p>
      </footer>
    </div>
  );
};

export default Index;
