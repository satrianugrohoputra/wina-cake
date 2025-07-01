
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-vanilla/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            Wina Cake
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Sweet Moments Delivered
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Handcrafted cakes and pastries made with love, bringing sweetness to your special moments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToMenu}
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200 hover:scale-105"
            >
              Lihat Menu
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo%20Wina%20Cake,%20saya%20ingin%20bertanya%20tentang%20kue%20custom', '_blank')}
              className="border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200 hover:scale-105"
            >
              Order Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
