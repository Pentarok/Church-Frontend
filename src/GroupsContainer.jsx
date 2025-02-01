import React from 'react';
import Groups from './Groups';
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { Default } from 'react-awesome-spinners'
import Loader from './Loader';
const GroupsContainer = () => {
  
  const fetchData = async () => {
    const response = await axios.get(
      "https://script.google.com/macros/s/AKfycbwPn6n1zGQbTPmysx5u3qxxIEizLPKygQwUioPGsWmglO0ED99zsoD798piN_rLOdr57w/exec"
    );
    return response.data.data; // Ensure the API returns the data in this structure.
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["groups"],
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map((group, index) => (
         <div key={index} className='shadow p-2 rounded-xl'>
           <Groups
        gallery={group.GALLERY}
        group={group}
          key={index}
          name={group.NAME}
          summary={group.SUMMARY}
          id={group.ID}
          image={group.IMAGE}
          first={group.FIRST ? group.FIRST : ""}
          second={group.SECOND ? group.SECOND : ""}
          third={group.THIRD ? group.THIRD : ""}
        />
          </div>
       
      ))}
    </div>
  );
};

export default GroupsContainer;
