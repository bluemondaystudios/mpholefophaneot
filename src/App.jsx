import { useState } from 'react';
import { useScrollState } from './hooks/useScrollState.js';
import ScrollProgress from './components/ScrollProgress.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Milestones from './components/Milestones.jsx';
import Services from './components/Services.jsx';
import CtaBand from './components/CtaBand.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import BackToTop from './components/BackToTop.jsx';

const SECTION_IDS = ['home', 'about', 'milestones', 'services', 'contact'];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { progress, headerHidden, showBackToTop, activeSection } = useScrollState(SECTION_IDS, menuOpen);

  return (
    <div className="page-fade">
      <ScrollProgress progress={progress} />
      <Header
        hidden={headerHidden}
        activeSection={activeSection}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <main>
        <Hero />
        <About />
        <Milestones />
        <Services />
        <CtaBand />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop visible={showBackToTop} />
    </div>
  );
}
