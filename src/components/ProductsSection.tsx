import React from 'react';
export const ProductsSection = () => {
  const products = [{
    name: 'Standard EcoBrick',
    description: 'Our flagship product, perfect for standard construction projects with superior thermal properties.',
    image: '/public/images/our-product1.jpg',
    features: ['90% recycled content', 'Standard dimensions', 'High compressive strength', 'Excellent thermal insulation']
  }, {
    name: 'Insulating EcoBrick',
    description: 'Specially designed for energy-efficient buildings with enhanced insulation properties.',
    image: '/public/images/our-product2.jpg',
    features: ['95% recycled content', 'Lightweight design', 'Superior R-value', 'Noise reduction']
  }, {
    name: 'Decorative EcoBrick',
    description: 'Beautiful, textured bricks for feature walls and aesthetic applications.',
    image: '/public/images/our-products.jpg',
    features: ['Multiple color options', 'Textured finish', 'Weather resistant', 'Low maintenance']
  }];
  return <section id="products" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto my-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Discover our range of eco-friendly building materials designed for
            performance, sustainability, and aesthetic appeal.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, idx) => <li key={idx} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                      {feature}
                    </li>)}
                </ul>
                <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};