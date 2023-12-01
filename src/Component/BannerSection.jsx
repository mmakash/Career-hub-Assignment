// BannerSection.js
import React from 'react';

const BannerSection = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Side */}
        <div className="w-1/2 pr-8">
          <h1 className="md:text-7xl sm:text-6 xl font-bold mb-4 text-gray-800">One Step<br/> Closer To Your<br /> <span className='text-custom-color'>Dream Job</span></h1>
          <p className="text-lg text-gray-600 mb-6">
          Explore thousands of job opportunities with all<br /> the information you need. Its your future. Come find it. Manage all<br/> your job application from start to finish.
          </p>
          <button className="bg-custom-color text-white px-6 py-3 rounded-md hover:bg-blue-600">
            Click Me
          </button>
        </div>

        {/* Right Side */}
        <div className="w-1/2">
          <img
            src="/public/data/images/user.png" // Replace with the actual image URL
            alt="Banner Image"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
