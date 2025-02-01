import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Default } from 'react-awesome-spinners'


const ChurchValues = ({onLoadingChange,data}) => {
    const [openData, setOpenData] = useState([]);
    const [multiSelect, setIsMultiselect] = useState(true);
    



    const handleClick = (index) => {
        if (openData.includes(index)) {
            // Close the tab
            const newData = openData.filter((i) => i !== index);
            setOpenData(newData);
        } else {
            // Open the tab
            if (multiSelect) {
                setOpenData((prevData) => [...prevData, index]);
            } else {
                setOpenData([index])
            }
        }
    }

    
    
   /*  if (loading) {
        return (
            <div className='flex items-center justify-center h-screen w-full'>
                <div className='flex gap-1 flex-wrap justify-center items-center'>
                    <Default /><h1 className='font-bold text-blue-500 '>Loading Please wait</h1>
                </div>
            </div>
        );
    } 
 */
    return (
        <div className='w-full p-4 max-h-[2000px] bg-gray-100 rounded-xl'>
            <h1 className='font-bold text-center text-sm md:text-3xl text-indigo-500'>Our Values</h1>
            {data && data.map((item, id) => (
                <div
                    key={id}
                    className={`${id === 0 ? "border-t-2" : ""}  w-4/5 max-h-[1000px] border-b-2 border-gray-950 mx-auto  flex flex-col h-full`}
                >
                    {/* Title part */}
                    <div
                        className='flex items-center w-full justify-between cursor-pointer p-2 bg-slate-200'
                        onClick={() => handleClick(id)}
                    >
                        <h1 className='text-black font-bold  text-sm   md:text-xl hover:text-indigo-500 p-2'>{item.title}</h1>
                        <div>
                        <span
                            className={`${
                                openData.includes(id) ? "rotate-45" : ""
                            } transition-all duration-300 transform origin-center w-[18px] h-[18px] font-bold mt-0 rounded-full pb-1 border-2 border-black font-sans flex justify-center items-center`}
                        >
                            +
                        </span>
                        </div>
                        
                    </div>

                    {/* Content part */}
                    <div

                        className={`${
                            openData.includes(id) ? " p-2 transition-all" : "hidden "
                        } overflow-hidden  cursor-default transition-max-height duration-300 ease-in-out`}
                   
                   >
                        {item.paragraphs.map((paragraph, i) => (
                            <div key={i}>
                                {paragraph}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChurchValues;
