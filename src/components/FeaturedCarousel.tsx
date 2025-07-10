import React from 'react';
import Carousel from './Carousel';

const FeaturedCarousel = () => {
  const featuredItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Charitable Trust Making a Difference',
      description: 'Our charitable trust is committed to holistic community development through various social welfare programs.',
      category: 'Our Trust'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Healthcare for All',
      description: 'Providing essential healthcare services and medical support to underserved communities.',
      category: 'Healthcare'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Education & Empowerment',
      description: 'Supporting educational initiatives and skill development programs for sustainable community growth.',
      category: 'Education'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Community Welfare Programs',
      description: 'Comprehensive social welfare initiatives addressing nutrition, shelter, and basic needs.',
      category: 'Social Welfare'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/8613111/pexels-photo-8613111.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Rural Development Initiatives',
      description: 'Bringing essential services and development programs to remote and underserved rural areas.',
      category: 'Rural Development'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Charitable Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our charitable trust is creating positive change through dedicated social service.
          </p>
        </div>

        <Carousel
          items={featuredItems}
          autoPlay={true}
          autoPlayInterval={6000}
          showDots={true}
          showArrows={true}
          className="max-w-5xl mx-auto"
        />
      </div>
    </section>
  );
};

export default FeaturedCarousel;