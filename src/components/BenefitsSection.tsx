import React from 'react';
import { ThermometerIcon, DollarSignIcon, HeartIcon, ShieldIcon, AwardIcon, BarChartIcon } from 'lucide-react';
export const BenefitsSection = () => {
  const benefits = [{
    icon: <ThermometerIcon size={32} className="text-green-600" />,
    title: 'Superior Insulation',
    description: 'Our bricks provide 35% better thermal insulation compared to traditional bricks, reducing heating and cooling costs.'
  }, {
    icon: <DollarSignIcon size={32} className="text-green-600" />,
    title: 'Cost Effective',
    description: 'While competitively priced, EcoBricks deliver significant long-term savings through energy efficiency and durability.'
  }, {
    icon: <HeartIcon size={32} className="text-green-600" />,
    title: 'Healthier Living',
    description: 'Non-toxic materials create healthier indoor environments with better air quality and moisture regulation.'
  }, {
    icon: <ShieldIcon size={32} className="text-green-600" />,
    title: 'Durable & Strong',
    description: 'Engineered to last, our bricks maintain structural integrity and appearance for decades with minimal maintenance.'
  }, {
    icon: <AwardIcon size={32} className="text-green-600" />,
    title: 'Certified Green',
    description: 'EcoBricks are certified by leading environmental organizations and contribute to green building certifications.'
  }, {
    icon: <BarChartIcon size={32} className="text-green-600" />,
    title: 'Carbon Reduction',
    description: 'Each EcoBrick used instead of a conventional brick reduces carbon emissions by approximately 0.5kg CO2.'
  }];
  return <section id="benefits" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose EcoBricks?
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto my-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Our sustainable building materials offer numerous advantages over
            traditional options, benefiting both the environment and your
            project.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>)}
        </div>
        <div className="mt-16 bg-green-600 rounded-lg overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Environmental Impact
              </h3>
              <p className="text-green-50 mb-6">
                Every year, our EcoBricks help divert thousands of tons of waste
                from landfills while reducing the carbon footprint of
                construction projects worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-full bg-green-800 rounded-full h-4">
                    <div className="bg-white h-4 rounded-full" style={{
                    width: '90%'
                  }}></div>
                  </div>
                  <span className="ml-4 text-white font-medium">
                    90% Recycled Material
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-green-800 rounded-full h-4">
                    <div className="bg-white h-4 rounded-full" style={{
                    width: '70%'
                  }}></div>
                  </div>
                  <span className="ml-4 text-white font-medium">
                    70% Energy Reduction
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-green-800 rounded-full h-4">
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
              <img src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Environmental impact visualization" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};