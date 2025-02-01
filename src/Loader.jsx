import React from 'react'
import { Default } from "react-awesome-spinners";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-45 bg-gradient-to-b from-slate-200 to-slate-100">
        <div className="flex gap-1 flex-wrap justify-center items-center">
          <Default />
          <h1 className="font-bold text-blue-500">Loading, please wait...</h1>
        </div>
      </div>
  )
}

export default Loader