import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { ArrowRightIcon } from 'lucide-react';
export const Home = () => {
  const sections = [{
    title: 'About Us',
    description: 'Learn about our story, mission, and commitment to sustainable building materials.',
    image: '/assets/images/about-home.jpg',
    link: '/about',
    color: 'bg-green-50'
  }, {
    title: 'Our Products',
    description: 'Discover our range of eco-friendly building materials designed for performance and sustainability.',
    image: '/assets/images/our-product1.jpg',
    link: '/products',
    color: 'bg-amber-50'
  }, {
    title: 'Videos',
    description: 'Watch how our sustainable bricks are made and used in various construction projects.',
    image: '/assets/images/our-product3.jpg',
    link: '/videos',
    color: 'bg-green-50'
  }, {
    title: 'Benefits',
    description: 'Explore the advantages our sustainable building materials offer over traditional options.',
    image: 'https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/benefits',
    color: 'bg-amber-50'
  }, {
    title: 'Testimonials',
    description: 'Hear from architects, builders, and homeowners who have experienced the benefits of EcoBricks firsthand.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/testimonials',
    color: 'bg-green-50'
  }, {
    title: 'Contact Us',
    description: 'Have questions about our eco-friendly bricks? Get in touch with our team for more information.',
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/contact',
    color: 'bg-amber-50'
  }];
  return <>
      <HeroSection />
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Explore EcoBricks
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto my-6"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Discover how our sustainable building solutions are
              revolutionizing construction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => <div key={index} className={`${section.color} rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105`}>
                <div className="h-48 overflow-hidden">
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{section.description}</p>
                  <Link to={section.link} className="mt-4 inline-flex items-center text-orange-600 font-medium hover:text-orange-700">
                    Learn more
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </>;
};