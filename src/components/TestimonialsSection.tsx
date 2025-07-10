import React from 'react';
import { StarIcon } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    quote: 'EcoBricks have transformed how we approach sustainable construction. The thermal properties are outstanding, and our clients love the environmental benefits.',
    author: 'Sarah Johnson',
    position: 'Principal Architect, Green Design Associates',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5
  }, {
    quote: "We've used EcoBricks in our last three major projects, and the performance has exceeded our expectations. The energy efficiency gains are substantial.",
    author: 'Michael Chen',
    position: 'Construction Manager, Sustainable Builders Inc.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5
  }, {
    quote: 'As a homeowner focused on reducing my environmental footprint, choosing EcoBricks for my extension was an easy decision. The house stays cooler in summer and warmer in winter.',
    author: 'Emily Rodriguez',
    position: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 4
  }];
  return <section id="testimonials" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto my-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Hear from architects, builders, and homeowners who have experienced
            the benefits of EcoBricks firsthand.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex mb-6">
                {[...Array(testimonial.stars)].map((_, i) => <StarIcon key={i} size={20} className="text-yellow-400 fill-current" />)}
                {[...Array(5 - testimonial.stars)].map((_, i) => <StarIcon key={i + testimonial.stars} size={20} className="text-gray-300 fill-current" />)}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-green-50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Join Our Satisfied Customers
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the difference that sustainable building materials can
            make in your next project.
          </p>
          <a href="#contact" className="px-8 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors inline-block">
            Request a Quote
          </a>
        </div>
      </div>
    </section>;
};