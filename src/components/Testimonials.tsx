import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'BrightFuture Trust transformed my daughter\'s life. The scholarship program allowed her to pursue her dreams of becoming a teacher. Today, she\'s giving back to her community.',
      content: 'This trust transformed my daughter\'s life. The scholarship program allowed her to pursue her dreams of becoming a teacher. Today, she\'s giving back to her community.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Student',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'I never thought I could afford college until BrightFuture Trust stepped in. Their support went beyond financial aid - they believed in me when I didn\'t believe in myself.',
      content: 'I never thought I could afford college until this trust stepped in. Their support went beyond financial aid - they believed in me when I didn\'t believe in myself.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Teacher',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The teacher training programs have revolutionized how I approach education. The modern teaching methods have made learning more engaging for my students.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Volunteer',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Volunteering with BrightFuture Trust has been incredibly rewarding. Seeing the joy on children\'s faces when they learn something new is priceless.',
      content: 'Volunteering with this trust has been incredibly rewarding. Seeing the joy on children\'s faces when they learn something new is priceless.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the students, parents, teachers, and volunteers whose lives have been touched by our mission.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Quote className="h-12 w-12 text-blue-600 opacity-30" />
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.content.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;