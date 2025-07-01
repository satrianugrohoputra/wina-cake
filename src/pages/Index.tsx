
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
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInstagramClick = () => {
    window.open('https://instagram.com/wina.cake', '_blank');
  };

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

      <footer className="bg-peach py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <Button
              onClick={handleInstagramClick}
              variant="ghost"
              className="bg-peach/50 hover:bg-peach hover:text-peach/80 transition-colors duration-200 px-6 py-3"
            >
              <Instagram className="mr-2" size={20} />
              Follow us @wina.cake
            </Button>
            <p className="text-gray-700 text-sm">
              © 2024 Wina Cake. All rights reserved. Sweet moments delivered with love.
            </p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
