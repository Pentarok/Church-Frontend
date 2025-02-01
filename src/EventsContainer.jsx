import React from 'react'
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import Events from './Events';
import { Default } from "react-awesome-spinners";
import Loader from './Loader';
const EventsContainer = () => {
   

    
  const fetchData = async () => {
    const response = await axios.get(
      " https://script.google.com/macros/s/AKfycbwC-ILEF1f7tMSFX0mc2k5IPgJxsV8K5DWgMeLA2iUsaZE9C--NnwDfYKqomuXzkog4/exec"
    );
    return response.data.data; // Ensure the API returns the data in this structure.
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
  });

  if (isLoading) {
    return <Loader/>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
     {data.map((event,i)=>
     <div key={i} className='shadow p-2 rounded-xl'>
        <Events event={event}/>
        </div>)}
    </div>
    </div>
  )
}

export default EventsContainer