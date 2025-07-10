import React from 'react';
import { StarIcon, QuoteIcon } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    quote: 'EcoBricks have transformed how we approach sustainable construction. The thermal properties are outstanding, and our clients love the environmental benefits.',
    author: 'Sarah Johnson',
    position: 'Principal Architect, Green Design Associates',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5,
    project: 'Community Center',
    projectImage: '/public/images/Testimonials-1.jpg'
  }, {
    quote: "We've used EcoBricks in our last three major projects, and the performance has exceeded our expectations. The energy efficiency gains are substantial.",
    author: 'Michael Chen',
    position: 'Construction Manager, Sustainable Builders Inc.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5,
    project: 'Office Building',
    projectImage: '/public/images/Testimonials-2.jpg'
  }, {
    quote: 'As a homeowner focused on reducing my environmental footprint, choosing EcoBricks for my extension was an easy decision. The house stays cooler in summer and warmer in winter.',
    author: 'Emily Rodriguez',
    position: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 4,
    project: 'Residential Extension',
    projectImage: '/public/images/Testimonials-3.jpg'
  }, {
    quote: 'The EcoBricks team provided exceptional support throughout our project. Their knowledge and commitment to sustainability made them the perfect partner.',
    author: 'David Wilson',
    position: 'Project Director, Eco Development Group',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5,
    project: 'Mixed-Use Development',
    projectImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    quote: 'Our school building constructed with EcoBricks has created a healthier, more comfortable learning environment while serving as a living example of sustainability for our students.',
    author: 'Jennifer Lee',
    position: 'School Principal, Green Valley Academy',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5,
    project: 'Educational Facility',
    projectImage: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    quote: 'The aesthetic versatility of EcoBricks allowed us to create a modern design while meeting our strict sustainability requirements. A truly innovative product.',
    author: 'Robert Thompson',
    position: 'Design Director, Modern Architects Ltd.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 4,
    project: 'Boutique Hotel',
    projectImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }];
  const featuredTestimonials = testimonials.slice(0, 3);
  const otherTestimonials = testimonials.slice(3);
  return <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto my-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Hear from architects, builders, and homeowners who have experienced
            the benefits of EcoBricks firsthand.
          </p>
        </div>
        {/* Featured testimonials with project images */}
        <div className="mt-16 space-y-12">
          {featuredTestimonials.map((testimonial, index) => <div key={index} className={`bg-${index % 2 === 0 ? 'amber' : 'green'}-50 rounded-lg shadow-lg overflow-hidden`}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img src={testimonial.projectImage} alt={`${testimonial.author}'s project`} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <QuoteIcon size={36} className="text-orange-600 opacity-50" />
                  </div>
                  <p className="text-gray-700 italic text-lg mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => <StarIcon key={i} size={20} className="text-yellow-400 fill-current" />)}
                    {[...Array(5 - testimonial.stars)].map((_, i) => <StarIcon key={i + testimonial.stars} size={20} className="text-gray-300 fill-current" />)}
                  </div>
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                      <p className="text-sm text-orange-600 font-medium mt-1">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        {/* Other testimonials in grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherTestimonials.map((testimonial, index) => <div key={index} className={`bg-${index % 2 === 0 ? 'amber' : 'green'}-50 p-8 rounded-lg shadow-md`}>
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
                  <p className="text-sm text-orange-600 font-medium mt-1">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
        {/* Call to action */}
        <div className="mt-16 bg-orange-600 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Our Satisfied Customers
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Experience the difference that sustainable building materials can
            make in your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/products" className="px-8 py-3 text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-100 transition-colors inline-block">
              Explore Products
            </a>
            <a href="/contact" className="px-8 py-3 text-base font-medium rounded-md text-white border border-white hover:bg-orange-700 transition-colors inline-block">
              Request a Quote
            </a>
          </div>
        </div>
        {/* Video testimonial section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Video Testimonials
          </h3>
          <div className="aspect-w-16 aspect-h-9">
            <div className="w-full h-0 pb-[56.25%] relative bg-gray-100 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-gray-600 mb-4">
                    Watch our customer testimonial videos
                  </p>
                  <button className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Play Testimonial Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};