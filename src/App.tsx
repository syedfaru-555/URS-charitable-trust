import React from 'react';
import Header from 'Header';
import Hero from 'Hero';
import About from 'About';
import FeaturedCarousel from 'FeaturedCarousel';
import Programs from 'Programs';
import Impact from 'Impact';
import Gallery from 'Gallery';
import VolunteerDonate from 'VolunteerDonate';
import Testimonials from 'Testimonials';
import Footer from 'Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <FeaturedCarousel />
      <Programs />
      <Impact />
      <Gallery />
      <VolunteerDonate />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
