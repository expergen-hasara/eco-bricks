import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, MessageSquareIcon, UserIcon, BuildingIcon } from 'lucide-react';
export const Contact = () => {
  return <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto my-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Have questions about our eco-friendly bricks? Get in touch with our
            team for more information or to request a quote.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <MessageSquareIcon size={24} className="text-orange-600 mr-2" />
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center">
                      <UserIcon size={16} className="mr-1 text-orange-600" />
                      Name
                    </span>
                  </label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center">
                      <MailIcon size={16} className="mr-1 text-orange-600" />
                      Email
                    </span>
                  </label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  <span className="flex items-center">
                    <BuildingIcon size={16} className="mr-1 text-orange-600" />
                    Company (Optional)
                  </span>
                </label>
                <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" placeholder="Your company" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500">
                  <option value="">Please select</option>
                  <option value="quote">Request a Quote</option>
                  <option value="product">Product Information</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" placeholder="Your message"></textarea>
              </div>
              <div className="flex items-center">
                <input id="newsletter" name="newsletter" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                  Subscribe to our newsletter for updates on sustainable
                  building
                </label>
              </div>
              <div>
                <button type="submit" className="w-full px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <MapPinIcon size={24} className="text-orange-600 mr-2" />
              Contact Information
            </h3>
            <div className="bg-amber-50 rounded-lg shadow-md p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPinIcon size={24} className="text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">
                      Our Location
                    </h4>
                    <p className="text-gray-600">
                      Molagoda,
                      <br />
                      Kegalle.
                      {/* <br />
                      Sustainableville, SV 12345 */}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon size={24} className="text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">0776201377</p>
                    {/* <p className="text-gray-600">(555) 987-6543 (Sales)</p> */}
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MailIcon size={24} className="text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">info@ecobricks.com</p>
                    <p className="text-gray-600">sales@ecobricks.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ClockIcon size={24} className="text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-800 mb-4">
                Find Us
              </h4>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                {/* This would be a map in a real implementation */}
                <div className="w-full h-full bg-amber-50 flex items-center justify-center">
                  {/* <p className="text-gray-600 text-center p-4">
                    Interactive map would be displayed here
                  </p> */}
                  <img src="/assets/images/location.jpg" 
                  alt="Our eco-friendly factory" 
                  className="rounded-lg shadow-lg w-full h-auto" />
                </div>
              </div>
            </div>
            <div className="mt-8 bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Request a Product Sample
              </h4>
              <p className="text-gray-600 mb-4">
                Want to see and feel our eco-friendly bricks before making a
                decision? Request a free sample pack today.
              </p>
              <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors">
                Request Sample
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-amber-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our customer support team is available to help you with any
            questions or concerns.
          </p>
          <div className="inline-flex items-center justify-center bg-white px-6 py-3 rounded-full shadow-md">
            <PhoneIcon size={20} className="text-orange-600 mr-2" />
            <span className="text-lg font-medium text-gray-800">
            0776201377
            </span>
          </div>
        </div>
      </div>
    </section>;
};