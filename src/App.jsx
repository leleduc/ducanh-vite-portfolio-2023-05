import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/ui/Hero';
import Services from './components/ui/Services';
import Portfolio from './components/ui/Portfolio';
import Contact from './components/ui/Contact';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
