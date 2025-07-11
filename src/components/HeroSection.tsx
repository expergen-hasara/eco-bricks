import React from 'react';
import { Link } from 'react-router-dom';
export const HeroSection = () => {
  return <section className="relative w-full bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center md:text-left md:w-3/5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Building a <span className="text-orange-600">Sustainable</span>{' '}
            Future, One Brick at a Time
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
            Our eco-friendly bricks are made from recycled materials, reducing
            waste and carbon footprint while providing superior building
            performance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/products" className="px-8 py-3 text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors">
              Explore Products
            </Link>
            <Link to="/contact" className="px-8 py-3 text-base font-medium rounded-md text-orange-600 bg-white border border-orange-600 hover:bg-orange-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full md:w-2/5 h-1/3 md:h-full overflow-hidden hidden md:block">
        <div className="w-full h-full bg-amber-200 opacity-20 absolute"></div>
        <img src="/assets/images/first-image.jpg" 
        alt="Eco-friendly brick wall" 
        className="object-cover object-center w-full h-full" />
      </div>
    </section>;
};