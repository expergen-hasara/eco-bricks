import React from 'react';
import { ThermometerIcon, DollarSignIcon, HeartIcon, ShieldIcon, AwardIcon, BarChartIcon, LeafIcon, HomeIcon, CheckCircleIcon } from 'lucide-react';
export const Benefits = () => {
  const benefits = [{
    icon: <ThermometerIcon size={32} className="text-orange-600" />,
    title: 'Superior Insulation',
    description: 'Our bricks provide 35% better thermal insulation compared to traditional bricks, reducing heating and cooling costs.'
  }, {
    icon: <DollarSignIcon size={32} className="text-orange-600" />,
    title: 'Cost Effective',
    description: 'While competitively priced, EcoBricks deliver significant long-term savings through energy efficiency and durability.'
  }, {
    icon: <HeartIcon size={32} className="text-orange-600" />,
    title: 'Healthier Living',
    description: 'Non-toxic materials create healthier indoor environments with better air quality and moisture regulation.'
  }, {
    icon: <ShieldIcon size={32} className="text-orange-600" />,
    title: 'Durable & Strong',
    description: 'Engineered to last, our bricks maintain structural integrity and appearance for decades with minimal maintenance.'
  }, {
    icon: <AwardIcon size={32} className="text-orange-600" />,
    title: 'Certified Green',
    description: 'EcoBricks are certified by leading environmental organizations and contribute to green building certifications.'
  }, {
    icon: <BarChartIcon size={32} className="text-orange-600" />,
    title: 'Carbon Reduction',
    description: 'Each EcoBrick used instead of a conventional brick reduces carbon emissions by approximately 0.5kg CO2.'
  }];
  return <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose EcoBricks?
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto my-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Our sustainable building materials offer numerous advantages over
            traditional options, benefiting both the environment and your
            project.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-amber-50 p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>)}
        </div>
        <div className="mt-16 bg-orange-600 rounded-lg overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Environmental Impact
              </h3>
              <p className="text-orange-50 mb-6">
                Every year, our EcoBricks help divert thousands of tons of waste
                from landfills while reducing the carbon footprint of
                construction projects worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-full bg-orange-800 rounded-full h-4">
                    <div className="bg-white h-4 rounded-full" style={{
                    width: '90%'
                  }}></div>
                  </div>
                  <span className="ml-4 text-white font-medium">
                    90% Recycled Material
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-orange-800 rounded-full h-4">
                    <div className="bg-white h-4 rounded-full" style={{
                    width: '70%'
                  }}></div>
                  </div>
                  <span className="ml-4 text-white font-medium">
                    70% Energy Reduction
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-orange-800 rounded-full h-4">
                    <div className="bg-white h-4 rounded-full" style={{
                    width: '65%'
                  }}></div>
                  </div>
                  <span className="ml-4 text-white font-medium">
                    65% CO₂ Reduction
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/assets/images/environmental-impact.jpg" alt="Environmental impact visualization" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-green-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <LeafIcon size={28} className="text-green-600 mr-3" />
              Environmental Benefits
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <CheckCircleIcon size={24} className="text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Reduces landfill waste by repurposing materials that would
                  otherwise be discarded
                </p>
              </li>
              <li className="flex">
                <CheckCircleIcon size={24} className="text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Minimizes the need for raw material extraction, preserving
                  natural resources
                </p>
              </li>
              <li className="flex">
                <CheckCircleIcon size={24} className="text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Significantly lower carbon footprint compared to traditional
                  brick manufacturing
                </p>
              </li>
              <li className="flex">
                <CheckCircleIcon size={24} className="text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Water conservation through efficient manufacturing processes
                </p>
              </li>
              <li className="flex">
                <CheckCircleIcon size={24} className="text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Zero harmful emissions during production and throughout
                  product lifecycle
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <HomeIcon size={28} className="text-orange-600 mr-3" />
              Building Performance Benefits
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <CheckCircleIcon size={24} className="text-orange-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Enhanced thermal insulation reduces heating and cooling costs
                  by up to 30%
                </p>
              </li>
              <li className="flex">
                <CheckCircleIcon size={24} className="text-orange-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Superior acoustic properties for quieter interior environments
                </p>
              </li>
              <li className="flex">
                <CheckCircleIcon size={24} className="text-orange-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Natural fire resistance without chemical additives
                </p>
              </li>
              <li className="flex">
                <CheckCircleIcon size={24} className="text-orange-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Moisture regulation prevents mold and improves indoor air
                  quality
                </p>
              </li>
              <li className="flex">
                <CheckCircleIcon size={24} className="text-orange-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Contributes to LEED and other green building certification
                  points
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 bg-green-50 p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Experience the Benefits?
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
            Join the growing number of architects, builders, and homeowners who
            are choosing EcoBricks for their sustainable building projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/products" className="px-8 py-3 text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors">
              Explore Products
            </a>
            <a href="/contact" className="px-8 py-3 text-base font-medium rounded-md text-orange-600 bg-white border border-orange-600 hover:bg-orange-50 transition-colors">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>;
};