import React, { useState } from 'react';
import { PlayIcon } from 'lucide-react';
export const Videos = () => {
  const videos = [{
    title: 'Manufacturing Process',
    description: 'See how we transform recycled materials into durable, high-quality building bricks using our innovative low-energy process.',
    poster: '/assets/videos/manufacturing.mp4',
    source: '/assets/videos/manufacturing.mp4',
    category: 'Process'
  }, {
    title: 'Case Study: Green Office Building',
    description: 'Follow the construction of an award-winning office building made entirely with EcoBricks, showcasing their versatility and aesthetic appeal.',
    poster: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    source: 'https://player.vimeo.com/progressive_redirect/playback/699699500/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=2b2ca7b9c6d7f5b178e0df76d9c62b340a7e3cb17c8a47b4b1e3c0f36c6a6cc2',
    category: 'Case Study'
  }, {
    title: 'Insulation Performance Test',
    description: 'Watch our laboratory tests demonstrating the superior thermal insulation properties of EcoBricks compared to traditional building materials.',
    poster: 'https://images.unsplash.com/photo-1581093458791-9f3c3900fcbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    source: 'https://player.vimeo.com/progressive_redirect/playback/688176736/rendition/720p/file.mp4?loc=external&oauth2_token_id=57447761&signature=c7c3def30c3e2d17a54b2e9246079f1a0f56866e4e2f0f33da96e501ee450d0b',
    category: 'Testing'
  }, {
    title: 'DIY Project: Garden Wall',
    description: 'Learn how to build a beautiful and sustainable garden wall using our Decorative EcoBricks with this step-by-step tutorial.',
    poster: 'https://images.unsplash.com/photo-1598127957142-be8040f8a4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    source: 'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/720p/file.mp4?loc=external&oauth2_token_id=57447761&signature=102c28f9a13d4be334ee4c4a9b3ca9d5c71b2cab2a8a6706b4b897d70d0996a3',
    category: 'Tutorial'
  }];
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Process', 'Case Study', 'Testing', 'Tutorial'];
  const filteredVideos = activeCategory === 'All' ? videos : videos.filter(video => video.category === activeCategory);
  return <section className="w-full bg-white py-16 md:py-24">
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
        <div className="mt-8 flex justify-center space-x-2">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {category}
            </button>)}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video, index) => <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <video className="w-full h-full object-cover" controls poster={video.poster}>
                  <source src={video.source} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-green-600 rounded-full p-4 shadow-lg opacity-90">
                    <PlayIcon size={32} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {video.category}
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">
                  {video.title}
                </h3>
                <p className="mt-2 text-gray-600">{video.description}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-green-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Want to See More?
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Subscribe to our YouTube channel for regular updates, tutorials, and
            case studies featuring our sustainable building materials.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe to Our Channel
          </button>
        </div>
      </div>
    </section>;
};