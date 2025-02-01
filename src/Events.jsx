import React from 'react'
import { useNavigate } from 'react-router-dom';
import churchImage1 from './assets/churchImage1.jpg';
import { FaMapMarkerAlt } from 'react-icons/fa'; // FontAwesome
import { FaCalendarAlt } from 'react-icons/fa'; // FontAwesome
import { FaClock } from 'react-icons/fa'; // FontAwesome
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useProperTime from './useProperTime';
import useProperDay from './useProperday';
const Events = ({event}) => {
  const getProperTime = useProperTime();
 const getProperDay = useProperDay();
 
  const navigate = useNavigate();  // Initialize the navigate function
  

  const handleClick = () => {

    navigate('/event-details', { state: { event } });
  };
  return (
    <div className='p-2 hover:cursor-pointer transition-all hover:scale-105' onClick={handleClick} >
        <div className='w-[600] flex flex-col' >
              <div>
                
                <LazyLoadImage
                className='w-86 h-40 rounded-xl'
              effect="blur"
              src={event.PHOTO} // Normal image URL
              alt={`Gallery Image`}
              height="auto"
              width="100%"
       
              placeholderSrc="path/to/placeholder.jpg"  // Optional: Add a placeholder image
              useIntersectionObserver={true}  // Ensure proper lazy loading behavior
            />
              </div>
              <div>
                <h2 className='font-bold text-center'>{event.TITLE}</h2>
                <p className='text-slate-500 pb-1'>{event.TITLE}</p>
                <div className='flex gap-1'>
                <FaCalendarAlt style={{ fontSize: '20px', color: 'black' }} />
                <p className=''>{getProperDay(event.DAY)}</p>
                </div>
                  <div className='flex gap-1'>
                  <FaClock style={{ fontSize: '20px', color: 'black' }} />
                  <p>{getProperTime(event.TIME)}</p>
                  </div>
                  <div className='flex'>
                  <FaMapMarkerAlt style={{ fontSize: '20px', color: 'grey' }} />
                  <p>{event.VENUE}</p>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Events