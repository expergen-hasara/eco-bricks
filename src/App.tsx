import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Product';
import { Videos } from './pages/Video';
import { Benefits } from './pages/Benefits';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
export function App() {
  return <BrowserRouter>
      <div className="w-full min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}