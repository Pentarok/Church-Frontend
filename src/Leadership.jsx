import React from 'react';

const Leadership = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center  text-indigo-500 md:mb-6">Our Leadership</h1>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Text Section */}
        <div className="md:basis-1/2 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Our Pastor</h2>
          <h3 className="text-xl font-medium text-gray-700">
            Pastor Theodre Wales – Senior Pastor
          </h3>
          <p className="mt-2 text-gray-600">
            With a heart devoted to God and a vision to lead people into a deeper relationship
            with Christ, Pastor Theodre Wales serves as the Senior Pastor of GloryVine Church.
            With over [X] years of pastoral experience, he is passionate about preaching the Gospel,
            mentoring believers, and fostering a strong spiritual community.
          </p>

          {/* Quote Section */}
          <div
            className="mt-4 p-4 border-l-4 rounded-lg max-w-lg mx-auto md:mx-0"
            style={{
              backgroundColor: '#f8f9fa',
              borderLeftColor: '#6366F1',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <p className="text-lg italic text-gray-700">
              💬 "At <strong>GloryVine</strong>, we believe in faith that transforms, grace that restores, 
              and a love that unites us all. <strong>Welcome home!</strong>"
            </p>
            <p className="font-bold text-right text-indigo-600 mt-2">
              – Pastor Theodre Wales
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:basis-1/2">
          <img
            src="https://res.cloudinary.com/dtrskzurx/image/upload/v1738425409/pastor_uitwbv.jpg"
            className="w-full h-auto max-h-[400px] rounded-xl object-cover"
            alt="Pastor Theodre Wales"
          />
        </div>
      </div>
    </div>
  );
};

export default Leadership;
