/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
