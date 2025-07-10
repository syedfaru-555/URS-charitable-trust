import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Carousel from './Carousel';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Children in classroom',
      title: 'Active Learning Environment'
    },
    {
      src: 'https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Student reading',
      title: 'Individual Learning Support'
    },
    {
      src: 'https://images.pexels.com/photos/8613272/pexels-photo-8613272.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Digital learning',
      title: 'Technology Integration'
    },
    {
      src: 'https://images.pexels.com/photos/8613268/pexels-photo-8613268.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Teacher training',
      title: 'Teacher Development'
    },
    {
      src: 'https://images.pexels.com/photos/8613080/pexels-photo-8613080.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'School meal program',
      title: 'Nutrition Program'
    },
    {
      src: 'https://images.pexels.com/photos/8613111/pexels-photo-8613111.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Rural education',
      title: 'Rural Outreach'
    },
    {
      src: 'https://images.pexels.com/photos/8613098/pexels-photo-8613098.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Library resources',
      title: 'Community Libraries'
    },
    {
      src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Graduation ceremony',
      title: 'Success Stories'
    }
  ];

  const carouselItems = images.map((image, index) => ({
    id: index + 1,
    image: image.src,
    title: image.title,
    description: `Witness the transformative power of education in action.`,
    category: 'Gallery'
  }));

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the joy, hope, and transformation that education brings to children's lives.
          </p>
        </div>

        {/* Featured Carousel */}
        <div className="mb-16">
          <Carousel
            items={carouselItems}
            autoPlay={true}
            autoPlayInterval={4000}
            showDots={true}
            showArrows={true}
            className="max-w-4xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-sm">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
              
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">{images[selectedImage].title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;