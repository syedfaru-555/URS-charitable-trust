import React from 'react';
import { GraduationCap, Book, Laptop, Users, Heart, Globe, Stethoscope, Utensils } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Scholarships, school supplies, and educational infrastructure for underprivileged children.',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '500+ Students Supported'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Initiatives',
      description: 'Medical camps, health awareness programs, and basic healthcare support for communities.',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '100+ Medical Camps'
    },
    {
      icon: Users,
      title: 'Skill Development',
      description: 'Vocational training and skill development programs for youth and women empowerment.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '300+ People Trained'
    },
    {
      icon: Utensils,
      title: 'Nutrition Programs',
      description: 'Food distribution, nutrition awareness, and support for malnourished children.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '1000+ Meals Daily'
    },
    {
      icon: Heart,
      title: 'Disaster Relief',
      description: 'Emergency response and rehabilitation support during natural disasters and crises.',
      image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '50+ Relief Operations'
    },
    {
      icon: Globe,
      title: 'Community Development',
      description: 'Infrastructure development, clean water initiatives, and community empowerment programs.',
      image: 'https://images.pexels.com/photos/8613111/pexels-photo-8613111.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '50+ Communities Served'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Charitable Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive charitable initiatives addressing education, healthcare, and social welfare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                  <program.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {program.stats}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;