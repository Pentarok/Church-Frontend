import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useLocation } from 'react-router-dom';  // To access the state passed from the previous page

const GroupPage = () => {
  const location = useLocation();  // Get the state passed by the Groups component
  const { id, name, summary, first, second, third, image, gallery } = location.state || {};
  const paragraphs = [first, second, third];

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h1 className='text-2xl shadow font-bold'>{name}</h1>
      <div className='flex flex-col items-center text-sm justify-center max-w-full px-4 w-[700px]'>
        <div>
          <img src={image} className='rounded-xl shadow' alt={name} />
        </div>
        <div className='text-justify'>
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {gallery && gallery.length > 0 && gallery.map((picture, i) => (
          <div key={i} className='mb-2'>
            <LazyLoadImage
              effect="blur"
              src={picture} // Normal image URL
              alt={`Gallery Image ${i}`}
              height="auto"
              width="100%"
              className='rounded-xl'
              placeholderSrc="path/to/placeholder.jpg"  // Optional: Add a placeholder image
              useIntersectionObserver={true}  // Ensure proper lazy loading behavior
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupPage;
