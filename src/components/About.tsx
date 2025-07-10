import React from 'react';
import { Users, Award, Heart, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Community Centered',
      description: 'Working directly with communities to address their most pressing social and educational needs.'
    },
    {
      icon: Award,
      title: 'Transparent Operations',
      description: 'Maintaining complete transparency in our charitable activities with regular impact reporting.'
    },
    {
      icon: Target,
      title: 'Holistic Approach',
      description: 'Addressing multiple aspects of community development including education, health, and welfare.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              About Our Trust
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a registered non-profit organization dedicated to creating 
              positive social change through comprehensive community development programs. 
              We believe in empowering individuals and communities to build better futures.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our charitable initiatives span education, healthcare, skill development, and social welfare. 
              We work closely with local communities, government bodies, and other organizations to 
              ensure our programs create sustainable and meaningful impact.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children learning in classroom"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <img 
                    src="/logo 3 (1).png" 
                    alt="URS Charitable Trust" 
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">5000+</p>
                  <p className="text-sm text-gray-600">Lives Impacted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;