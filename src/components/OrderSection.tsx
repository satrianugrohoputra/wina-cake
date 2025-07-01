
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const OrderSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo Wina Cake! Saya ingin bertanya tentang menu dan cara order.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="order" className="py-20 bg-peach/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Cara Order
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mudah dan praktis! Hanya 3 langkah untuk mendapatkan cake impian Anda
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center group hover:scale-105 transition-all duration-300 bg-white border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                  Pilih Item
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Browse menu kami dan pilih cake atau pastry favorit Anda
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:scale-105 transition-all duration-300 bg-white border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                  Klik Order
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tekan tombol "Order via WhatsApp" pada item yang dipilih
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:scale-105 transition-all duration-300 bg-white border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                  Chat WhatsApp
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Konfirmasi pesanan dan detail pengiriman via WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Atau langsung chat kami untuk konsultasi dan custom order
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200 hover:scale-105"
            >
              Chat WhatsApp Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
