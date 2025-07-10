import React from 'react';
export const Products = () => {
  const products = [{
    name: 'Standard EcoBrick',
    description: 'Our flagship product, perfect for standard construction projects with superior thermal properties.',
    image: '/src/images/our-product1.jpg',
    features: ['90% recycled content', 'Standard dimensions', 'High compressive strength', 'Excellent thermal insulation'],
    details: 'Perfect for both residential and commercial construction, our Standard EcoBrick offers excellent structural integrity with the added benefit of superior thermal properties. Each brick is made from 90% recycled materials and undergoes rigorous quality testing.'
  }, {
    name: 'Insulating EcoBrick',
    description: 'Specially designed for energy-efficient buildings with enhanced insulation properties.',
    image: '/src/images/our-product2.jpg',
    features: ['95% recycled content', 'Lightweight design', 'Superior R-value', 'Noise reduction'],
    details: 'Our Insulating EcoBrick is engineered specifically for projects where thermal efficiency is paramount. With an industry-leading R-value and excellent acoustic properties, these bricks help create comfortable, energy-efficient spaces while reducing heating and cooling costs.'
  }, {
    name: 'Decorative EcoBrick',
    description: 'Beautiful, textured bricks for feature walls and aesthetic applications.',
    image: '/src/images/our-products.jpg',
    features: ['Multiple color options', 'Textured finish', 'Weather resistant', 'Low maintenance'],
    details: 'Add visual interest and sustainable beauty to any project with our Decorative EcoBricks. Available in a range of colors and textures, these bricks are perfect for feature walls, facades, and landscaping elements that make a statement while remaining environmentally responsible.'
  }, {
    name: 'Paving EcoBrick',
    description: 'Durable and attractive paving solutions for outdoor spaces.',
    image: '/src/images/our-product3.jpg',
    features: ['Slip-resistant surface', 'Freeze-thaw resistant', 'Permeable options available', 'High durability'],
    details: 'Our Paving EcoBricks provide sustainable solutions for walkways, patios, and driveways. Engineered to withstand heavy foot traffic and various weather conditions, these bricks combine practicality with environmental responsibility. The permeable options allow for better water drainage and reduced runoff.'
  }];
  return <section className="w-full bg-white py-16 md:py-24">
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => <li key={idx} className="flex items-center text-gray-600">
                          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Details
                    </h4>
                    <p className="text-gray-600 text-sm">{product.details}</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  {/* <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                    Request Quote
                  </button>
                  <button className="px-4 py-2 text-green-600 border border-green-600 rounded hover:bg-green-50 transition-colors">
                    Technical Specs
                  </button> */}
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-green-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              Custom Solutions
            </h3>
            <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
              Need something specific for your project? We offer custom EcoBrick
              solutions tailored to your exact specifications.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Request Custom Quote
            </button>
            <button className="px-6 py-3 text-green-600 bg-white border border-green-600 rounded-md hover:bg-green-50 transition-colors">
              Download Product Catalog
            </button>
          </div>
        </div>
      </div>
    </section>;
};