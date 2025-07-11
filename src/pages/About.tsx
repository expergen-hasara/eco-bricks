import React from 'react';
import { LeafIcon, RecycleIcon, HomeIcon } from 'lucide-react';
export const About = () => {
  return <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About EcoBricks
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto my-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            We're revolutionizing construction with sustainable building
            materials that don't compromise on quality or performance.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <LeafIcon size={32} className="text-green-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Eco-Friendly
            </h3>
            <p className="mt-4 text-gray-600">
              Made from 90% recycled materials, our bricks significantly reduce
              the environmental impact of construction.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <RecycleIcon size={32} className="text-green-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Sustainable Process
            </h3>
            <p className="mt-4 text-gray-600">
              Our manufacturing process uses 70% less energy than traditional
              brick production, with minimal waste.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <HomeIcon size={32} className="text-green-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Better Buildings
            </h3>
            <p className="mt-4 text-gray-600">
              Superior insulation properties mean buildings constructed with
              EcoBricks are more energy-efficient and comfortable.
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src="/assets/images/about-home.jpg" 
            alt="Our eco-friendly factory" 
            className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Founded in 2010, EcoBricks began with a simple mission: to
              transform construction waste into high-quality building materials.
              What started as a small recycling operation has grown into a
              leading manufacturer of sustainable construction products.
            </p>
            <p className="text-gray-600 mb-4">
              Today, our bricks are used in residential, commercial, and public
              projects worldwide, helping architects and builders create
              structures that are both beautiful and environmentally
              responsible.
            </p>
            <p className="text-gray-600">
              We're proud to be part of the solution to construction waste and
              climate change, proving that sustainable building doesn't mean
              compromising on quality or aesthetics.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Our Mission
          </h3>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            At EcoBricks, our mission is to revolutionize the construction
            industry by providing sustainable building materials that reduce
            environmental impact without compromising on quality or performance.
            We believe that every brick counts in the fight against climate
            change and resource depletion.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Values
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                  <span className="h-3 w-3 rounded-full bg-green-600"></span>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Sustainability First
                  </h4>
                  <p className="text-gray-600">
                    Every decision we make considers environmental impact as the
                    top priority.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                  <span className="h-3 w-3 rounded-full bg-green-600"></span>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Innovation
                  </h4>
                  <p className="text-gray-600">
                    We continuously research and develop new ways to improve our
                    products and processes.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                  <span className="h-3 w-3 rounded-full bg-green-600"></span>
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Quality
                  </h4>
                  <p className="text-gray-600">
                    We never compromise on the durability and performance of our
                    products.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Impact
            </h3>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">
                      Waste Diverted from Landfills
                    </span>
                    <span className="text-green-600 font-semibold">
                      10,000+ tons/year
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{
                    width: '85%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">CO₂ Emissions Reduced</span>
                    <span className="text-green-600 font-semibold">
                      65% vs. traditional
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{
                    width: '65%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Energy Savings</span>
                    <span className="text-green-600 font-semibold">
                      70% less energy
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{
                    width: '70%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};