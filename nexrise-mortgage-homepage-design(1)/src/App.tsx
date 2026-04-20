import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Services from "./sections/Services";
import Pathway from "./sections/Pathway";
import WhyChoose from "./sections/WhyChoose";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Lenders from "./sections/Lenders";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#041f60] font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Pathway />
        <WhyChoose />
        <About />
        <Testimonials />
        <Lenders />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
