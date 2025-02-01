import React from 'react'
import churchImage1 from './assets/churchImage1.jpg';
import { MdEmail, MdCall } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa'; // FontAwesome
import { FaClock } from 'react-icons/fa'; // FontAwesome
import useProperTime from './useProperTime';
import useProperDay from './useProperday';
const EventPage = () => {

  const location = useLocation();
  const {event} = location.state;
  
  const getProperTime = useProperTime();
  const getProperDay = useProperDay();
  
  return (
    <div className='md:relative' >
  
  <div className=' flex justify-center items-center w-full'>
<img src={event.PHOTO} className='w-full sm:h-80'  alt="" />
  </div>
  <div className='p-3 md:w-[500px]' >
                  
                  <div className='border-b border-slate-500'>
                  <h1 className='text-xl font-bold'>{event.TITLE}</h1>
                    <p>
                   {event.INFO}
                    </p>
                    </div>  
    <div>
    <h2 className='font-bold text-lg'>Venue</h2>
    <h2 className='py-1 border-b border-slate-500'>
    {event.VENUE}
    </h2>
    </div>
    <div className='border-b border-slate-500'>
        <h2 className='font-bold text-lg pb-1'>Date & Time</h2>
        <div className='flex gap-1 pb-2'>
                <FaCalendarAlt style={{ fontSize: '20px', color: 'black' }} />
                <p className=''>{getProperDay(event.DAY)}</p>
                </div>
                  <div className='flex gap-1'>
                  <FaClock style={{ fontSize: '20px', color: 'black' }} />
                  <p>{getProperTime(event.TIME)}</p>
                  
                  </div>
                  <p>Lasts approximately <span className='pl-2'>{event.DURATION}</span></p>
    </div>
    <div className='mt-3 md:absolute right-4 bottom-20 bg-slate-300 rounded-lg p-5'>
      <p>For any queries contact:</p>
      <div className='flex pb-1'>
        <MdEmail size={24} color="black" />
        <span style={{ marginLeft: "8px" }}>mak@gmail.com</span>
      </div>
      <div className='flex pb-2'>
        <MdCall size={24} color="green" />
        <span style={{ marginLeft: "8px" }}>+254705787654</span>
      </div>
      <p></p>
        <Link className="p-2 bg-black  text-white rounded-lg hover:bg-slate-600">Register and join us</Link>
    </div>
  </div>
    </div>
  )
}

export default EventPage