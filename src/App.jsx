import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import VisionMission from './components/sections/VisionMission';
import CoreValues from './components/sections/CoreValues';
import Services from './components/sections/Services';
import SpecializedServices from './components/sections/SpecializedServices';
import WhyChoose from './components/sections/WhyChoose';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import CTA from './components/sections/CTA';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        تخطي إلى المحتوى الرئيسي
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <VisionMission />
        <CoreValues />
        <Services />
        <SpecializedServices />
        <WhyChoose />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
