
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi Wina Cake! Saya tertarik dengan produk kue kalian. Bisa info lebih lanjut?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281946252944?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-0"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
