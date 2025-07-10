import React from 'react';
import { PlayIcon } from 'lucide-react';
export const VideoSection = () => {
  return <section id="videos" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            See EcoBricks in Action
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto my-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Watch how our sustainable bricks are made and used in various
            construction projects.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative aspect-video">
              <video className="w-full h-full object-cover" controls poster="https://images.unsplash.com/photo-1582032424748-d77ee4ca8c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80">
                <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f62cab9ea63ecb27747b89828d6e6dc9ff&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-green-600 rounded-full p-4 shadow-lg opacity-90">
                  <PlayIcon size={32} className="text-white" />
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">
                Manufacturing Process
              </h3>
              <p className="mt-2 text-gray-600">
                See how we transform recycled materials into durable,
                high-quality building bricks using our innovative low-energy
                process.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative aspect-video">
              <video className="w-full h-full object-cover" controls poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80">
                <source src="https://player.vimeo.com/progressive_redirect/playback/699699500/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=2b2ca7b9c6d7f5b178e0df76d9c62b340a7e3cb17c8a47b4b1e3c0f36c6a6cc2" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-green-600 rounded-full p-4 shadow-lg opacity-90">
                  <PlayIcon size={32} className="text-white" />
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">
                Case Study: Green Office Building
              </h3>
              <p className="mt-2 text-gray-600">
                Follow the construction of an award-winning office building made
                entirely with EcoBricks, showcasing their versatility and
                aesthetic appeal.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
            View more videos
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>;
};