import React from './components/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedCarousel from './components/FeaturedCarousel';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Gallery from './components/Gallery';
import VolunteerDonate from './components/VolunteerDonate';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

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
