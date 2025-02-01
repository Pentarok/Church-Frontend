import React from 'react';
import { useNavigate } from 'react-router-dom';

const Groups = ({ id, name, summary, first, second, third, image, gallery }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle the click and navigate to the group details page
  const handleClick = () => {
    navigate('/group-details', { state: { id, name, summary, first, second, third, image, gallery } });
  };

  return (
    <div className="p-2 cursor-pointer transition-all hover:scale-105 " onClick={handleClick}>
      <div className="flex flex-col  overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64">
          <img src={image}  alt={name} className="w-full h-full object-cover rounded-xl " />
        </div>
        {/* Text Section */}
        <div className="p-2">
          <h1 className="font-bold text-lg text-center text-gray-800">{name}</h1>
          <p className="text-sm text-gray-800 mt-0">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
