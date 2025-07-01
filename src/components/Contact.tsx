
import { Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo Wina Cake! Saya ingin bertanya tentang lokasi dan jam operasional.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281946252944?text=${encodedMessage}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/wina.cake', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-peach/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut atau kunjungi toko kami
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white shadow-lg border-none">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
                    Informasi Kontak
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Alamat</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Jl. Mawar No. 123<br />
                        Kelurahan Sukamaju<br />
                        Jakarta Selatan 12345
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Jam Operasional</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Senin - Sabtu: 08:00 - 20:00<br />
                        Minggu: 09:00 - 18:00
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Telepon</h4>
                      <p className="text-gray-600">+62 819-4625-2944</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold min-h-[44px] transition-all duration-200 hover:scale-105 flex-1"
                    >
                      <MessageCircle className="mr-2" size={18} />
                      Chat WhatsApp
                    </Button>
                    <Button 
                      onClick={handleInstagramClick}
                      variant="outline"
                      className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold min-h-[44px] transition-all duration-200 hover:scale-105 flex-1"
                    >
                      <Instagram className="mr-2" size={18} />
                      Follow @wina.cake
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="h-96 lg:h-full">
              <Card className="h-full shadow-lg border-none overflow-hidden">
                <CardContent className="p-0 h-full">
                  <div className="h-full bg-gray-200 flex items-center justify-center relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666!2d106.8229!3d-6.1944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9b4a0!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
