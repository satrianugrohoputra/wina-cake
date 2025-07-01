
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  image: string;
  slicePrice: string;
  wholePrice: string;
  description: string;
}

const MenuSection = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Chocolate Fudge Cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slicePrice: "Rp 25.000",
      wholePrice: "Rp 180.000",
      description: "Rich chocolate cake with fudge frosting"
    },
    {
      id: 2,
      name: "Red Velvet Cake",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slicePrice: "Rp 28.000",
      wholePrice: "Rp 200.000",
      description: "Classic red velvet with cream cheese frosting"
    },
    {
      id: 3,
      name: "Strawberry Shortcake",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slicePrice: "Rp 30.000",
      wholePrice: "Rp 220.000",
      description: "Fresh strawberries with vanilla sponge"
    },
    {
      id: 4,
      name: "Tiramisu Cake",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slicePrice: "Rp 35.000",
      wholePrice: "Rp 250.000",
      description: "Italian-style coffee flavored dessert"
    },
    {
      id: 5,
      name: "Lemon Cheesecake",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slicePrice: "Rp 32.000",
      wholePrice: "Rp 230.000",
      description: "Creamy cheesecake with lemon zest"
    },
    {
      id: 6,
      name: "Black Forest Cake",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slicePrice: "Rp 33.000",
      wholePrice: "Rp 240.000",
      description: "Chocolate cake with cherries and cream"
    }
  ];

  const handleOrderClick = (item: MenuItem) => {
    const message = `Hi Wina Cake! Saya ingin memesan ${item.name}. Bisa info lebih lanjut tentang ukuran dan harga?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281946252944?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-vanilla">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Menu Kue
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan cake dan pastry terbaik, dibuat fresh setiap hari dengan bahan berkualitas premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-none overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Per slice</div>
                    <div className="font-semibold text-gray-800">{item.slicePrice}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Whole cake</div>
                    <div className="font-semibold text-gray-800">{item.wholePrice}</div>
                  </div>
                </div>

                <Button 
                  onClick={() => handleOrderClick(item)}
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold min-h-[44px] transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle className="mr-2" size={18} />
                  Order via WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
