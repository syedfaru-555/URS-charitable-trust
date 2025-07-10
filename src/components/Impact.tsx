import React, { useState, useEffect } from 'react';
import { Users, School, Heart, Stethoscope } from 'lucide-react';

const Impact = () => {
  const [counters, setCounters] = useState({
    beneficiaries: 0,
    programs: 0,
    volunteers: 0,
    communities: 0
  });

  const targets = {
    beneficiaries: 5000,
    programs: 25,
    volunteers: 300,
    communities: 50
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => ({
        beneficiaries: Math.min(prev.beneficiaries + Math.ceil(targets.beneficiaries / steps), targets.beneficiaries),
        programs: Math.min(prev.programs + Math.ceil(targets.programs / steps), targets.programs),
        volunteers: Math.min(prev.volunteers + Math.ceil(targets.volunteers / steps), targets.volunteers),
        communities: Math.min(prev.communities + Math.ceil(targets.communities / steps), targets.communities)
      }));
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Users,
      number: counters.beneficiaries,
      suffix: '+',
      label: 'Lives Impacted',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Heart,
      number: counters.programs,
      suffix: '+',
      label: 'Active Programs',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Users,
      number: counters.volunteers,
      suffix: '+',
      label: 'Dedicated Volunteers',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: School,
      number: counters.communities,
      suffix: '+',
      label: 'Communities Served',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Charitable Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, we're creating meaningful change through our charitable initiatives across communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-6`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900 font-poppins">
                  {stat.number.toLocaleString()}
                </span>
                <span className="text-4xl font-bold text-gray-900">{stat.suffix}</span>
              </div>
              
              <p className="text-lg font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">
                Creating Lasting Change
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every number represents a life touched, a community strengthened, and hope restored. 
                Our charitable work extends beyond statistics – it's about creating sustainable change 
                and empowering communities to thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">100% transparency in fund utilization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Registered charitable trust with proper governance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Regular impact assessment and reporting</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Happy students"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;