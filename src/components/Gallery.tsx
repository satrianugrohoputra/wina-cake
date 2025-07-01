
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  image: string;
  quote: string;
  customer: string;
}

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Cake nya enak banget! Texture lembut dan tidak terlalu manis. Pasti order lagi!",
      customer: "Sarah M."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Pelayanan ramah dan cake custom untuk ulang tahun anak saya sempurna!",
      customer: "Budi S."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Delivery cepat dan packaging rapi. Cake nya fresh dan taste nya juara!",
      customer: "Linda W."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Wina Cake selalu jadi pilihan utama untuk acara keluarga. Recommended!",
      customer: "Ahmad R."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="gallery" className="py-20 bg-vanilla">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gallery & Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat hasil karya kami dan testimoni dari customer yang puas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="overflow-hidden bg-white shadow-xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-80">
                    <img 
                      src={testimonials[currentSlide].image}
                      alt={`Customer ${testimonials[currentSlide].customer}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonials[currentSlide].quote}"
                    </blockquote>
                    <cite className="font-semibold text-gray-900 not-italic">
                      - {testimonials[currentSlide].customer}
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="sm"
                className="pointer-events-auto bg-white/90 hover:bg-white shadow-lg border-none w-12 h-12 rounded-full p-0"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="sm"
                className="pointer-events-auto bg-white/90 hover:bg-white shadow-lg border-none w-12 h-12 rounded-full p-0"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-whatsapp' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
